import { getClientPayments } from "@/lib/api/payments";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const ClientPaymentsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const payments = await getClientPayments(session?.user?.email);

  return (
    <div>
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
        <p className="text-sm font-semibold text-cyan-400">Client</p>

        <h1 className="mt-2 text-3xl font-bold text-white">Payment History</h1>

        <p className="mt-2 text-slate-400">
          View all payments made for accepted proposals.
        </p>
      </div>

      {payments.length === 0 ? (
        <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900/70 p-8 text-center">
          <h2 className="text-xl font-semibold text-white">
            No payments found
          </h2>

          <p className="mt-2 text-slate-400">
            Your payment history will appear here.
          </p>
        </div>
      ) : (
        <div className="mt-6 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-slate-800">
                <tr>
                  <th className="px-6 py-4 text-left text-slate-300">Amount</th>

                  <th className="px-6 py-4 text-left text-slate-300">
                    Freelancer
                  </th>

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
                    <td className="px-6 py-4 font-semibold text-cyan-400">
                      ${payment.amount}
                    </td>

                    <td className="px-6 py-4 text-slate-300">
                      {payment.freelancerEmail}
                    </td>

                    <td className="px-6 py-4">
                      <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                        {payment.paymentStatus}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-slate-400">
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

export default ClientPaymentsPage;
