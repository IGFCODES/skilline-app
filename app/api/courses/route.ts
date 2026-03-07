import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);
  const { searchParams } = new URL(req.url);
  const mine = searchParams.get("mine");

  const where =
    mine === "1" && session?.user?.role === "instructor"
      ? { instructorId: Number(session.user.id) }
      : undefined;

  const courses = await prisma.course.findMany({
    where,
    include: {
      instructor: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
      enrollments: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(courses);
}
