"use server";

const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const createTask = async (newTaskData) => {
  const res = await fetch(`${baseUrl}/api/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTaskData),
  });

  return res.json();
};

export const deleteTask = async (taskId) => {
  const res = await fetch(`${baseUrl}/api/tasks/${taskId}`, {
    method: "DELETE",
  });

  return res.json();
};
