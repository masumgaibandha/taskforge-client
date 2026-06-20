import { getClientTasks } from "@/lib/api/tasks";
import Link from "next/link";

const TasksPage = async () => {
  const tasks = await getClientTasks();

  return (
    <section className="min-h-screen bg-slate-950 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <p className="text-sm font-semibold text-cyan-400">Browse Tasks</p>

          <h1 className="mt-2 text-4xl font-bold">
            Find Your Next Opportunity
          </h1>

          <p className="mt-3 max-w-2xl text-slate-400">
            Explore available micro-tasks from clients around the world. Submit
            proposals and start earning.
          </p>
        </div>

        <div className="mb-8 grid gap-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-5 md:grid-cols-3">
          <input
            type="text"
            placeholder="Search tasks..."
            className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-300 outline-none"
          />

          <select className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-300 outline-none">
            <option>All Categories</option>
            <option>Design</option>
            <option>Writing</option>
            <option>Development</option>
            <option>Marketing</option>
            <option>Other</option>
          </select>

          <button className="rounded-xl bg-cyan-500 px-4 py-3 font-semibold text-white">
            Search
          </button>
        </div>

        {tasks.length === 0 ? (
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 text-center">
            <h2 className="text-xl font-semibold text-white">No tasks found</h2>
            <p className="mt-2 text-slate-400">
              There are no open tasks available right now.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tasks.map((task) => (
              <div
                key={task._id}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
              >
                <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
                  {task.category}
                </span>

                <h2 className="mt-4 text-xl font-semibold text-white">
                  {task.title}
                </h2>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400">
                  {task.description}
                </p>

                <div className="mt-5 space-y-2 text-sm">
                  <p>
                    Budget:{" "}
                    <span className="font-semibold text-cyan-400">
                      ${task.budget}
                    </span>
                  </p>

                  <p className="text-slate-400">
                    Deadline:{" "}
                    <span className="whitespace-nowrap">{task.deadline}</span>
                  </p>

                  <p className="text-slate-400">
                    Client: {task.clientName || "Unknown"}
                  </p>
                </div>

                <Link
                  href={`/tasks/${task._id}`}
                  className="mt-5 block w-full rounded-xl bg-cyan-500 py-2 text-center font-semibold text-white"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TasksPage;
