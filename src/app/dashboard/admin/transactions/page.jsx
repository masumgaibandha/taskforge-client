import { getAdminTransactions } from "@/lib/api/admin";

const AdminTransactionsPage = async () => {
  const transactions = await getAdminTransactions();

  const totalRevenue = transactions.reduce(
    (total, payment) => total + Number(payment.amount || 0),
    0,
  );

  return (
    <div>
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 sm:p-6">
        <p className="text-sm font-semibold text-cyan-400">Admin</p>

        <h1 className="mt-2 text-3xl font-bold text-white">
          Transactions History
        </h1>

        <p className="mt-2 text-slate-400">
          Review all Stripe payments processed on the platform.
        </p>
      </div>

      <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 sm:p-6">
        <p className="text-sm text-slate-400">Total Revenue</p>

        <h2 className="mt-2 text-4xl font-bold text-cyan-400">
          ${totalRevenue}
        </h2>
      </div>

      {transactions.length === 0 ? (
        <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900/70 p-8 text-center">
          <h2 className="text-xl font-semibold text-white">
            No transactions found
          </h2>

          <p className="mt-2 text-slate-400">
            Stripe transactions will appear here.
          </p>
        </div>
      ) : (
        <>
          <div className="mt-6 grid gap-4 lg:hidden">
            {transactions.map((payment) => (
              <div
                key={payment._id}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
              >
                <div className="space-y-3 text-sm">
                  <p className="break-all text-slate-400">
                    Client:{" "}
                    <span className="text-slate-200">
                      {payment.clientEmail}
                    </span>
                  </p>

                  <p className="break-all text-slate-400">
                    Freelancer:{" "}
                    <span className="text-slate-200">
                      {payment.freelancerEmail}
                    </span>
                  </p>

                  <p className="text-slate-400">
                    Amount:{" "}
                    <span className="font-semibold text-cyan-400">
                      ${payment.amount}
                    </span>
                  </p>

                  <p className="text-slate-400">
                    Status:{" "}
                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                      {payment.paymentStatus}
                    </span>
                  </p>

                  <p className="text-slate-400">
                    Date:{" "}
                    <span className="text-slate-200">
                      {new Date(payment.createdAt).toLocaleDateString()}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 hidden overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 lg:block">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1000px]">
                <thead className="border-b border-slate-800 bg-slate-950/60">
                  <tr>
                    <th className="px-6 py-4 text-left text-slate-300">
                      Client
                    </th>
                    <th className="px-6 py-4 text-left text-slate-300">
                      Freelancer
                    </th>
                    <th className="px-6 py-4 text-left text-slate-300">
                      Amount
                    </th>
                    <th className="px-6 py-4 text-left text-slate-300">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-slate-300">Date</th>
                  </tr>
                </thead>

                <tbody>
                  {transactions.map((payment) => (
                    <tr
                      key={payment._id}
                      className="border-b border-slate-800/70"
                    >
                      <td className="px-6 py-5 text-slate-300">
                        {payment.clientEmail}
                      </td>

                      <td className="px-6 py-5 text-slate-300">
                        {payment.freelancerEmail}
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
        </>
      )}
    </div>
  );
};

export default AdminTransactionsPage;
