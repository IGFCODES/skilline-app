import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password, role } = body;
    const allowedRoles = ["student", "instructor", "admin"] as const;
    const selectedRole = allowedRoles.includes(role) ? role : "student";

    if (!name || !email || !password) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json({ error: "Email already exists." }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: selectedRole,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error("Register API error:", error);

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return NextResponse.json({ error: "Email already exists." }, { status: 409 });
      }
      if (error.code === "P2021") {
        return NextResponse.json(
          { error: "Database schema is not initialized. Run Prisma migrations." },
          { status: 500 },
        );
      }
      return NextResponse.json({ error: `Database error (${error.code}).` }, { status: 500 });
    }

    if (error instanceof Prisma.PrismaClientInitializationError) {
      return NextResponse.json(
        { error: "Database connection failed. Check DATABASE_URL and deployment DB setup." },
        { status: 500 },
      );
    }

    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
