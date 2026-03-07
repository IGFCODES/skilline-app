import Link from "next/link";

const posts = [
  "How to manage online classes effectively",
  "5 tips to create better assessments",
  "Designing portal workflows for education teams",
  "Student engagement metrics every instructor should track",
];

export default function BlogPage() {
  return (
    <div className="container-skilline py-16">
      <h1 className="text-4xl font-extrabold text-[#2f327d]">Skilline Blog</h1>
      <p className="mt-4 max-w-3xl text-[#696984]">
        Latest updates, learning resources, and classroom best practices from the Skilline team.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <article key={post} className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-[#2f327d]">{post}</h2>
            <p className="mt-3 text-sm text-[#696984]">
              Read practical guidance for students, instructors, and admins building better online
              learning experiences.
            </p>
          </article>
        ))}
      </div>

      <div className="mt-10">
        <Link href="/" className="rounded-full bg-[#f48c06] px-6 py-3 text-sm font-semibold text-white">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
