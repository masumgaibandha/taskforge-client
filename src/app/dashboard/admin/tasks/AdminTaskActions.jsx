"use client";

import { deleteTask } from "@/lib/actions/tasks";
import { TrashBin } from "@gravity-ui/icons";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const AdminTaskActions = ({ taskId }) => {
  const router = useRouter();

  const handleDelete = async () => {
    const confirmed = confirm("Are you sure you want to delete this task?");

    if (!confirmed) return;

    const res = await deleteTask(taskId);

    if (res.deletedCount > 0) {
      toast.success("Task deleted");
      router.refresh();
    } else {
      toast.error("Failed to delete task");
    }
  };

  return (
    <div className="flex justify-end">
      <button
        onClick={handleDelete}
        className="rounded-lg border border-red-500/30 bg-red-500/10 p-2 text-red-400"
      >
        <TrashBin className="size-4" />
      </button>
    </div>
  );
};

export default AdminTaskActions;
