import { getFreelancerProposals } from "@/lib/api/proposals";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MyProposalsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const proposals = await getFreelancerProposals(session?.user?.email);

  return (
    <div>
      <div className="mb-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
        <p className="text-sm font-semibold text-cyan-400">Freelancer</p>
        <h1 className="mt-2 text-3xl font-bold text-white">My Proposals</h1>
        <p className="mt-2 text-slate-400">
          View proposals you submitted to client tasks.
        </p>
      </div>

      <div className="grid gap-5">
        {proposals.map((proposal) => (
          <div
            key={proposal._id}
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="font-semibold text-white">
                  {proposal.taskTitle}
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  Bid: ${proposal.bidAmount} · Delivery: {proposal.deliveryTime}{" "}
                  Days
                </p>
              </div>

              <span className="w-fit rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-300">
                {proposal.status}
              </span>
            </div>

            <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-400">
              {proposal.coverLetter}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProposalsPage;
