export default function Features() {
  return (
    <section className="px-10 py-20 bg-soft">
      <h2 className="text-3xl font-bold text-center text-secondary">
        All-in-One Cloud Software
      </h2>

      <p className="text-center text-gray-500 mt-4">
        Skilline is one powerful online software suite
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="card text-center">
          <h3 className="font-bold text-lg">Online Billing</h3>
          <p className="text-gray-500 mt-2">
            Manage invoices and contracts easily.
          </p>
        </div>

        <div className="card text-center">
          <h3 className="font-bold text-lg">Scheduling</h3>
          <p className="text-gray-500 mt-2">
            Schedule and track learning sessions.
          </p>
        </div>

        <div className="card text-center">
          <h3 className="font-bold text-lg">Customer Tracking</h3>
          <p className="text-gray-500 mt-2">Track students and engagement.</p>
        </div>
      </div>
    </section>
  );
}
