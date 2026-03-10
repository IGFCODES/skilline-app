import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { issueAuthToken } from "@/lib/auth-tokens";
import { sendVerificationEmail } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
    const password = typeof body?.password === "string" ? body.password : "";
    const role = typeof body?.role === "string" ? body.role : "";
    const allowedRoles = ["student", "instructor"] as const;
    const selectedRole = allowedRoles.includes(role) ? role : "student";

    if (!name || !email || !password) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }
    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters." },
        { status: 400 },
      );
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser?.emailVerified) {
      return NextResponse.json({ error: "Email already exists." }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.authToken.deleteMany({
      where: {
        email,
        type: "VERIFY_EMAIL",
      },
    });

    const { token } = await issueAuthToken({
      email,
      type: "VERIFY_EMAIL",
      expiresInMinutes: 24 * 60,
      name,
      passwordHash: hashedPassword,
      role: selectedRole,
    });

    await sendVerificationEmail(email, token);

    return NextResponse.json(
      { message: "Verification email sent. Check your inbox to activate your account." },
      { status: 200 },
    );
  } catch (error) {
    console.error("Register API error:", error);

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return NextResponse.json({ error: "Email already exists." }, { status: 409 });
      }
      if (error.code === "P2021") {
        return NextResponse.json(
          { error: "Database schema is not initialized. Run Prisma migrations." },
          { status: 500 },
        );
      }
      return NextResponse.json({ error: `Database error (${error.code}).` }, { status: 500 });
    }

    if (error instanceof Prisma.PrismaClientInitializationError) {
      return NextResponse.json(
        { error: "Database connection failed. Check DATABASE_URL and deployment DB setup." },
        { status: 500 },
      );
    }

    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
