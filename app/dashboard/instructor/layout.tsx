export default function InstructorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Instructor Dashboard</h1>

      {children}
    </div>
  );
}
