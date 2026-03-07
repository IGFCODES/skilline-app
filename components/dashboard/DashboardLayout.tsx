"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { signOut } from "next-auth/react";

type Role = "student" | "instructor" | "admin";

const roleLinks: Record<Role, Array<{ href: string; label: string }>> = {
  student: [
    { href: "/student", label: "Overview" },
    { href: "/student/courses", label: "Courses" },
  ],
  instructor: [
    { href: "/instructor", label: "Overview" },
    { href: "/instructor/create-course", label: "Create Course" },
  ],
  admin: [
    { href: "/admin", label: "Overview" },
    { href: "/admin/users", label: "Users" },
  ],
};

export default function DashboardLayout({
  children,
  role,
}: {
  children: ReactNode;
  role: Role;
}) {
  return (
    <div className="min-h-screen bg-[#f6f8fc]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 md:flex-row">
        <aside className="w-full rounded-2xl bg-[#252641] p-6 text-white md:w-64 md:min-h-[80vh]">
          <p className="text-xs font-semibold uppercase tracking-wide text-white/60">Skilline Portal</p>
          <h2 className="mt-2 text-2xl font-extrabold capitalize">{role}</h2>

          <nav className="mt-8 space-y-3">
            <Link className="block rounded-lg bg-white/10 px-3 py-2 text-sm" href="/">
              Back to Home
            </Link>
            {roleLinks[role].map((item) => (
              <Link key={item.href} className="block rounded-lg px-3 py-2 text-sm hover:bg-white/10" href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="mt-8 w-full rounded-full bg-[#f48c06] px-4 py-2 text-sm font-semibold text-white"
          >
            Sign Out
          </button>
        </aside>

        <main className="min-w-0 flex-1 rounded-2xl bg-white p-6 md:p-8">{children}</main>
      </div>
    </div>
  );
}
