"use client";

import { usePathname } from "next/navigation";

const hiddenPrefixes = ["/student", "/instructor", "/admin"];
const hiddenExact = ["/login", "/register"];

export default function Footer() {
  const pathname = usePathname();

  if (
    hiddenExact.includes(pathname) ||
    hiddenPrefixes.some((prefix) => pathname.startsWith(prefix))
  ) {
    return null;
  }

  return (
    <footer className="mt-16 bg-[#252641] text-white">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col gap-6 border-b border-white/20 pb-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold">Skilline</h2>
            <p className="mt-2 text-sm text-white/70">Virtual Class for quality learning.</p>
          </div>
          <form className="flex w-full max-w-md gap-2">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-full border border-white/30 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-white/50"
            />
            <button
              type="button"
              className="rounded-full bg-[#49bbbd] px-5 py-2 text-sm font-semibold text-[#0f1c39]"
            >
              Subscribe
            </button>
          </form>
        </div>
        <p className="pt-6 text-center text-xs text-white/60">
          Copyright 2026 Skilline. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
