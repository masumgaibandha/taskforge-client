"use client";

import { updateTask } from "@/lib/actions/tasks";
import { CircleCheck } from "@gravity-ui/icons";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const CompleteTaskButton = ({ taskId }) => {
  const router = useRouter();

  const handleComplete = async () => {
    const confirmed = confirm(
      "Are you sure you want to mark this task as completed?",
    );

    if (!confirmed) return;

    const res = await updateTask(taskId, {
      status: "completed",
      completedAt: new Date().toISOString(),
    });

    if (res.modifiedCount > 0) {
      toast.success("Task marked as completed");
      router.refresh();
    } else {
      toast.error("Failed to complete task");
    }
  };

  return (
    <button
      onClick={handleComplete}
      title="Mark Completed"
      className="rounded-lg border border-slate-700 p-2 text-slate-300 transition hover:border-emerald-500 hover:text-emerald-400 cursor-pointer"
    >
      <CircleCheck className="size-4" />
    </button>
  );
};

export default CompleteTaskButton;
