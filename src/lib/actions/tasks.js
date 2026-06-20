"use server";

import { serverMutation } from "../core/server";

export const createTask = async (newTaskData) => {
  return await serverMutation("/api/tasks", newTaskData);
}

// const baseUrl = process.env.NEXT_PUBLIC_API_URL;

// export const createTask = async (newTaskData) => {
//   const res = await fetch(`${baseUrl}/api/tasks`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(newTaskData),
//   });

//   return res.json();
// };