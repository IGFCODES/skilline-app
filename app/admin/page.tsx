import prisma from "@/lib/prisma";
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);
  const role = session?.user?.role;

  if (!session?.user) {
    redirect("/login");
  }

  if (role !== "admin") {
    redirect(role ? `/${role}` : "/login");
  }

  const [userCount, courseCount, enrollmentCount] = await Promise.all([
    prisma.user.count(),
    prisma.course.count(),
    prisma.enrollment.count(),
  ]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#2f327d]">Admin Dashboard</h1>
      <p className="mt-2 text-sm text-[#696984]">Control users, courses, and platform operations.</p>

      <div className="mt-7 grid gap-4 md:grid-cols-3">
        <article className="rounded-xl border border-[#eceff5] p-5">
          <p className="text-sm text-[#696984]">Users</p>
          <p className="mt-2 text-3xl font-bold text-[#2f327d]">{userCount}</p>
        </article>
        <article className="rounded-xl border border-[#eceff5] p-5">
          <p className="text-sm text-[#696984]">Courses</p>
          <p className="mt-2 text-3xl font-bold text-[#2f327d]">{courseCount}</p>
        </article>
        <article className="rounded-xl border border-[#eceff5] p-5">
          <p className="text-sm text-[#696984]">Enrollments</p>
          <p className="mt-2 text-3xl font-bold text-[#2f327d]">{enrollmentCount}</p>
        </article>
      </div>

      <div className="mt-8">
        <Link href="/admin/users" className="rounded-full bg-[#f48c06] px-6 py-3 text-sm font-semibold text-white">
          Manage users and roles
        </Link>
      </div>
    </div>
  );
}
