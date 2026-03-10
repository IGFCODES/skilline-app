import prisma from "@/lib/prisma";
import { issueAuthToken } from "@/lib/auth-tokens";
import { sendPasswordResetEmail } from "@/lib/email";
import { NextResponse } from "next/server";

const SUCCESS_RESPONSE = {
  message: "If the email exists, a password reset link has been sent.",
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";

    if (!email) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 },
      );
    }

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !user.emailVerified) {
      return NextResponse.json(SUCCESS_RESPONSE);
    }

    await prisma.authToken.deleteMany({
      where: {
        userId: user.id,
        type: "RESET_PASSWORD",
      },
    });

    const { token } = await issueAuthToken({
      email,
      userId: user.id,
      type: "RESET_PASSWORD",
      expiresInMinutes: 60,
    });

    await sendPasswordResetEmail(email, token);

    return NextResponse.json(SUCCESS_RESPONSE);
  } catch (error) {
    console.error("Forgot password API error:", error);
    return NextResponse.json(
      { error: "Unable to process password reset right now." },
      { status: 500 },
    );
  }
}
