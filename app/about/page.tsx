import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container-skilline py-16">
      <h1 className="text-4xl font-extrabold text-[#2f327d]">About Skilline</h1>
      <p className="mt-4 max-w-3xl text-[#696984]">
        Skilline is an online learning platform built for students, instructors, and administrators.
        Our mission is to simplify digital learning while keeping classrooms engaging and measurable.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#2f327d]">Our Mission</h2>
          <p className="mt-3 text-sm text-[#696984]">Make quality education accessible to every learner.</p>
        </article>
        <article className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#2f327d]">Our Vision</h2>
          <p className="mt-3 text-sm text-[#696984]">Power modern schools with unified learning workflows.</p>
        </article>
        <article className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#2f327d]">Our Values</h2>
          <p className="mt-3 text-sm text-[#696984]">Clarity, collaboration, and measurable learning outcomes.</p>
        </article>
      </div>

      <div className="mt-10">
        <Link href="/" className="rounded-full bg-[#f48c06] px-6 py-3 text-sm font-semibold text-white">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
