import { Course } from "@/types/course";

interface Props {
  course: Course;
}

export default function CourseCard({ course }: Props) {
  return (
    <div className="border rounded-xl overflow-hidden hover:shadow-lg transition">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-semibold">{course.title}</h3>

        <p className="text-gray-500 mt-2">Instructor: {course.instructor}</p>

        <p className="text-sm text-gray-400 mt-1">{course.students}</p>

        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg">
          Enroll Now
        </button>
      </div>
    </div>
  );
}
