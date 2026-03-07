"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const hiddenPrefixes = ["/student", "/instructor", "/admin"];
const hiddenExact = ["/login", "/register"];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  if (
    hiddenExact.includes(pathname) ||
    hiddenPrefixes.some((prefix) => pathname.startsWith(prefix))
  ) {
    return null;
  }

  return (
    <header className="sticky top-0 z-40 border-b border-[#ece4d8] bg-[#fdf4e6]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="text-xl font-black tracking-tight text-[#113c7a]">
          Skilline
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#1b2d5a] md:flex">
          <Link href="/">Home</Link>
          <a href="#features">Features</a>
          <a href="#portals">Portals</a>
          <a href="#news">News</a>
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
            <a href="#features">Features</a>
            <a href="#portals">Portals</a>
            <a href="#news">News</a>
            <Link href="/login">Login</Link>
            <Link href="/register">Sign Up</Link>
          </div>
        </div>
      )}
    </header>
  );
}
