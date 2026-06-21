"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const ConfirmPayment = ({ sessionId }) => {
  const [status, setStatus] = useState("verifying");

  useEffect(() => {
    const confirmPayment = async () => {
      if (!sessionId) return;

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
          setStatus("success");
          toast.success("Payment confirmed successfully");
        } else {
          setStatus("failed");
          toast.error(data.message || "Payment confirmation failed");
        }
      } catch (error) {
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
    <p className="mt-4 text-slate-400">
      Your payment has been securely processed. The freelancer can now begin
      working on this task.
    </p>
  );
};

export default ConfirmPayment;
