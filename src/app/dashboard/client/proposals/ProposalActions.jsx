"use client";

import { updateProposalStatus } from "@/lib/actions/proposals";
import { Check, Xmark } from "@gravity-ui/icons";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const ProposalActions = ({ proposalId, taskId, status }) => {
    console.log("taskId:", taskId);
  const router = useRouter();

  const handleStatusUpdate = async (status) => {
    const res = await updateProposalStatus(proposalId, status, taskId);

    if (res.modifiedCount > 0) {
      toast.success(`Proposal ${status}`);
      router.refresh();
    } else {
      toast.error("Failed to update proposal.");
    }
  };

  return (
    <div className="flex justify-end gap-2">
      <button
        disabled={status !== "pending"}
        onClick={() => handleStatusUpdate("accepted")}
        className="cursor-pointer rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-2 text-emerald-400 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <Check className="size-4" />
      </button>

      <button
        disabled={status !== "pending"}
        onClick={() => handleStatusUpdate("rejected")}
        className="cursor-pointer rounded-lg border border-red-500/30 bg-red-500/10 p-2 text-red-400 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <Xmark className="size-4" />
      </button>
    </div>
  );
};

export default ProposalActions;
