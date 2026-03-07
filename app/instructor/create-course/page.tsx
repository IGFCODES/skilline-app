"use client";

import { useState } from "react";

export default function CreateCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await fetch("/api/courses/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        instructorId: 1,
      }),
    });

    alert("Course Created");
  };

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-bold mb-6">Create Course</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="border p-3 w-full"
          placeholder="Course Title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="border p-3 w-full"
          placeholder="Course Description"
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="bg-blue-600 text-white px-6 py-3 rounded">
          Create Course
        </button>
      </form>
    </div>
  );
}
