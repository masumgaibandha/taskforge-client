const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const getClientPayments = async (clientEmail) => {
  const res = await fetch(
    `${baseUrl}/api/payments?clientEmail=${clientEmail}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) return [];

  return res.json();
};

export const getFreelancerPayments = async (freelancerEmail) => {
  const res = await fetch(
    `${baseUrl}/api/payments?freelancerEmail=${freelancerEmail}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) return [];

  return res.json();
};
