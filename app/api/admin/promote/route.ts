import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { userId } = body;

  const user = await prisma.user.update({
    where: { id: Number(userId) },
    data: { role: "instructor" },
  });

  return NextResponse.json(user);
}
