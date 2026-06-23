const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const getReviews = async ({ taskId = "", revieweeEmail = "" }) => {
  const params = new URLSearchParams();

  if (taskId) params.append("taskId", taskId);
  if (revieweeEmail) params.append("revieweeEmail", revieweeEmail);

  const res = await fetch(`${baseUrl}/api/reviews?${params.toString()}`, {
    cache: "no-store",
  });

  return res.json();
};
