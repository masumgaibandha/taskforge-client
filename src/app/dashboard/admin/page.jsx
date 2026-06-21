import { getAdminStats } from "@/lib/api/admin";
import { auth } from "@/lib/auth";
import { Briefcase, CreditCard, Person, CircleCheck } from "@gravity-ui/icons";
import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const AdminDashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session?.user?.role !== "admin") {
    redirect("/dashboard");
  }

  const stats = await getAdminStats();

  const statItems = [
    { label: "Total Users", value: stats?.totalUsers || 0, icon: Person },
    { label: "Total Tasks", value: stats?.totalTasks || 0, icon: Briefcase },
    {
      label: "Active Tasks",
      value: stats?.activeTasks || 0,
      icon: CircleCheck,
    },
    {
      label: "Total Revenue",
      value: `$${stats?.totalRevenue || 0}`,
      icon: CreditCard,
    },
  ];

  return (
    <div>
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
        <p className="text-sm font-semibold text-cyan-400">Admin Dashboard</p>

        <h1 className="mt-2 text-3xl font-bold text-white">
          Welcome back, {session?.user?.name || "Admin"}
        </h1>

        <p className="mt-2 text-slate-400">
          Manage platform users, tasks, and Stripe payment history.
        </p>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {statItems.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
          >
            <item.icon className="size-6 text-cyan-400" />
            <p className="mt-5 text-sm text-slate-400">{item.label}</p>
            <h2 className="mt-2 text-3xl font-bold text-white">{item.value}</h2>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <Link
          href="/dashboard/admin/users"
          className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-500/50"
        >
          <h3 className="text-xl font-semibold text-white">Manage Users</h3>
          <p className="mt-3 text-sm text-slate-400">
            View, block, or unblock platform accounts.
          </p>
          <p className="mt-5 font-semibold text-cyan-400">Open →</p>
        </Link>

        <Link
          href="/dashboard/admin/tasks"
          className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-500/50"
        >
          <h3 className="text-xl font-semibold text-white">Manage Tasks</h3>
          <p className="mt-3 text-sm text-slate-400">
            Review and remove unsafe task posts.
          </p>
          <p className="mt-5 font-semibold text-cyan-400">Open →</p>
        </Link>

        <Link
          href="/dashboard/admin/transactions"
          className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-500/50"
        >
          <h3 className="text-xl font-semibold text-white">Transactions</h3>
          <p className="mt-3 text-sm text-slate-400">
            View Stripe payment records and revenue.
          </p>
          <p className="mt-5 font-semibold text-cyan-400">Open →</p>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
