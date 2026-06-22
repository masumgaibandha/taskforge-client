const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const getClientTasks = async (
  clientEmail,
  search = "",
  category = "",
  page = 1,
  limit = 9,
  status = "",
) => {
  const params = new URLSearchParams();

  if (clientEmail) params.append("clientEmail", clientEmail);
  if (search) params.append("search", search);
  if (category && category !== "All Categories") {
    params.append("category", category);
  }
  if (status) params.append("status", status);

  params.append("page", page);
  params.append("limit", limit);

  const res = await fetch(`${baseUrl}/api/tasks?${params.toString()}`, {
    cache: "no-store",
  });

  return res.json();
};

export const getTaskById = async (id) => {
  const res = await fetch(`${baseUrl}/api/tasks/${id}`, {
    cache: "no-store",
  });

  return res.json();
};
