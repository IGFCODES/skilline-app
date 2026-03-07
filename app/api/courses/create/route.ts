import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const { title, description, instructorId } = body;

  const course = await prisma.course.create({
    data: {
      title,
      description,
      instructorId: Number(instructorId),
    },
  });

  return NextResponse.json(course);
}
