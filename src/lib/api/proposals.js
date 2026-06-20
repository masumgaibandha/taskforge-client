const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const getProposals = async (clientEmail) => {
  const res = await fetch(
    `${baseUrl}/api/proposals?clientEmail=${clientEmail}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) return [];

  return res.json();
};
