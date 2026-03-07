import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { courseId } = body;

  await prisma.course.delete({
    where: {
      id: Number(courseId),
    },
  });

  return NextResponse.json({ message: "Course deleted" });
}
