import { getFreelancerProposals } from "@/lib/api/proposals";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const FreelancerDashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session?.user?.role !== "freelancer") {
    redirect("/dashboard/client");
  }

  const proposals = await getFreelancerProposals(session?.user?.email);

  const stats = [
    { label: "Total Proposals", value: proposals.length },
    {
      label: "Pending",
      value: proposals.filter((item) => item.status === "pending").length,
    },
    {
      label: "Accepted",
      value: proposals.filter((item) => item.status === "accepted").length,
    },
    {
      label: "Rejected",
      value: proposals.filter((item) => item.status === "rejected").length,
    },
  ];

  return (
    <div>
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
        <p className="text-sm font-semibold text-cyan-400">
          Freelancer Dashboard
        </p>

        <h1 className="mt-2 text-3xl font-bold text-white">
          Welcome back, {session?.user?.name || "Freelancer"}
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
    </div>
  );
};

export default FreelancerDashboardPage;
