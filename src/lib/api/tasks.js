const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const getClientTasks = async (clientEmail) => {
  const url = clientEmail
    ? `${baseUrl}/api/tasks?clientEmail=${clientEmail}`
    : `${baseUrl}/api/tasks`;

  const res = await fetch(url, {
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
