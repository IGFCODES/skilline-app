import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function StudentDashboard() {
  const session = await getServerSession(authOptions);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Welcome {session?.user.name}</h1>

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <div className="card">Enrolled Courses</div>
        <div className="card">Progress</div>
        <div className="card">Upcoming Lessons</div>
      </div>
    </div>
  );
}
