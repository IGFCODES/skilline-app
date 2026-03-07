"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    if (!response.ok) {
      const data = await response.json();
      setError(data.error ?? "Registration failed.");
      setLoading(false);
      return;
    }

    await signIn("credentials", { email, password, redirect: false });
    router.push("/student");
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] px-5 py-10">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl bg-white shadow-lg md:grid-cols-2">
        <div className="bg-[#49bbbd] p-10 text-[#102a43]">
          <h1 className="text-3xl font-extrabold">Create your Skilline account</h1>
          <p className="mt-4 text-sm">
            Start as a student now. Admins can promote members to instructor from the admin portal.
          </p>
        </div>
        <div className="p-8 md:p-10">
          <h2 className="text-2xl font-bold text-[#2f327d]">Register</h2>
          <p className="mt-2 text-sm text-[#696984]">Create your account in under one minute.</p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#2f327d]" htmlFor="name">
                Full name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full rounded-xl border border-[#e0e0e0] px-4 py-3 outline-none focus:border-[#49bbbd]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#2f327d]" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-xl border border-[#e0e0e0] px-4 py-3 outline-none focus:border-[#49bbbd]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#2f327d]" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full rounded-xl border border-[#e0e0e0] px-4 py-3 outline-none focus:border-[#49bbbd]"
              />
            </div>

            {error ? <p className="text-sm text-red-600">{error}</p> : null}

            <button
              disabled={loading}
              className="w-full rounded-full bg-[#f48c06] px-6 py-3 text-sm font-semibold text-white disabled:opacity-60"
            >
              {loading ? "Creating account..." : "Create Account"}
            </button>
          </form>

          <p className="mt-5 text-sm text-[#696984]">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-[#2f327d]">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
