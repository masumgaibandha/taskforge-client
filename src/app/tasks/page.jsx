const TasksPage = () => {
  return (
    <section className="min-h-screen bg-slate-950 py-16 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-10">
          <p className="text-sm font-semibold text-cyan-400">Browse Tasks</p>

          <h1 className="mt-2 text-4xl font-bold">
            Find Your Next Opportunity
          </h1>

          <p className="mt-3 max-w-2xl text-slate-400">
            Explore available micro-tasks from clients around the world. Submit
            proposals and start earning.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="mb-8 grid gap-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-5 md:grid-cols-3">
          <input
            type="text"
            placeholder="Search tasks..."
            className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none"
          />

          <select className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none">
            <option>All Categories</option>
            <option>Design</option>
            <option>Writing</option>
            <option>Development</option>
            <option>Marketing</option>
            <option>Other</option>
          </select>

          <button className="rounded-xl bg-cyan-500 px-4 py-3 font-semibold text-white">
            Search
          </button>
        </div>

        {/* Tasks Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((task) => (
            <div
              key={task}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
                Development
              </span>

              <h2 className="mt-4 text-xl font-semibold">
                Build a Landing Page
              </h2>

              <p className="mt-3 text-sm text-slate-400">
                Looking for a React developer to build a responsive landing
                page.
              </p>

              <div className="mt-5 space-y-2 text-sm">
                <p>
                  Budget: <span className="text-cyan-400">$150</span>
                </p>

                <p className="text-slate-400">Deadline: July 15, 2026</p>
              </div>

              <button className="mt-5 w-full rounded-xl bg-cyan-500 py-2 font-semibold">
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center gap-2">
          <button className="rounded-lg border border-slate-700 px-4 py-2">
            Previous
          </button>

          <button className="rounded-lg bg-cyan-500 px-4 py-2">1</button>

          <button className="rounded-lg border border-slate-700 px-4 py-2">
            2
          </button>

          <button className="rounded-lg border border-slate-700 px-4 py-2">
            3
          </button>

          <button className="rounded-lg border border-slate-700 px-4 py-2">
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default TasksPage;
