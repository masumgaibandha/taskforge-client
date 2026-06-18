"use client"
import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="container mx-auto px-4 py-24 text-center md:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="mb-5 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            Freelance Micro-Task Platform
          </p>

          <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            Get your tasks done by{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              skilled freelancers
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
            Post small tasks, receive proposals from freelancers, hire the best
            fit, and complete work securely with Stripe-powered payments.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              as={Link}
              href="/dashboard/client/post-task"
              size="lg"
              className="bg-cyan-500 px-8 font-semibold text-white shadow-lg shadow-cyan-500/20"
            >
              Post a Task
            </Button>

            <Button
              as={Link}
              href="/tasks"
              size="lg"
              variant="bordered"
              className="border-slate-700 px-8 font-semibold text-slate-200"
            >
              Browse Tasks
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
