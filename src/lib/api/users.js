const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const getUserProfile = async (email) => {
  const res = await fetch(`${baseUrl}/api/users/${email}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  return res.json();
};
