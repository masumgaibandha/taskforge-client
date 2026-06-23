"use server";

const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const updateUserProfile = async (email, profileData) => {
  const res = await fetch(`${baseUrl}/api/users/${email}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profileData),
  });

  return res.json();
};

export const verifyFreelancer = async (email) => {
  const res = await fetch(`${baseUrl}/api/users/${email}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      verified: true,
    }),
  });

  return res.json();
};
