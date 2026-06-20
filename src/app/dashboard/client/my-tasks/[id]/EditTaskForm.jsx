"use client";

import { updateTask } from "@/lib/actions/tasks";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

const EditTaskForm = ({ task }) => {
  const router = useRouter();
  const formRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);

    const updatedData = {
      title: formData.get("title"),
      category: formData.get("category"),
      budget: Number(formData.get("budget")),
      deadline: formData.get("deadline"),
      description: formData.get("description"),
    };

    const res = await updateTask(task._id, updatedData);

    if (res.modifiedCount > 0) {
      toast.success("Task updated successfully");
      router.replace("/dashboard/client/my-tasks");
    } else {
      toast.error("No changes were made");
    }

    setIsLoading(false);
  };

  return (
    <section className="min-h-screen bg-slate-950 py-16 text-white">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-8">
          <p className="text-sm font-semibold text-cyan-400">Client</p>
          <h1 className="mt-2 text-4xl font-bold">Edit Task</h1>
          <p className="mt-3 max-w-2xl text-slate-400">
            Update your task information and save changes.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-500/10 md:p-8">
          <Form
            ref={formRef}
            className="flex flex-col gap-6"
            onSubmit={onSubmit}
          >
            <div className="grid gap-5 md:grid-cols-2">
              <TextField isRequired name="title" defaultValue={task.title}>
                <Label className="text-slate-200">Task Title</Label>
                <Input className="text-slate-600" />
                <FieldError className="text-red-400" />
              </TextField>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-200">
                  Category
                </label>

                <select
                  name="category"
                  defaultValue={task.category}
                  className="h-10 rounded-xl border border-slate-700 bg-white px-3 text-slate-600 outline-none focus:border-cyan-500"
                >
                  <option value="Design">Design</option>
                  <option value="Writing">Writing</option>
                  <option value="Development">Development</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <TextField
                isRequired
                name="budget"
                type="number"
                defaultValue={String(task.budget)}
              >
                <Label className="text-slate-200">Budget (USD)</Label>
                <Input className="text-slate-600" />
                <FieldError className="text-red-400" />
              </TextField>

              <TextField
                isRequired
                name="deadline"
                type="date"
                defaultValue={task.deadline}
              >
                <Label className="text-slate-200">Deadline Date</Label>
                <Input className="text-slate-600" />
                <FieldError className="text-red-400" />
              </TextField>
            </div>

            <TextField
              isRequired
              name="description"
              defaultValue={task.description}
            >
              <Label className="text-slate-200">Description</Label>
              <TextArea className="min-h-36 text-slate-600" />
              <FieldError className="text-red-400" />
            </TextField>

            <Button
              type="submit"
              isDisabled={isLoading}
              className="h-12 w-full rounded-xl bg-cyan-500 font-semibold text-white"
            >
              {isLoading ? "Updating..." : "Update Task"}
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default EditTaskForm;
