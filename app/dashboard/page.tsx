import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  const role = session?.user?.role;

  if (!session?.user) {
    redirect("/login");
  }

  if (role === "admin") {
    redirect("/admin");
  }

  if (role === "instructor") {
    redirect("/instructor");
  }

  redirect("/student");
}
