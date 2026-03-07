import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <p className="mt-4">Welcome {session?.user?.name}</p>

      <p>Role: {session?.user?.role}</p>
    </div>
  );
}
