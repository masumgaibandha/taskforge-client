import { getProposals } from "@/lib/api/proposals";
import { ArrowLeft, Check, Xmark } from "@gravity-ui/icons";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const ProposalsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const proposals = await getProposals(session?.user?.email);

  return (
    <div>
      <Link
        href="/dashboard"
        className="mb-6 inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-cyan-500 hover:text-cyan-400"
      >
        <ArrowLeft size={18} />
        Back to Dashboard
      </Link>

      <div className="mb-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-5 md:p-6">
        <p className="text-sm font-semibold text-cyan-400">Client</p>
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          Task Proposals
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-400 md:text-base">
          Review freelancer proposals and hire the best candidate.
        </p>
      </div>

      <div className="grid gap-5 lg:hidden">
        {proposals.map((proposal) => (
          <div
            key={proposal._id}
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="font-semibold text-white">
                  {proposal.freelancerName}
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  {proposal.taskTitle}
                </p>
              </div>

              <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-300">
                {proposal.status}
              </span>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-slate-500">Bid</p>
                <p className="mt-1 font-semibold text-cyan-400">
                  ${proposal.bidAmount}
                </p>
              </div>

              <div>
                <p className="text-slate-500">Delivery</p>
                <p className="mt-1 text-slate-300">{proposal.deliveryTime}</p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2">
              <button className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-emerald-400">
                <Check className="mx-auto size-4" />
              </button>

              <button className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-red-400">
                <Xmark className="mx-auto size-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 lg:block">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead className="border-b border-slate-800 bg-slate-950/60">
              <tr>
                <th className="px-6 py-4 text-left text-slate-300">
                  Freelancer
                </th>
                <th className="px-6 py-4 text-left text-slate-300">Task</th>
                <th className="px-6 py-4 text-left text-slate-300">Bid</th>
                <th className="px-6 py-4 text-left text-slate-300">Delivery</th>
                <th className="px-6 py-4 text-left text-slate-300">Status</th>
                <th className="px-6 py-4 text-right text-slate-300">Action</th>
              </tr>
            </thead>

            <tbody>
              {proposals.map((proposal) => (
                <tr
                  key={proposal._id}
                  className="border-b border-slate-800/70 transition hover:bg-slate-800/40"
                >
                  <td className="px-6 py-5 text-white">
                    {proposal.freelancerName}
                  </td>
                  <td className="px-6 py-5 text-slate-400">
                    {proposal.taskTitle}
                  </td>
                  <td className="px-6 py-5 font-semibold text-cyan-400">
                    ${proposal.bidAmount}
                  </td>
                  <td className="px-6 py-5 text-slate-400">
                    {proposal.deliveryTime}
                  </td>
                  <td className="px-6 py-5">
                    <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-300">
                      {proposal.status}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex justify-end gap-2">
                      <button className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-2 text-emerald-400 cursor-pointer">
                        <Check className="size-4" />
                      </button>
                      <button className="rounded-lg border border-red-500/30 bg-red-500/10 p-2 text-red-400 cursor-pointer">
                        <Xmark className="size-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProposalsPage;
