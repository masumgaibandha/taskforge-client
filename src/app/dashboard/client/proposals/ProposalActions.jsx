"use client";

import { updateProposalStatus } from "@/lib/actions/proposals";
import { Check, Xmark } from "@gravity-ui/icons";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const ProposalActions = ({ proposalId }) => {
  const router = useRouter();

  const handleStatusUpdate = async (status) => {
    const res = await updateProposalStatus(proposalId, status);

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
        onClick={() => handleStatusUpdate("accepted")}
        className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-2 text-emerald-400"
      >
        <Check className="size-4" />
      </button>

      <button
        onClick={() => handleStatusUpdate("rejected")}
        className="rounded-lg border border-red-500/30 bg-red-500/10 p-2 text-red-400"
      >
        <Xmark className="size-4" />
      </button>
    </div>
  );
};

export default ProposalActions;
