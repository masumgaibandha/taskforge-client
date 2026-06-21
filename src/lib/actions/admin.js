"use server";

const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const blockUser = async (userId) => {
  const res = await fetch(`${baseUrl}/api/admin/users/${userId}/block`, {
    method: "PATCH",
  });

  return res.json();
};

export const unblockUser = async (userId) => {
  const res = await fetch(`${baseUrl}/api/admin/users/${userId}/unblock`, {
    method: "PATCH",
  });

  return res.json();
};
