"use client";

import { updateTask } from "@/lib/actions/tasks";
import { Button, Input } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const SubmitDeliverableForm = ({ taskId }) => {
  const router = useRouter();
  const [deliverableUrl, setDeliverableUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!deliverableUrl.trim()) {
      toast.error("Please enter a deliverable URL.");
      return;
    }

    setIsLoading(true);

    try {
      const res = await updateTask(taskId, {
        status: "completed",
        deliverableUrl,
        completedAt: new Date().toISOString(),
      });

      if (res.modifiedCount > 0) {
        toast.success("Deliverable submitted successfully.");
        router.refresh();
      } else {
        toast.error(res.message || "Failed to submit deliverable.");
      }
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full rounded-2xl border border-slate-800 bg-slate-950 p-4 lg:max-w-sm"
    >
      <p className="mb-3 text-sm font-semibold text-white">
        Submit Deliverable
      </p>

      <Input
        type="url"
        value={deliverableUrl}
        onChange={(e) => setDeliverableUrl(e.target.value)}
        placeholder="https://github.com/your-work"
        className="text-slate-600"
      />

      <Button
        type="submit"
        isDisabled={isLoading}
        className="mt-3 w-full bg-cyan-500 font-semibold text-white"
      >
        {isLoading ? "Submitting..." : "Submit Work"}
      </Button>
    </form>
  );
};

export default SubmitDeliverableForm;
