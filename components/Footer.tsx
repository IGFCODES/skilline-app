import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">
        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold">Skilline</h2>
          <p className="mt-4 text-gray-400">
            The best platform to learn new skills online.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <div className="flex flex-col gap-2 text-gray-400">
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/courses">Courses</Link>
          </div>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          <div className="flex flex-col gap-2 text-gray-400">
            <Link href="#">Help Center</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms</Link>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-4">Subscribe</h3>

          <div className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="px-3 py-2 rounded-l-lg text-black w-full"
            />

            <button className="bg-blue-600 px-4 rounded-r-lg">Join</button>
          </div>
        </div>
      </div>

      <div className="text-center py-6 border-t border-gray-700 text-gray-400">
        © 2026 Skilline. All rights reserved.
      </div>
    </footer>
  );
}
