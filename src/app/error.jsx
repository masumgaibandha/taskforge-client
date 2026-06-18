"use client"

import { Button } from "@heroui/react";

export default function Error({ error, reset }) {
  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-red-400">
          Something went wrong
        </h1>

        <p className="mt-3 text-slate-400">{error?.message}</p>

        <Button onPress={() => reset()} className="mt-6 bg-cyan-500 text-white">
          Try Again
        </Button>
      </div>
    </section>
  );
}
