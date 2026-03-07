"use client";

import { useEffect, useState } from "react";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/admin/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const promote = async (id: number) => {
    await fetch("/api/admin/promote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: id }),
    });

    alert("User promoted to instructor");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin User Management</h1>

      <div className="space-y-4">
        {users.map((user: any) => (
          <div
            key={user.id}
            className="border p-4 rounded flex justify-between"
          >
            <div>
              <p className="font-semibold">{user.name}</p>

              <p className="text-sm text-gray-600">{user.email}</p>

              <p className="text-sm">Role: {user.role}</p>
            </div>

            <button
              onClick={() => promote(user.id)}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Promote
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
