import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import CourseCard from "@/components/CourseCard";
import Testimonial from "@/components/Testimonial";
import { courses } from "@/data/courses";

export default function HomePage() {
  return (
    <div>
      <Hero />

      {/* FEATURES */}

      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center">
            Why Choose Skilline
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">
            <FeatureCard
              title="Expert Instructors"
              description="Learn from professionals with real industry experience."
            />

            <FeatureCard
              title="Flexible Learning"
              description="Study anytime anywhere at your own pace."
            />

            <FeatureCard
              title="Career Growth"
              description="Gain practical skills for real world jobs."
            />
          </div>
        </div>
      </section>

      {/* COURSES */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center">Popular Courses</h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      <Testimonial />
    </div>
  );
}
