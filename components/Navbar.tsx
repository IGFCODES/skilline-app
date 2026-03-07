"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#ece4d8] bg-[#fdf4e6]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="text-xl font-black tracking-tight text-[#113c7a]">
          Skilline
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#1b2d5a] md:flex">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/careers">Careers</Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="rounded-full border border-[#d2d6dc] px-5 py-2 text-sm font-semibold text-[#1b2d5a]"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="rounded-full bg-[#f48c06] px-5 py-2 text-sm font-semibold text-white"
          >
            Sign Up
          </Link>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-[#1b2d5a] md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className="text-2xl leading-none">{menuOpen ? "x" : "="}</span>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[#ece4d8] bg-[#fdf4e6] px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm font-medium text-[#1b2d5a]">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/login">Login</Link>
            <Link href="/register">Sign Up</Link>
          </div>
        </div>
      )}
    </header>
  );
}
