import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const users = await prisma.user.findMany({
    include: {
      courses: true,
      enrollments: true,
    },
  });

  return NextResponse.json(users);
}
