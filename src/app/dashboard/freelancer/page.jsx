import { getFreelancerPayments } from "@/lib/api/payments";
import { getFreelancerProposals } from "@/lib/api/proposals";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

const FreelancerDashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  if (!user) {
    redirect("/login");
  }

  if (user.role !== "freelancer") {
    redirect(
      user.role === "client"
        ? "/dashboard/client"
        : user.role === "admin"
          ? "/dashboard/admin"
          : "/",
    );
  }

  const proposals = await getFreelancerProposals(user.email);
  const payments = await getFreelancerPayments(user.email);

  const totalEarnings = payments.reduce(
    (total, payment) => total + Number(payment.amount || 0),
    0,
  );

  const stats = [
    {
      label: "Total Proposals",
      value: proposals.length,
    },
    {
      label: "Pending",
      value: proposals.filter((item) => item.status === "pending").length,
    },
    {
      label: "Accepted",
      value: proposals.filter((item) => item.status === "accepted").length,
    },
    {
      label: "Total Earnings",
      value: `$${totalEarnings}`,
    },
  ];

  return (
    <div>
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
        <p className="text-sm font-semibold text-cyan-400">
          Freelancer Dashboard
        </p>

        <h1 className="mt-2 text-3xl font-bold text-white">
          Welcome back, {user.name || "Freelancer"}
        </h1>

        <p className="mt-2 text-slate-400">
          Manage your proposals, track task progress, and grow your freelance
          career.
        </p>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
          >
            <p className="text-sm text-slate-400">{item.label}</p>
            <h2 className="mt-2 text-3xl font-bold text-white">{item.value}</h2>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Link
          href="/dashboard/freelancer/my-proposals"
          className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-500/50"
        >
          <h3 className="text-xl font-semibold text-white">My Proposals</h3>

          <p className="mt-3 text-sm text-slate-400">
            Track submitted proposals and project status.
          </p>

          <p className="mt-5 font-semibold text-cyan-400">Open →</p>
        </Link>

        <Link
          href="/dashboard/freelancer/earnings"
          className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-500/50"
        >
          <h3 className="text-xl font-semibold text-white">My Earnings</h3>

          <p className="mt-3 text-sm text-slate-400">
            View payments received from clients.
          </p>

          <p className="mt-5 font-semibold text-cyan-400">Open →</p>
        </Link>
      </div>
    </div>
  );
};

export default FreelancerDashboardPage;
