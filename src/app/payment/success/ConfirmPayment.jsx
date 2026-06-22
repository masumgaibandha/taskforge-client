"use client";

import {CircleCheck } from "@gravity-ui/icons";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const ConfirmPayment = ({ sessionId }) => {
  const [status, setStatus] = useState("verifying");
  const [payment, setPayment] = useState(null);

  useEffect(() => {
    const confirmPayment = async () => {
      if (!sessionId) {
        setStatus("failed");
        return;
      }

      try {
        const res = await fetch(`${baseUrl}/api/confirm-payment`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ sessionId }),
        });

        const data = await res.json();

        if (data.success) {
          setPayment(data.payment);
          setStatus("success");
          toast.success("Payment confirmed successfully");
        } else {
          setStatus("failed");
          toast.error(data.message || "Payment confirmation failed");
        }
      } catch (error) {
        console.error(error);
        setStatus("failed");
        toast.error("Payment confirmation failed");
      }
    };

    confirmPayment();
  }, [sessionId]);

  if (status === "verifying") {
    return <p className="mt-4 text-slate-400">Verifying your payment...</p>;
  }

  if (status === "failed") {
    return (
      <p className="mt-4 text-red-400">
        Payment verification failed. Please contact support.
      </p>
    );
  }

  return (
    <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950 p-6 text-left">
      <div className="mb-5 flex items-center justify-center">
        <div className="flex size-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
          <CircleCheck className="size-7" />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4 border-b border-slate-800 pb-3">
          <span className="text-sm text-slate-400">Task</span>
          <span className="text-right font-semibold text-white">
            {payment?.taskTitle || "N/A"}
          </span>
        </div>

        <div className="flex items-center justify-between gap-4 border-b border-slate-800 pb-3">
          <span className="text-sm text-slate-400">Freelancer</span>
          <span className="text-right font-semibold text-white">
            {payment?.freelancerName || "N/A"}
          </span>
        </div>

        <div className="flex items-center justify-between gap-4 border-b border-slate-800 pb-3">
          <span className="text-sm text-slate-400">Amount Paid</span>
          <span className="text-right font-semibold text-cyan-400">
            ${payment?.amount || 0} {payment?.currency?.toUpperCase()}
          </span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <span className="text-sm text-slate-400">Status</span>
          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400">
            {payment?.paymentStatus || "paid"}
          </span>
        </div>
      </div>

      <p className="mt-5 text-center text-sm text-slate-400">
        The freelancer can now begin working on this task.
      </p>
    </div>
  );
};

export default ConfirmPayment;
