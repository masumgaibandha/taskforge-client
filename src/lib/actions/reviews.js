"use server";

const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const createReview = async (reviewData) => {
  const res = await fetch(`${baseUrl}/api/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reviewData),
  });

  return res.json();
};
