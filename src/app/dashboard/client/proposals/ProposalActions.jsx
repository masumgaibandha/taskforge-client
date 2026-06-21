"use client";

import { createCheckoutSession } from "@/lib/actions/payments";
import { updateProposalStatus } from "@/lib/actions/proposals";
import { CreditCard, Xmark } from "@gravity-ui/icons";
import toast from "react-hot-toast";

const ProposalActions = ({ proposalId, status }) => {
  const handlePayment = async () => {
    const res = await createCheckoutSession(proposalId);

    if (res.url) {
      window.location.href = res.url;
    } else {
      toast.error(res.message || "Failed to start payment.");
    }
  };

  const handleReject = async () => {
    const res = await updateProposalStatus(proposalId, "rejected");

    if (res.modifiedCount > 0) {
      toast.success("Proposal rejected");
      window.location.reload();
    } else {
      toast.error("Failed to reject proposal.");
    }
  };

  return (
    <div className="flex justify-end gap-2">
      <button
        disabled={status !== "pending"}
        onClick={handlePayment}
        className="cursor-pointer rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-2 text-emerald-400 disabled:cursor-not-allowed disabled:opacity-40"
        title="Pay with Stripe"
      >
        <CreditCard className="size-4" />
      </button>

      <button
        disabled={status !== "pending"}
        onClick={handleReject}
        className="cursor-pointer rounded-lg border border-red-500/30 bg-red-500/10 p-2 text-red-400 disabled:cursor-not-allowed disabled:opacity-40"
        title="Reject proposal"
      >
        <Xmark className="size-4" />
      </button>
    </div>
  );
};

export default ProposalActions;
