"use client";

import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  role: "student" | "instructor" | "admin";
  _count: {
    courses: number;
    enrollments: number;
  };
};

export default function AdminUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const loadUsers = async () => {
    try {
      const response = await fetch("/api/admin/users");
      const data = await response.json();
      setUsers(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const updateRole = async (id: number, role: User["role"]) => {
    setMessage("");
    setLoading(true);
    const response = await fetch("/api/admin/promote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: id, role }),
    });

    if (!response.ok) {
      const data = await response.json();
      setMessage(data.error ?? "Failed to update role.");
      setLoading(false);
      return;
    }

    setMessage("Role updated successfully.");
    await loadUsers();
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#2f327d]">Admin User Management</h1>
      <p className="mt-2 text-sm text-[#696984]">Promote users and control role access across portals.</p>
      {message ? <p className="mt-4 text-sm font-semibold text-[#2f327d]">{message}</p> : null}

      {loading ? <p className="mt-6 text-sm text-[#696984]">Loading users...</p> : null}

      <div className="mt-6 space-y-4">
        {users.map((user) => (
          <article key={user.id} className="flex flex-col gap-4 rounded-xl border border-[#eceff5] p-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-semibold text-[#2f327d]">{user.name}</p>
              <p className="text-sm text-[#696984]">{user.email}</p>
              <p className="mt-1 text-xs uppercase text-[#8a8fb2]">
                Courses: {user._count.courses} | Enrollments: {user._count.enrollments}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-[#2f327d]">Role:</span>
              <select
                value={user.role}
                onChange={(event) => updateRole(user.id, event.target.value as User["role"])}
                className="rounded-lg border border-[#d7dceb] px-3 py-2 text-sm"
              >
                <option value="student">Student</option>
                <option value="instructor">Instructor</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
