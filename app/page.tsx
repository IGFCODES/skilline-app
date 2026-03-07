import Image from "next/image";
import Link from "next/link";

const partners = ["Google", "NETFLIX", "airbnb", "amazon", "facebook", "Grab"];

const softwareItems = [
  {
    title: "Online Billing, Invoicing, and Contracts",
    body: "Simple invoice and payment tracking built for educators.",
  },
  {
    title: "Easy Scheduling and Attendance Tracking",
    body: "Set classes, reminders, and attendance in one dashboard.",
  },
  {
    title: "Customer Tracking",
    body: "Keep student records, progress, and communication organized.",
  },
];

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <section className="relative bg-[#fdf4e6] pb-20 pt-12">
        <div className="container-skilline grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="max-w-xl text-4xl font-extrabold leading-tight text-[#2f327d] md:text-5xl">
              <span className="text-[#f48c06]">Studying</span> Online is now much easier
            </h1>
            <p className="mt-5 max-w-lg text-base text-[#696984] md:text-lg">
              Skilline is an interesting platform that will teach you in a more interactive way.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/register"
                className="rounded-full bg-[#f48c06] px-6 py-3 text-sm font-semibold text-white"
              >
                Join for free
              </Link>
              <Link
                href="/login"
                className="rounded-full border border-[#d8d8d8] bg-white px-6 py-3 text-sm font-semibold text-[#2f327d]"
              >
                Watch how it works
              </Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -left-8 top-12 rounded-xl bg-white p-3 text-sm shadow-lg">
              250k Assisted Students
            </div>
            <div className="absolute -right-8 bottom-12 rounded-xl bg-white p-3 text-sm shadow-lg">
              4.8/5 Student Rating
            </div>
            <Image
              src="/hero.png"
              alt="Skilline student hero"
              width={520}
              height={560}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </section>

      <section className="container-skilline py-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#696984]">
          Trusted by 5,000+ companies worldwide
        </p>
        <div className="mt-7 grid grid-cols-2 gap-4 text-[#8d92b8] md:grid-cols-6">
          {partners.map((partner) => (
            <p key={partner} className="text-lg font-semibold">
              {partner}
            </p>
          ))}
        </div>
      </section>

      <section id="features" className="container-skilline py-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-[#2f327d] md:text-4xl">
            All-In-One Cloud Software
          </h2>
          <p className="mt-4 text-[#696984]">
            Skilline is one powerful online software suite that combines all the tools needed to
            run a successful school or office.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {softwareItems.map((item) => (
            <article key={item.title} className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-4 h-12 w-12 rounded-xl bg-[#49bbbd]/20" />
              <h3 className="text-lg font-bold text-[#2f327d]">{item.title}</h3>
              <p className="mt-3 text-sm text-[#696984]">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="portals" className="container-skilline py-14">
        <h2 className="text-center text-3xl font-extrabold text-[#2f327d] md:text-4xl">
          Built for every user role
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl bg-white p-7 shadow-sm">
            <h3 className="text-2xl font-bold text-[#2f327d]">Student Portal</h3>
            <p className="mt-3 text-sm text-[#696984]">
              Browse courses, enroll instantly, and track your learning progress.
            </p>
            <Link href="/student" className="mt-5 inline-block text-sm font-semibold text-[#f48c06]">
              Open Student Portal
            </Link>
          </article>
          <article className="rounded-2xl bg-white p-7 shadow-sm">
            <h3 className="text-2xl font-bold text-[#2f327d]">Instructor Portal</h3>
            <p className="mt-3 text-sm text-[#696984]">
              Create courses, manage classroom content, and monitor enrollments.
            </p>
            <Link
              href="/instructor"
              className="mt-5 inline-block text-sm font-semibold text-[#f48c06]"
            >
              Open Instructor Portal
            </Link>
          </article>
          <article className="rounded-2xl bg-white p-7 shadow-sm">
            <h3 className="text-2xl font-bold text-[#2f327d]">Admin Portal</h3>
            <p className="mt-3 text-sm text-[#696984]">
              Promote users, govern platform access, and maintain course quality.
            </p>
            <Link href="/admin" className="mt-5 inline-block text-sm font-semibold text-[#f48c06]">
              Open Admin Portal
            </Link>
          </article>
        </div>
      </section>

      <section id="news" className="container-skilline py-8 pb-20">
        <div className="rounded-3xl bg-[#252641] p-8 text-white md:p-12">
          <h2 className="text-3xl font-extrabold">Latest News and Resources</h2>
          <p className="mt-4 max-w-2xl text-sm text-white/80">
            Learn about class management, online assessment tips, and practical tools for remote
            learning teams.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/register" className="rounded-full bg-[#f48c06] px-6 py-3 text-sm font-semibold">
              Start Learning
            </Link>
            <Link
              href="/login"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold"
            >
              Login to your portal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
