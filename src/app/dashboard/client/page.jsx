"use client";

import { useSession } from "@/lib/auth-client";
import { Briefcase, CircleCheck, Clock, CreditCard } from "@gravity-ui/icons";
import Link from "next/link";

const ClientDashboard = () => {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return <p>Loading...</p>;
  }

  const user = session?.user;

  const stats = [
    { title: "Total Tasks", value: "12", icon: Briefcase },
    { title: "Open Tasks", value: "6", icon: Clock },
    { title: "Completed", value: "4", icon: CircleCheck },
    { title: "Total Spent", value: "$1,240", icon: CreditCard },
  ];

  return (
    <div>
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
        <p className="text-sm font-semibold text-cyan-400">Client Dashboard</p>

        <h1 className="mt-2 text-3xl font-bold text-white">
          Welcome back, {user?.name || "Client"} 👋
        </h1>

        <p className="mt-3 text-slate-400">
          Manage your tasks, proposals, payments, and project activity.
        </p>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
          >
            <item.icon className="size-6 text-cyan-400" />

            <p className="mt-5 text-sm text-slate-400">{item.title}</p>

            <h2 className="mt-2 text-3xl font-bold text-white">{item.value}</h2>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <Link
          href="/dashboard/client/post-task"
          className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-500/50"
        >
          <h3 className="text-xl font-semibold text-white">Post a Task</h3>

          <p className="mt-3 text-sm text-slate-400">
            Create a new task and receive freelancer proposals.
          </p>

          <p className="mt-5 font-semibold text-cyan-400">Open →</p>
        </Link>

        <Link
          href="/dashboard/client/my-tasks"
          className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-500/50"
        >
          <h3 className="text-xl font-semibold text-white">My Tasks</h3>

          <p className="mt-3 text-sm text-slate-400">
            View, edit, and manage all posted tasks.
          </p>

          <p className="mt-5 font-semibold text-cyan-400">Open →</p>
        </Link>

        <Link
          href="/dashboard/client/proposals"
          className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-500/50"
        >
          <h3 className="text-xl font-semibold text-white">Proposals</h3>

          <p className="mt-3 text-sm text-slate-400">
            Review freelancer proposals and hire talent.
          </p>

          <p className="mt-5 font-semibold text-cyan-400">Open →</p>
        </Link>
      </div>
    </div>
  );
};

export default ClientDashboard;
