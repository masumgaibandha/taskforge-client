"use client";

import { createTask } from "@/lib/actions/tasks";
import { useSession } from "@/lib/auth-client";
import { ArrowLeft } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

const PostTaskForm = () => {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(e.currentTarget);

      const payload = {
        title: formData.get("title"),
        category: formData.get("category"),
        budget: Number(formData.get("budget")),
        deadline: formData.get("deadline"),
        description: formData.get("description"),

        clientName: session?.user?.name,
        clientEmail: session?.user?.email,

        status: "open",
        proposalCount: 0,
        // createdAt: new Date().toISOString(),
      };

      const res = await createTask(payload);

      if (res.insertedId) {
        toast.success("Task created successfully!");
        formRef.current?.reset();
        router.push("/dashboard/client/my-tasks");
      } else {
        toast.error("Failed to create task.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-slate-950 py-16 text-white">
      <div className="container mx-auto max-w-5xl px-4">
        <Link
          href="/dashboard/client"
          className="mb-6 inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-cyan-500 hover:text-cyan-400"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>

        <div className="mb-8">
          <p className="text-sm font-semibold text-cyan-400">Client</p>
          <h1 className="mt-2 text-4xl font-bold">Post a Task</h1>
          <p className="mt-3 max-w-2xl text-slate-400">
            Create a clear task brief, set your budget, and start receiving
            proposals from skilled freelancers.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-500/10 md:p-8">
          <Form
            ref={formRef}
            className="flex flex-col gap-6"
            onSubmit={onSubmit}
          >
            <div className="grid gap-5 md:grid-cols-2">
              <TextField isRequired name="title">
                <Label className="text-slate-200">Task Title</Label>
                <Input
                  placeholder="Build a responsive landing page"
                  className="text-slate-600"
                />
                <FieldError className="text-red-400" />
              </TextField>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-200">
                  Category <span className="text-red-400">*</span>
                </label>

                <select
                  name="category"
                  required
                  className="h-10 rounded-xl border border-slate-700 bg-white px-3 text-slate-600 outline-none focus:border-cyan-500"
                >
                  <option value="">Select Category</option>
                  <option value="Design">Design</option>
                  <option value="Writing">Writing</option>
                  <option value="Development">Development</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <TextField isRequired name="budget" type="number">
                <Label className="text-slate-200">Budget (USD)</Label>
                <Input placeholder="150" className="text-slate-600" />
                <FieldError className="text-red-400" />
              </TextField>

              <TextField isRequired name="deadline" type="date">
                <Label className="text-slate-200">Deadline Date</Label>
                <Input className="text-slate-600" />
                <FieldError className="text-red-400" />
              </TextField>
            </div>

            <TextField isRequired name="description">
              <Label className="text-slate-200">Description</Label>
              <TextArea
                placeholder="Describe the task, expected output, required skills, and important project details..."
                className="min-h-36 text-slate-600"
              />
              <FieldError className="text-red-400" />
            </TextField>

            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-4">
              <p className="text-sm leading-6 text-slate-400">
                Tip: A clear task description helps freelancers submit better
                proposals and reduces unnecessary back-and-forth.
              </p>
            </div>

            <Button
              type="submit"
              isDisabled={isLoading}
              className="h-12 w-full rounded-xl bg-cyan-500 font-semibold text-white shadow-lg shadow-cyan-500/20"
            >
              {isLoading ? "Publishing..." : "Publish Task"}
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default PostTaskForm;
