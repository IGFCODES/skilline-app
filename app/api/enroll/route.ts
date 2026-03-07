import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user || session.user.role !== "student") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { courseId } = body;

  if (!courseId) {
    return NextResponse.json({ error: "courseId is required" }, { status: 400 });
  }

  const existing = await prisma.enrollment.findFirst({
    where: {
      userId: Number(session.user.id),
      courseId: Number(courseId),
    },
  });

  if (existing) {
    return NextResponse.json({ error: "Already enrolled" }, { status: 409 });
  }

  const enrollment = await prisma.enrollment.create({
    data: {
      userId: Number(session.user.id),
      courseId: Number(courseId),
    },
  });

  return NextResponse.json(enrollment);
}
