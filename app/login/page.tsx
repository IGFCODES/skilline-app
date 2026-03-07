"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error);
      return;
    }

    // Redirect based on role
    if (data.role === "student") {
      router.push("/student");
    }

    if (data.role === "instructor") {
      router.push("/instructor");
    }

    if (data.role === "admin") {
      router.push("/admin");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 border rounded-xl"
      >
        <h2 className="text-2xl font-bold mb-6">Login</h2>

        <input
          placeholder="Email"
          className="w-full border p-3 mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
          Login
        </button>
      </form>
    </div>
  );
}
