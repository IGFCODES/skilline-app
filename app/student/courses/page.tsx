"use client";

import { useEffect, useState } from "react";

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/api/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Available Courses</h1>

      <div className="grid grid-cols-3 gap-6">
        {courses.map((course: any) => (
          <div key={course.id} className="border p-6 rounded">
            <h2 className="text-xl font-semibold">{course.title}</h2>

            <p className="text-gray-600 mt-2">{course.description}</p>

            <p className="text-sm mt-3">Instructor: {course.instructor.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
