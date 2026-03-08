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

const featureRows = [
  {
    title: "A user interface designed for the classroom",
    body: "Clear layouts for teachers and learners with focused class, quiz, and review actions.",
    image:
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Tools for teachers and learners",
    body: "Assignments, quizzes, live sessions, and files in one practical learning workspace.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Assessment, quizzes, and tests",
    body: "Measure progress with quick checks and detailed course-level analytics for every class.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Class management tools for educators",
    body: "Manage enrollments, monitor attendance trends, and coordinate lesson milestones.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
  },
];

const integrations = ["OneDrive", "Dropbox", "Google Drive", "Microsoft Teams"];

const blogPosts = [
  {
    title: "Class design tips for online learning teams",
    image:
      "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "How instructors can grow engagement in week 1",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Admin checklists for smooth portal operations",
    image:
      "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=900&q=80",
  },
];

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <section className="relative bg-[#fdf4e6] pb-28 pt-14">
        <div className="container-skilline grid items-center gap-12 md:grid-cols-2">
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
              <a
                href="#features"
                className="rounded-full border border-[#d8d8d8] bg-white px-6 py-3 text-sm font-semibold text-[#2f327d]"
              >
                Watch how it works
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -left-3 -top-3 h-7 w-7 rounded-full bg-[#49bbbd]" />
            <div className="absolute -left-6 top-12 rounded-xl bg-white p-3 text-sm shadow-lg">
              250k Assisted Students
            </div>
            <div className="absolute -right-6 bottom-12 rounded-xl bg-white p-3 text-sm shadow-lg">
              4.8/5 Student Rating
            </div>
            <div className="absolute -bottom-3 -right-3 h-6 w-6 rounded-full bg-[#f48c06]" />
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80"
              alt="Students learning online"
              className="h-[460px] w-full rounded-3xl object-cover shadow-xl"
            />
          </div>
        </div>
        <div className="pointer-events-none absolute -bottom-14 left-0 right-0 h-28 rounded-t-[50%] bg-[#f9fafb]" />
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

      <section id="features" className="container-skilline py-14">
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
          {softwareItems.map((item, idx) => (
            <article key={item.title} className="rounded-2xl bg-white p-7 shadow-[0_20px_50px_rgba(47,50,125,0.08)]">
              <div
                className={`mb-4 h-12 w-12 rounded-xl ${
                  idx === 0 ? "bg-[#5B72EE]/20" : idx === 1 ? "bg-[#F48C06]/20" : "bg-[#49BBBD]/20"
                }`}
              />
              <h3 className="text-lg font-bold text-[#2f327d]">{item.title}</h3>
              <p className="mt-3 text-sm text-[#696984]">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-skilline py-12">
        <h2 className="text-center text-3xl font-extrabold text-[#2f327d]">What is Skilline?</h2>
        <p className="mx-auto mt-3 max-w-3xl text-center text-[#696984]">
          Skilline makes online education practical for institutions and teams by combining class
          operations and learning delivery in one place.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl bg-[#252641] p-8 text-white">
            <h3 className="text-2xl font-bold">For Instructors</h3>
            <p className="mt-3 text-sm text-white/80">
              Build courses, share resources, assign tests, and manage cohorts with confidence.
            </p>
          </article>
          <article className="rounded-2xl bg-[#49bbbd] p-8 text-[#103649]">
            <h3 className="text-2xl font-bold">For Students</h3>
            <p className="mt-3 text-sm text-[#103649]/80">
              Join classes, submit assessments, and follow your learning progress with ease.
            </p>
          </article>
        </div>
      </section>

      <section className="container-skilline py-12">
        <div className="mb-6">
          <h2 className="text-center text-3xl font-extrabold text-[#2f327d]">Our Features</h2>
          <p className="mx-auto mt-3 max-w-3xl text-center text-[#696984]">
            This very extraordinary feature can make learning activities more efficient.
          </p>
        </div>
        <div className="mt-10 space-y-8">
          {featureRows.map((item, index) => (
            <article
              key={item.title}
              className={`grid items-center gap-6 rounded-3xl bg-white p-7 shadow-[0_20px_50px_rgba(47,50,125,0.08)] md:grid-cols-2 ${index % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <img src={item.image} alt={item.title} className="h-64 w-full rounded-2xl object-cover" />
              <div>
                <h3 className="text-2xl font-bold text-[#2f327d]">{item.title}</h3>
                <p className="mt-3 text-sm text-[#696984]">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="portals" className="container-skilline py-16">
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
            <Link href="/instructor" className="mt-5 inline-block text-sm font-semibold text-[#f48c06]">
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

      <section className="container-skilline py-14">
        <div className="grid gap-8 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-2 md:p-10">
          <div>
            <h2 className="text-3xl font-extrabold text-[#2f327d]">Integrations</h2>
            <p className="mt-3 text-sm text-[#696984]">
              200+ educational tools and platform integrations to streamline your workflow.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {integrations.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#dae0ef] px-4 py-2 text-sm font-semibold text-[#2f327d]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1100&q=80"
            alt="Team collaboration and integration"
            className="h-64 w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      <section id="news" className="container-skilline py-8 pb-20">
        <h2 className="text-center text-3xl font-extrabold text-[#2f327d]">Latest News and Resources</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <img src={post.image} alt={post.title} className="h-44 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#2f327d]">{post.title}</h3>
                <Link href="/blog" className="mt-4 inline-block text-sm font-semibold text-[#f48c06]">
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid items-center gap-6 rounded-3xl bg-[#252641] p-8 text-white md:grid-cols-2 md:p-12">
          <div>
            <h2 className="text-3xl font-extrabold">What They Say?</h2>
            <p className="mt-3 max-w-2xl text-sm text-white/80">
              "The student and instructor portals helped our team run classes with better
              coordination and clearer progress tracking."
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
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80"
            alt="Happy student testimonial"
            className="h-64 w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      <section className="container-skilline pb-16">
        <div className="rounded-3xl border border-[#eceff5] bg-white p-8 text-center">
          <h2 className="text-3xl font-extrabold text-[#2f327d]">Start your Skilline journey today</h2>
          <p className="mx-auto mt-3 max-w-2xl text-[#696984]">
            Join students, instructors, and admins building better online learning experiences.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/register" className="rounded-full bg-[#f48c06] px-6 py-3 text-sm font-semibold text-white">
              Create account
            </Link>
            <Link href="/about" className="rounded-full border border-[#d7dceb] px-6 py-3 text-sm font-semibold text-[#2f327d]">
              Learn more
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
