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
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<"student" | "instructor" | "admin">("student");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const parseResponseError = async (response: Response, fallback: string) => {
    try {
      const data = await response.json();
      return (data?.error as string | undefined) ?? fallback;
    } catch {
      return fallback;
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }),
      });

      if (!response.ok) {
        setError(await parseResponseError(response, "Registration failed."));
        setLoading(false);
        return;
      }

      const loginResult = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (loginResult?.error) {
        setError("Account created, but auto-login failed. Please log in manually.");
        setLoading(false);
        return;
      }

      router.push("/dashboard");
      router.refresh();
    } catch {
      setError("Registration failed due to a network/server error.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] px-5 py-10">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl bg-white shadow-lg md:grid-cols-2">
        <div className="bg-[#49bbbd] p-10 text-[#102a43]">
          <h1 className="text-3xl font-extrabold">Create your Skilline account</h1>
          <p className="mt-4 text-sm">
            Register as a student, instructor, or admin and get routed to the matching portal.
          </p>
        </div>
        <div className="p-8 md:p-10">
          <h2 className="text-2xl font-bold text-[#2f327d]">Register</h2>
          <p className="mt-2 text-sm text-[#696984]">
            Create your account and choose the portal role.
          </p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#2f327d]" htmlFor="role">
                Register as
              </label>
              <select
                id="role"
                value={role}
                onChange={(event) =>
                  setRole(event.target.value as "student" | "instructor" | "admin")
                }
                className="w-full rounded-xl border border-[#e0e0e0] px-4 py-3 outline-none focus:border-[#49bbbd]"
              >
                <option value="student">Student</option>
                <option value="instructor">Instructor</option>
                <option value="admin">Admin</option>
              </select>
            </div>

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
              <div className="flex items-center gap-2 rounded-xl border border-[#e0e0e0] px-3 focus-within:border-[#49bbbd]">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  minLength={6}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full border-0 bg-transparent px-1 py-3 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="text-xs font-semibold text-[#2f327d]"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
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
