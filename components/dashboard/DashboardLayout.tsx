"use client";

import Link from "next/link";
import { ReactNode } from "react";

export default function DashboardLayout({
  children,
  role,
}: {
  children: ReactNode;
  role: string;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6">
        <h2 className="text-xl font-bold mb-8">Skilline {role}</h2>

        <nav className="space-y-4">
          <Link href="/">Home</Link>

          <Link href={`/${role}`}>Dashboard</Link>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-10 bg-gray-50">{children}</main>
    </div>
  );
}
