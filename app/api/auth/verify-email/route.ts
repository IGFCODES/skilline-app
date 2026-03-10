import prisma from "@/lib/prisma";
import { getTokenHash } from "@/lib/auth-tokens";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const token = url.searchParams.get("token");

  if (!token) {
    return NextResponse.redirect(new URL("/login?verified=invalid", url.origin));
  }

  const tokenHash = getTokenHash(token);
  const verificationToken = await prisma.authToken.findFirst({
    where: {
      tokenHash,
      type: "VERIFY_EMAIL",
      usedAt: null,
      expiresAt: { gt: new Date() },
    },
  });

  if (!verificationToken || !verificationToken.name || !verificationToken.passwordHash) {
    return NextResponse.redirect(new URL("/login?verified=invalid", url.origin));
  }

  const existingUser = await prisma.user.findUnique({
    where: { email: verificationToken.email },
  });

  if (existingUser) {
    if (!existingUser.emailVerified) {
      await prisma.user.update({
        where: { id: existingUser.id },
        data: { emailVerified: new Date() },
      });
    }
  } else {
    await prisma.user.create({
      data: {
        name: verificationToken.name,
        email: verificationToken.email,
        password: verificationToken.passwordHash,
        role: verificationToken.role ?? "student",
        emailVerified: new Date(),
      },
    });
  }

  await prisma.$transaction([
    prisma.authToken.update({
      where: { id: verificationToken.id },
      data: { usedAt: new Date() },
    }),
    prisma.authToken.deleteMany({
      where: {
        email: verificationToken.email,
        type: "VERIFY_EMAIL",
        id: { not: verificationToken.id },
      },
    }),
  ]);

  return NextResponse.redirect(new URL("/login?verified=1", url.origin));
}
