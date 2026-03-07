import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function InstructorDashboard() {
  const session = await getServerSession(authOptions);

  const courses = await prisma.course.findMany({
    where: { instructorId: Number(session?.user?.id ?? 0) },
    include: {
      enrollments: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const totalStudents = courses.reduce((sum, course) => sum + course.enrollments.length, 0);

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#2f327d]">Instructor Dashboard</h1>
      <p className="mt-2 text-sm text-[#696984]">Welcome, {session?.user?.name}.</p>

      <div className="mt-7 grid gap-4 md:grid-cols-3">
        <article className="rounded-xl border border-[#eceff5] p-5">
          <p className="text-sm text-[#696984]">Courses created</p>
          <p className="mt-2 text-3xl font-bold text-[#2f327d]">{courses.length}</p>
        </article>
        <article className="rounded-xl border border-[#eceff5] p-5">
          <p className="text-sm text-[#696984]">Total enrolled students</p>
          <p className="mt-2 text-3xl font-bold text-[#2f327d]">{totalStudents}</p>
        </article>
        <article className="rounded-xl border border-[#eceff5] p-5">
          <p className="text-sm text-[#696984]">Quick action</p>
          <Link
            href="/instructor/create-course"
            className="mt-2 inline-block text-sm font-semibold text-[#f48c06]"
          >
            Create a new course
          </Link>
        </article>
      </div>

      <section className="mt-9">
        <h2 className="text-xl font-bold text-[#2f327d]">Your courses</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {courses.length > 0 ? (
            courses.map((course) => (
              <article key={course.id} className="rounded-xl border border-[#eceff5] p-5">
                <h3 className="text-lg font-bold text-[#2f327d]">{course.title}</h3>
                <p className="mt-2 text-sm text-[#696984]">{course.description}</p>
                <p className="mt-3 text-xs font-semibold uppercase text-[#8a8fb2]">
                  Enrolled: {course.enrollments.length}
                </p>
              </article>
            ))
          ) : (
            <p className="text-sm text-[#696984]">No course yet. Create your first course now.</p>
          )}
        </div>
      </section>
    </div>
  );
}
