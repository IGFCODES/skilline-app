"use client";

import { useEffect, useState } from "react";

type Course = {
  id: number;
  title: string;
  description: string;
  instructor: {
    name: string;
  };
  enrollments: Array<{ id: number }>;
};

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const loadCourses = async () => {
    try {
      const response = await fetch("/api/courses");
      const data = await response.json();
      setCourses(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCourses();
  }, []);

  const enroll = async (courseId: number) => {
    setMessage("");
    const response = await fetch("/api/enroll", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ courseId }),
    });

    if (!response.ok) {
      const data = await response.json();
      setMessage(data.error ?? "Enrollment failed.");
      return;
    }

    setMessage("Enrollment completed.");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#2f327d]">Available Courses</h1>
      <p className="mt-2 text-sm text-[#696984]">Enroll in any course and start learning immediately.</p>
      {message ? <p className="mt-4 text-sm font-semibold text-[#2f327d]">{message}</p> : null}

      {loading ? <p className="mt-6 text-sm text-[#696984]">Loading courses...</p> : null}

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {courses.map((course) => (
          <article key={course.id} className="rounded-xl border border-[#eceff5] p-5">
            <h2 className="text-xl font-bold text-[#2f327d]">{course.title}</h2>
            <p className="mt-2 text-sm text-[#696984]">{course.description}</p>
            <p className="mt-3 text-xs font-semibold uppercase text-[#8a8fb2]">
              Instructor: {course.instructor.name}
            </p>
            <p className="mt-1 text-xs text-[#8a8fb2]">Students: {course.enrollments.length}</p>
            <button
              type="button"
              onClick={() => enroll(course.id)}
              className="mt-4 rounded-full bg-[#f48c06] px-4 py-2 text-sm font-semibold text-white"
            >
              Enroll now
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
