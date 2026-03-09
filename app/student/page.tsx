import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function StudentDashboard() {
  const session = await getServerSession(authOptions);
  const role = session?.user?.role;

  if (!session?.user) {
    redirect("/login");
  }

  if (role && role !== "student") {
    redirect(`/${role}`);
  }

  const [courseCount, enrollments] = await Promise.all([
    prisma.course.count(),
    prisma.enrollment.findMany({
      where: { userId: Number(session?.user?.id ?? 0) },
      include: {
        course: true,
      },
      orderBy: {
        id: "desc",
      },
      take: 3,
    }),
  ]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#2f327d]">Student Dashboard</h1>
      <p className="mt-2 text-sm text-[#696984]">Welcome back, {session?.user?.name}.</p>

      <div className="mt-7 grid gap-4 md:grid-cols-3">
        <article className="rounded-xl border border-[#eceff5] p-5">
          <p className="text-sm text-[#696984]">Available courses</p>
          <p className="mt-2 text-3xl font-bold text-[#2f327d]">{courseCount}</p>
        </article>
        <article className="rounded-xl border border-[#eceff5] p-5">
          <p className="text-sm text-[#696984]">Your enrollments</p>
          <p className="mt-2 text-3xl font-bold text-[#2f327d]">{enrollments.length}</p>
        </article>
        <article className="rounded-xl border border-[#eceff5] p-5">
          <p className="text-sm text-[#696984]">Quick action</p>
          <Link href="/student/courses" className="mt-2 inline-block text-sm font-semibold text-[#f48c06]">
            Browse courses
          </Link>
        </article>
      </div>

      <section className="mt-9">
        <h2 className="text-xl font-bold text-[#2f327d]">Recent enrolled courses</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {enrollments.length > 0 ? (
            enrollments.map((enrollment) => (
              <article key={enrollment.id} className="rounded-xl border border-[#eceff5] p-5">
                <h3 className="text-lg font-bold text-[#2f327d]">{enrollment.course.title}</h3>
                <p className="mt-2 text-sm text-[#696984]">{enrollment.course.description}</p>
              </article>
            ))
          ) : (
            <p className="text-sm text-[#696984]">You have not enrolled in any course yet.</p>
          )}
        </div>
      </section>
    </div>
  );
}
