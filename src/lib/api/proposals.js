const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const getProposals = async () => {
  const res = await fetch(`${baseUrl}/api/proposals`, {
    cache: "no-store",
  });

  if (!res.ok) return [];

  return res.json();
};