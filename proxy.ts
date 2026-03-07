import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedPrefixes = ["/student", "/instructor", "/admin"];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

  const isProtectedRoute = protectedPrefixes.some((prefix) =>
    pathname.startsWith(prefix),
  );

  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token && (pathname === "/login" || pathname === "/register")) {
    const role = token.role as string;
    return NextResponse.redirect(new URL(`/${role}`, request.url));
  }

  if (token && pathname.startsWith("/student") && token.role !== "student") {
    return NextResponse.redirect(new URL(`/${token.role}`, request.url));
  }

  if (token && pathname.startsWith("/instructor") && token.role !== "instructor") {
    return NextResponse.redirect(new URL(`/${token.role}`, request.url));
  }

  if (token && pathname.startsWith("/admin") && token.role !== "admin") {
    return NextResponse.redirect(new URL(`/${token.role}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/student/:path*", "/instructor/:path*", "/admin/:path*", "/login", "/register"],
};
