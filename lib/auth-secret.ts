const DEV_FALLBACK_SECRET = "skilline-demo-fallback-secret";

export const AUTH_SECRET =
  process.env.NEXTAUTH_SECRET ??
  (process.env.NODE_ENV === "production" ? undefined : DEV_FALLBACK_SECRET);

if (!AUTH_SECRET) {
  throw new Error("NEXTAUTH_SECRET is required in production.");
}
