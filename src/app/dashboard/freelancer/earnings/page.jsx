import { getFreelancerPayments } from "@/lib/api/payments";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const FreelancerEarningsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const payments = await getFreelancerPayments(session?.user?.email);

  const totalEarnings = payments.reduce(
    (total, payment) => total + Number(payment.amount || 0),
    0,
  );

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div>
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 md:p-6">
        <p className="text-sm font-semibold text-cyan-400">Freelancer</p>

        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          My Earnings
        </h1>

        <p className="mt-2 text-sm leading-6 text-slate-400 md:text-base">
          Track payments received from completed client payments.
        </p>
      </div>

      <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900/70 p-5 md:p-6">
        <p className="text-sm text-slate-400">Total Earnings</p>

        <h2 className="mt-2 break-words text-3xl font-bold text-cyan-400 md:text-4xl">
          ${totalEarnings}
        </h2>
      </div>

      {payments.length === 0 ? (
        <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900/70 p-8 text-center">
          <h2 className="text-xl font-semibold text-white">
            No earnings found
          </h2>

          <p className="mt-2 text-slate-400">
            Your paid projects will appear here.
          </p>
        </div>
      ) : (
        <>
          <div className="mt-6 grid gap-4 lg:hidden">
            {payments.map((payment) => (
              <div
                key={payment._id}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-sm text-slate-500">Client</p>
                    <p className="mt-1 break-all font-medium text-slate-200">
                      {payment.clientEmail}
                    </p>
                  </div>

                  <span className="shrink-0 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                    {payment.paymentStatus}
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-slate-500">Amount</p>
                    <p className="mt-1 text-lg font-bold text-cyan-400">
                      ${payment.amount}
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-500">Date</p>
                    <p className="mt-1 whitespace-nowrap text-slate-300">
                      {formatDate(payment.createdAt)}
                    </p>
                  </div>
                </div>

                {payment.taskTitle && (
                  <div className="mt-5">
                    <p className="text-sm text-slate-500">Task</p>
                    <p className="mt-1 line-clamp-2 text-sm leading-6 text-slate-300">
                      {payment.taskTitle}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 hidden overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 lg:block">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px]">
                <thead className="border-b border-slate-800 bg-slate-950/60">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                      Client
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                      Task
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                      Amount
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                      Date
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {payments.map((payment) => (
                    <tr
                      key={payment._id}
                      className="border-b border-slate-800/70 transition hover:bg-slate-800/40"
                    >
                      <td className="px-6 py-5 text-slate-300">
                        {payment.clientEmail}
                      </td>

                      <td className="px-6 py-5">
                        <p className="max-w-80 line-clamp-2 text-sm leading-6 text-slate-400">
                          {payment.taskTitle || "Completed project"}
                        </p>
                      </td>

                      <td className="px-6 py-5 font-semibold text-cyan-400">
                        ${payment.amount}
                      </td>

                      <td className="px-6 py-5">
                        <span className="whitespace-nowrap rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                          {payment.paymentStatus}
                        </span>
                      </td>

                      <td className="whitespace-nowrap px-6 py-5 text-slate-400">
                        {formatDate(payment.createdAt)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FreelancerEarningsPage;
