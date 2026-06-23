"use client";

import { createReview } from "@/lib/actions/reviews";
import { Star, StarFill } from "@gravity-ui/icons";
import { Button, TextArea } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const ReviewTaskButton = ({ task }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!comment.trim()) {
      toast.error("Please write a short review.");
      return;
    }

    setIsLoading(true);

    const res = await createReview({
      taskId: task._id,
      taskTitle: task.title,
      reviewerEmail: task.clientEmail,
      revieweeEmail: task.freelancerEmail,
      rating,
      comment,
    });

    if (res.insertedId) {
      toast.success("Review submitted successfully.");
      setIsOpen(false);
      router.refresh();
    } else {
      toast.error(res.message || "Failed to submit review.");
    }

    setIsLoading(false);
  };

  return (
    <>
      <button
        type="button"
        title="Leave Review"
        onClick={() => setIsOpen(true)}
        className="rounded-lg border border-slate-700 p-2 text-slate-300 transition hover:border-yellow-500 hover:text-yellow-400"
      >
        <StarFill className="size-4" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-950 p-6 shadow-2xl">
            <h2 className="text-xl font-bold text-white">Leave a Review</h2>

            <p className="mt-2 text-sm text-slate-400">
              Review {task.freelancerName || "the freelancer"} for this task.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <p className="mb-2 text-sm font-medium text-slate-300">
                  Rating
                </p>

                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setRating(value)}
                      className="text-yellow-400"
                    >
                      {value <= rating ? (
                        <StarFill className="size-6" />
                      ) : (
                        <Star className="size-6" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <TextArea
                label="Feedback"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write your feedback..."
                className="min-h-32 w-full text-slate-600"
              />

              <div className="flex justify-end gap-3">
                <Button
                  type="button"
                  variant="bordered"
                  onPress={() => setIsOpen(false)}
                  className="border-slate-700 text-slate-300"
                >
                  Cancel
                </Button>

                <Button
                  type="submit"
                  isDisabled={isLoading}
                  className="bg-cyan-500 font-semibold text-white"
                >
                  {isLoading ? "Submitting..." : "Submit Review"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ReviewTaskButton;
