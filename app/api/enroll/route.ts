import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const { userId, courseId } = body;

  const enrollment = await prisma.enrollment.create({
    data: {
      userId: Number(userId),
      courseId: Number(courseId),
    },
  });

  return NextResponse.json(enrollment);
}
