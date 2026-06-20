"use client";

import { createProposal } from "@/lib/actions/proposals";
import { useSession } from "@/lib/auth-client";
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

const ProposalForm = ({ task }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const formRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!session?.user?.email) {
      toast.error("Please login first.");
      return;
    }

    setIsLoading(true);

    try {
      const formData = new FormData(e.currentTarget);

      const payload = {
        taskId: task._id,
        taskTitle: task.title,
        clientEmail: task.clientEmail,

        freelancerName: session.user.name,
        freelancerEmail: session.user.email,

        bidAmount: Number(formData.get("bidAmount")),
        deliveryTime: formData.get("deliveryTime"),
        coverLetter: formData.get("coverLetter"),
      };

      const res = await createProposal(payload);

      if (res.insertedId) {
        toast.success("Proposal submitted successfully!");
        formRef.current?.reset();
        router.push("/tasks");
      } else {
        toast.error("Failed to submit proposal.");
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
      <div className="container mx-auto max-w-3xl px-4">
        <div className="mb-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold text-cyan-400">Submit Proposal</p>
          <h1 className="mt-2 text-3xl font-bold">{task.title}</h1>
          <p className="mt-3 text-slate-400">
            Budget: <span className="text-cyan-400">${task.budget}</span>
          </p>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
          <Form
            ref={formRef}
            onSubmit={onSubmit}
            className="flex flex-col gap-5"
          >
            <TextField isRequired name="bidAmount" type="number">
              <Label className="text-slate-200">Your Bid Amount</Label>
              <Input placeholder="120" className="text-slate-600" />
              <FieldError className="text-red-400" />
            </TextField>

            <TextField isRequired name="deliveryTime">
              <Label className="text-slate-200">Delivery Time</Label>
              <Input placeholder="5 days" className="text-slate-600" />
              <FieldError className="text-red-400" />
            </TextField>

            <TextField isRequired name="coverLetter">
              <Label className="text-slate-200">Cover Letter</Label>
              <TextArea
                placeholder="Explain why you are a good fit for this task..."
                className="min-h-36 text-slate-600"
              />
              <FieldError className="text-red-400" />
            </TextField>

            <Button
              type="submit"
              isDisabled={isLoading}
              className="h-12 w-full rounded-xl bg-cyan-500 font-semibold text-white"
            >
              {isLoading ? "Submitting..." : "Submit Proposal"}
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ProposalForm;
