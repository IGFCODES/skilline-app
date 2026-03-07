"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Skilline
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 font-medium">
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
        </nav>

        {/* Right Buttons */}
        <div className="hidden md:flex gap-4">
          <Link
            href="/login"
            className="px-4 py-2 border rounded-lg hover:bg-gray-100"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4">
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>

          <Link href="/login">Login</Link>
          <Link href="/signup">Sign Up</Link>
        </div>
      )}
    </header>
  );
}
