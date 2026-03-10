import crypto from "crypto";
import prisma from "@/lib/prisma";
import { AuthTokenType } from "@prisma/client";

const TOKEN_BYTES = 32;

const hashToken = (token: string) => crypto.createHash("sha256").update(token).digest("hex");

export function getTokenHash(token: string) {
  return hashToken(token);
}

export async function issueAuthToken(input: {
  email: string;
  type: AuthTokenType;
  expiresInMinutes: number;
  userId?: number;
  name?: string;
  passwordHash?: string;
  role?: string;
}) {
  const plainToken = crypto.randomBytes(TOKEN_BYTES).toString("hex");
  const tokenHash = hashToken(plainToken);
  const expiresAt = new Date(Date.now() + input.expiresInMinutes * 60 * 1000);

  await prisma.authToken.create({
    data: {
      email: input.email,
      tokenHash,
      type: input.type,
      userId: input.userId,
      name: input.name,
      passwordHash: input.passwordHash,
      role: input.role,
      expiresAt,
    },
  });

  return { token: plainToken, expiresAt };
}
