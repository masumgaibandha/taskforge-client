import { Button } from "@heroui/react";
import Link from "next/link";

const tasks = [
  {
    title: "Design a modern logo",
    client: "Sarah Johnson",
    category: "Design",
    budget: 120,
    deadline: "2026-07-10",
  },
  {
    title: "Fix responsive CSS issue",
    client: "Michael Chen",
    category: "Development",
    budget: 80,
    deadline: "2026-07-14",
  },
  {
    title: "Write blog article",
    client: "Emily Carter",
    category: "Writing",
    budget: 60,
    deadline: "2026-07-18",
  },
];

const FeaturedTasks = () => {
  return (
    <section className="bg-slate-950 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-semibold text-cyan-400">
              Latest Opportunities
            </p>
            <h2 className="text-3xl font-bold text-white">Featured Tasks</h2>
          </div>

          <Link href="/tasks">
            <Button
              variant="bordered"
              className="border-slate-700 text-slate-200"
            >
              View All
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tasks.map((task) => (
            <div
              key={task.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:-translate-y-1 hover:border-cyan-500/50"
            >
              <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
                {task.category}
              </span>

              <h3 className="mt-5 text-xl font-semibold text-white">
                {task.title}
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Posted by {task.client}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-5">
                <p className="font-semibold text-white">${task.budget}</p>
                <p className="text-sm text-slate-400">{task.deadline}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTasks;
