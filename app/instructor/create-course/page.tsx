"use client";

import { FormEvent, useState } from "react";

export default function CreateCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    const res = await fetch("/api/courses/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      setMessage(data.error ?? "Failed to create course.");
      setLoading(false);
      return;
    }

    setTitle("");
    setDescription("");
    setMessage("Course created successfully.");
    setLoading(false);
  };

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold text-[#2f327d]">Create Course</h1>
      <p className="mt-2 text-sm text-[#696984]">Publish a new class for students on the platform.</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input
          className="w-full rounded-xl border border-[#e0e0e0] p-3"
          placeholder="Course Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="min-h-32 w-full rounded-xl border border-[#e0e0e0] p-3"
          placeholder="Course Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {message ? <p className="text-sm font-semibold text-[#2f327d]">{message}</p> : null}

        <button
          disabled={loading}
          className="rounded-full bg-[#f48c06] px-6 py-3 text-sm font-semibold text-white disabled:opacity-60"
        >
          {loading ? "Creating..." : "Create Course"}
        </button>
      </form>
    </div>
  );
}
