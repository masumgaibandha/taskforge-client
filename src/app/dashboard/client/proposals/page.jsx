import { Check, Xmark } from "@gravity-ui/icons";

const ProposalsPage = () => {
  const proposals = [
    {
      id: 1,
      freelancer: "John Smith",
      task: "Build a responsive landing page",
      amount: 120,
      delivery: "5 Days",
      status: "Pending",
    },
    {
      id: 2,
      freelancer: "Emily Carter",
      task: "Design a modern logo",
      amount: 75,
      delivery: "3 Days",
      status: "Pending",
    },
  ];

  return (
    <div>
      <div className="mb-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
        <p className="text-sm font-semibold text-cyan-400">Client</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Task Proposals</h1>
        <p className="mt-2 text-slate-400">
          Review freelancer proposals and hire the best candidate.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70">
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
                <tr key={proposal.id} className="border-b border-slate-800/70">
                  <td className="px-6 py-5 text-white">
                    {proposal.freelancer}
                  </td>

                  <td className="px-6 py-5 text-slate-400">{proposal.task}</td>

                  <td className="px-6 py-5 font-semibold text-cyan-400">
                    ${proposal.amount}
                  </td>

                  <td className="px-6 py-5 text-slate-400">
                    {proposal.delivery}
                  </td>

                  <td className="px-6 py-5">
                    <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-300">
                      {proposal.status}
                    </span>
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex justify-end gap-2">
                      <button className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-2 text-emerald-400">
                        <Check className="size-4" />
                      </button>

                      <button className="rounded-lg border border-red-500/30 bg-red-500/10 p-2 text-red-400">
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
