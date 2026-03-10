import prisma from "@/lib/prisma";
import { getTokenHash } from "@/lib/auth-tokens";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const token = typeof body?.token === "string" ? body.token : "";
    const password = typeof body?.password === "string" ? body.password : "";

    if (!token || !password) {
      return NextResponse.json(
        { error: "Token and password are required." },
        { status: 400 },
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters." },
        { status: 400 },
      );
    }

    const tokenHash = getTokenHash(token);
    const resetToken = await prisma.authToken.findFirst({
      where: {
        tokenHash,
        type: "RESET_PASSWORD",
        usedAt: null,
        expiresAt: { gt: new Date() },
      },
    });

    if (!resetToken || !resetToken.userId) {
      return NextResponse.json(
        { error: "Invalid or expired reset link." },
        { status: 400 },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.$transaction([
      prisma.user.update({
        where: { id: resetToken.userId },
        data: { password: hashedPassword },
      }),
      prisma.authToken.update({
        where: { id: resetToken.id },
        data: { usedAt: new Date() },
      }),
      prisma.authToken.deleteMany({
        where: {
          userId: resetToken.userId,
          type: "RESET_PASSWORD",
          id: { not: resetToken.id },
        },
      }),
    ]);

    return NextResponse.json({ message: "Password has been reset successfully." });
  } catch (error) {
    console.error("Reset password API error:", error);
    return NextResponse.json(
      { error: "Unable to reset password right now." },
      { status: 500 },
    );
  }
}
