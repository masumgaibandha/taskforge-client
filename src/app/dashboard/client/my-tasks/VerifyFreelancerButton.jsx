"use client";

import { verifyFreelancer } from "@/lib/actions/users";
import { CircleCheck } from "@gravity-ui/icons";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const VerifyFreelancerButton = ({ freelancerEmail }) => {
  const router = useRouter();

  const handleVerify = async () => {
    const confirmed = confirm(
      "Are you sure you want to verify this freelancer?",
    );

    if (!confirmed) return;

    const res = await verifyFreelancer(freelancerEmail);

    if (res.modifiedCount > 0) {
      toast.success("Freelancer verified successfully.");
      router.refresh();
    } else {
      toast.error(res.message || "Failed to verify freelancer.");
    }
  };

  return (
    <button
      type="button"
      title="Verify Freelancer"
      onClick={handleVerify}
      className="rounded-lg border border-slate-700 p-2 text-slate-300 transition hover:border-emerald-500 hover:text-emerald-400"
    >
      <CircleCheck className="size-4" />
    </button>
  );
};

export default VerifyFreelancerButton;
