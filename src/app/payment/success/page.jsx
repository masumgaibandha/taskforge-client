import Link from "next/link";
import ConfirmPayment from "./ConfirmPayment";

const PaymentSuccessPage = async ({ searchParams }) => {
  const { session_id } = await searchParams;

  return (
    <section className="min-h-screen bg-slate-950 py-16 text-white">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 text-center shadow-2xl shadow-cyan-500/10">
          <p className="text-sm font-semibold text-cyan-400">
            Payment Successful
          </p>

          <h1 className="mt-3 text-4xl font-bold text-white">
            Your payment has been completed
          </h1>
          <ConfirmPayment sessionId={session_id} />

          <p className="mt-4 text-slate-400">Stripe session ID:</p>

          <p className="mt-2 break-all rounded-xl border border-slate-800 bg-slate-950 p-3 text-sm text-slate-300">
            {session_id}
          </p>

          <Link
            href="/dashboard/client/proposals"
            className="mt-8 inline-flex rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PaymentSuccessPage;
