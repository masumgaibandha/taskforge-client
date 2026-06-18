import Link from "next/link";
import { Button } from "@heroui/react";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-cyan-400">404</h1>

        <h2 className="mt-4 text-3xl font-bold text-white">Page Not Found</h2>

        <p className="mt-3 text-slate-400">
          The page you are looking for does not exist.
        </p>

        <Link href="/">
          <Button className="mt-8 bg-cyan-500 text-white">Back to Home</Button>
        </Link>
      </div>
    </section>
  );
}
