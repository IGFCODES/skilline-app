export default function Hero() {
  return (
    <section className="bg-blue-50 py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
        <div>
          <h1 className="text-5xl font-bold leading-tight">
            Learn New Skills Online With Top Educators
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Improve your career and gain practical knowledge from expert
            instructors.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg">
              Get Started
            </button>

            <button className="px-6 py-3 border rounded-lg">
              View Courses
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1584697964154-b6a8b4b0aef4"
            alt="learning"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
