const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const getFreelancers = async () => {
  const res = await fetch(`${baseUrl}/api/freelancers`, {
    cache: "no-store",
  });

  if (!res.ok) return [];

  return res.json();
};
