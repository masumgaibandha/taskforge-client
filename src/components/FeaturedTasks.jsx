import { getClientTasks } from "@/lib/api/tasks";
import { Button } from "@heroui/react";
import Link from "next/link";

const FeaturedTasks = async () => {
  const tasks = await getClientTasks();

  const featuredTasks = tasks
    .filter((task) => task.status === "open")
    .slice(0, 6);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

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

        {featuredTasks.length === 0 ? (
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 text-center">
            <h3 className="text-xl font-semibold text-white">
              No featured tasks found
            </h3>
            <p className="mt-2 text-slate-400">
              New open tasks will appear here.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {featuredTasks.map((task) => (
              <Link
                href={`/tasks/${task._id}`}
                key={task._id}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:-translate-y-1 hover:border-cyan-500/50"
              >
                <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
                  {task.category}
                </span>

                <h3 className="mt-5 line-clamp-2 text-xl font-semibold text-white">
                  {task.title}
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Posted by {task.clientName || "Client"}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-5">
                  <p className="font-semibold text-white">${task.budget}</p>
                  <p className="text-sm text-slate-400">
                    {formatDate(task.deadline)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedTasks;
