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

  return (
    <div>
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
        <p className="text-sm font-semibold text-cyan-400">Freelancer</p>
        <h1 className="mt-2 text-3xl font-bold text-white">My Earnings</h1>
        <p className="mt-2 text-slate-400">
          Track payments received from completed client payments.
        </p>
      </div>

      <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
        <p className="text-sm text-slate-400">Total Earnings</p>
        <h2 className="mt-2 text-4xl font-bold text-cyan-400">
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
        <div className="mt-6 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70">
          <div className="overflow-x-auto">
            <table className="w-full min-w-175">
              <thead className="border-b border-slate-800 bg-slate-950/60">
                <tr>
                  <th className="px-6 py-4 text-left text-slate-300">Client</th>
                  <th className="px-6 py-4 text-left text-slate-300">Amount</th>
                  <th className="px-6 py-4 text-left text-slate-300">Status</th>
                  <th className="px-6 py-4 text-left text-slate-300">Date</th>
                </tr>
              </thead>

              <tbody>
                {payments.map((payment) => (
                  <tr
                    key={payment._id}
                    className="border-b border-slate-800/70"
                  >
                    <td className="px-6 py-5 text-slate-300">
                      {payment.clientEmail}
                    </td>

                    <td className="px-6 py-5 font-semibold text-cyan-400">
                      ${payment.amount}
                    </td>

                    <td className="px-6 py-5">
                      <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                        {payment.paymentStatus}
                      </span>
                    </td>

                    <td className="px-6 py-5 text-slate-400">
                      {new Date(payment.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default FreelancerEarningsPage;
