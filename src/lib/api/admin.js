const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const getAdminStats = async () => {
  const res = await fetch(`${baseUrl}/api/admin/stats`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  return res.json();
};

export const getAdminUsers = async () => {
  const res = await fetch(`${baseUrl}/api/admin/users`, {
    cache: "no-store",
  });

  if (!res.ok) return [];

  return res.json();
};

export const getAdminTasks = async () => {
  const res = await fetch(`${baseUrl}/api/admin/tasks`, {
    cache: "no-store",
  });

  if (!res.ok) return [];

  return res.json();
};

export const getAdminTransactions = async () => {
  const res = await fetch(`${baseUrl}/api/admin/transactions`, {
    cache: "no-store",
  });

  if (!res.ok) return [];

  return res.json();
};
