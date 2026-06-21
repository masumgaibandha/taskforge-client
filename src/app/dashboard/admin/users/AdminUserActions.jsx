"use client";

import { blockUser, unblockUser } from "@/lib/actions/admin";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const AdminUserActions = ({ userId, isBlocked }) => {
  const router = useRouter();

  const handleUpdate = async () => {
    const res = isBlocked ? await unblockUser(userId) : await blockUser(userId);

    if (res.modifiedCount > 0) {
      toast.success(isBlocked ? "User unblocked" : "User blocked");
      router.refresh();
    } else {
      toast.error("Failed to update user.");
    }
  };

  return (
    <div className="flex justify-end">
      <button
        onClick={handleUpdate}
        className={`rounded-lg border px-4 py-2 text-sm font-semibold ${
          isBlocked
            ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
            : "border-red-500/30 bg-red-500/10 text-red-400"
        }`}
      >
        {isBlocked ? "Unblock" : "Block"}
      </button>
    </div>
  );
};

export default AdminUserActions;
