import Link from "next/link";

const DashboardPage = () => {
  const stats = [
    { label: "Total Tasks", value: "12" },
    { label: "Active Proposals", value: "8" },
    { label: "Completed", value: "5" },
    { label: "Total Spent", value: "$1,240" },
  ];

  const actions = [
    {
      title: "Post a Task",
      text: "Create a new micro-task and start receiving proposals.",
      href: "/dashboard/client/post-task",
    },
    {
      title: "My Tasks",
      text: "View, edit, and manage your posted tasks.",
      href: "/dashboard/client/my-tasks",
    },
    {
      title: "Proposals",
      text: "Review freelancer proposals and accept the best fit.",
      href: "/dashboard/client/proposals",
    },
  ];

  return (
    <section className="min-h-screen bg-slate-950 py-10 text-white">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
          <p className="text-sm font-semibold text-cyan-400">Dashboard</p>
          <h1 className="mt-2 text-3xl font-bold">Welcome to TaskForge</h1>
          <p className="mt-3 max-w-2xl text-slate-400">
            Manage your tasks, proposals, payments, and account activity from
            one place.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <p className="text-sm text-slate-400">{item.label}</p>
              <h2 className="mt-3 text-3xl font-bold text-white">
                {item.value}
              </h2>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {actions.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:-translate-y-1 hover:border-cyan-500/50"
            >
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {item.text}
              </p>
              <p className="mt-5 text-sm font-semibold text-cyan-400">Open →</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
