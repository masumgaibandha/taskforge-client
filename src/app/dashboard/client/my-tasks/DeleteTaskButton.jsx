"use client";

import { deleteTask } from "@/lib/actions/tasks";
import { TrashBin } from "@gravity-ui/icons";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const DeleteTaskButton = ({ taskId }) => {
  const router = useRouter();

  const handleDelete = async () => {
    const confirmDelete = confirm("Are you sure you want to delete this task?");

    if (!confirmDelete) return;

    const res = await deleteTask(taskId);

    if (res.deletedCount > 0) {
      toast.success("Task deleted successfully");
      router.refresh();
    } else {
      toast.error("Failed to delete task");
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="cursor-pointer rounded-lg border border-slate-700 p-2 text-red-400 transition hover:border-red-500"
    >
      <TrashBin className="size-4" />
    </button>
  );
};

export default DeleteTaskButton;
