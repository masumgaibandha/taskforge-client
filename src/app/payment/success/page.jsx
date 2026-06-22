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

          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Your payment has been securely processed and the project has moved
            to in-progress.
          </p>

          <ConfirmPayment sessionId={session_id} />

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
