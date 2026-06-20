import { getTaskById } from "@/lib/api/tasks";
import { ArrowLeft } from "@gravity-ui/icons";
import Link from "next/link";

const TaskDetailsPage = async ({ params }) => {
  const { id } = await params;
  const task = await getTaskById(id);

  return (
    <section className="min-h-screen bg-slate-950 py-16 text-white">
      <div className="container mx-auto max-w-4xl px-4">
        <Link
          href="/tasks"
          className="mb-6 inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-cyan-500 hover:text-cyan-400"
        >
          <ArrowLeft size={18} />
          Back to Tasks
        </Link>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
          <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
            {task.category}
          </span>

          <h1 className="mt-5 text-4xl font-bold">{task.title}</h1>

          <p className="mt-4 leading-7 text-slate-400">{task.description}</p>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            <div>
              <p className="text-sm text-slate-500">Budget</p>
              <p className="mt-1 text-xl font-bold text-cyan-400">
                ${task.budget}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Deadline</p>
              <p className="mt-1 text-xl font-bold text-white">
                {task.deadline}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Client</p>
              <p className="mt-1 text-xl font-bold text-white">
                {task.clientName || "Unknown"}
              </p>
            </div>
          </div>

          <Link
            href={`/tasks/${task._id}/proposal`}
            className="mt-8 block rounded-xl bg-cyan-500 py-3 text-center font-semibold text-white"
          >
            Submit Proposal
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TaskDetailsPage;
