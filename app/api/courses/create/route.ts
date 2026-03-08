import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user || session.user.role !== "instructor") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();

  const { title, description } = body;

  if (!title || !description) {
    return NextResponse.json(
      { error: "Title and description are required." },
      { status: 400 },
    );
  }

  const course = await prisma.course.create({
    data: {
      title,
      description,
      instructorId: Number(session.user.id),
    },
  });

  return NextResponse.json(course);
}
