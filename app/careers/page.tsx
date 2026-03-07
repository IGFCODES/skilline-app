import Link from "next/link";

const roles = [
  "Frontend Engineer (Next.js)",
  "Backend Engineer (Node.js + Prisma)",
  "Product Designer (Education)",
  "Developer Advocate",
];

export default function CareersPage() {
  return (
    <div className="container-skilline py-16">
      <h1 className="text-4xl font-extrabold text-[#2f327d]">Careers at Skilline</h1>
      <p className="mt-4 max-w-3xl text-[#696984]">
        Help us build tools that improve learning outcomes for students and educators worldwide.
      </p>

      <div className="mt-10 grid gap-4">
        {roles.map((role) => (
          <article
            key={role}
            className="flex flex-col justify-between gap-3 rounded-2xl bg-white p-6 shadow-sm md:flex-row md:items-center"
          >
            <h2 className="text-lg font-bold text-[#2f327d]">{role}</h2>
            <button className="rounded-full bg-[#49bbbd] px-5 py-2 text-sm font-semibold text-[#0f1c39]">
              Apply now
            </button>
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
