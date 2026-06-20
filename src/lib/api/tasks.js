// const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
// export const getClientTasks = async (taskId, status = "active") => {
//   const res = await fetch(
//     `${baseUrl}/api/tasks?taskId=${taskId}&status=${status}`,
//   );
//   return res.json();
// };

const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const getClientTasks = async (clientEmail) => {
  const res = await fetch(`${baseUrl}/api/tasks?clientEmail=${clientEmail}`, {
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
