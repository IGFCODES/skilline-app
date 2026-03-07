export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Student Dashboard</h1>

      {children}
    </div>
  );
}
