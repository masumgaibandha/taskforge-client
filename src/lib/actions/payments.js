"use server";

const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const createCheckoutSession = async (proposalId) => {
  const res = await fetch(`${baseUrl}/api/create-checkout-session`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ proposalId }),
  });

  return res.json();
};
