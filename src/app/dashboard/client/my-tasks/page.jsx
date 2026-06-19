import { Eye, Pencil, TrashBin } from "@gravity-ui/icons";
import Link from "next/link";

const MyTasksPage = () => {
  const tasks = [
    {
      id: 1,
      title: "Build a responsive landing page",
      category: "Development",
      budget: 150,
      deadline: "2026-07-15",
      status: "Open",
      proposals: 8,
    },
    {
      id: 2,
      title: "Design a modern logo",
      category: "Design",
      budget: 80,
      deadline: "2026-07-20",
      status: "In Progress",
      proposals: 5,
    },
    {
      id: 3,
      title: "Write SEO blog article",
      category: "Writing",
      budget: 60,
      deadline: "2026-07-25",
      status: "Completed",
      proposals: 12,
    },
  ];

  const getStatusStyle = (status) => {
    if (status === "Open") return "bg-cyan-500/10 text-cyan-300";
    if (status === "In Progress") return "bg-amber-500/10 text-amber-300";
    return "bg-emerald-500/10 text-emerald-300";
  };

  return (
    <div>
      <div className="mb-8 flex flex-col justify-between gap-4 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:flex-row md:items-center">
        <div>
          <p className="text-sm font-semibold text-cyan-400">Client</p>
          <h1 className="mt-2 text-3xl font-bold text-white">My Tasks</h1>
          <p className="mt-2 text-slate-400">
            View, edit, and manage all tasks you have posted.
          </p>
        </div>

        <Link
          href="/dashboard/client/post-task"
          className="rounded-xl bg-cyan-500 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-cyan-500/20"
        >
          Post New Task
        </Link>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left">
            <thead className="border-b border-slate-800 bg-slate-950/60">
              <tr>
                <th className="px-6 py-4 text-sm font-semibold text-slate-300">
                  Task
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-300">
                  Category
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-300">
                  Budget
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-300">
                  Deadline
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-300">
                  Proposals
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-300">
                  Status
                </th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-slate-300">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {tasks.map((task) => (
                <tr
                  key={task.id}
                  className="border-b border-slate-800/70 transition hover:bg-slate-800/40"
                >
                  <td className="px-6 py-5">
                    <p className="font-semibold text-white">{task.title}</p>
                  </td>

                  <td className="px-6 py-5 text-slate-400">{task.category}</td>

                  <td className="px-6 py-5 font-semibold text-cyan-400">
                    ${task.budget}
                  </td>

                  <td className="px-6 py-5 text-slate-400">{task.deadline}</td>

                  <td className="px-6 py-5 text-slate-400">{task.proposals}</td>

                  <td className="px-6 py-5">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusStyle(
                        task.status,
                      )}`}
                    >
                      {task.status}
                    </span>
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex justify-end gap-2">
                      <button className="rounded-lg border border-slate-700 p-2 text-slate-300 transition hover:border-cyan-500 hover:text-cyan-400">
                        <Eye className="size-4" />
                      </button>

                      <button className="rounded-lg border border-slate-700 p-2 text-slate-300 transition hover:border-amber-500 hover:text-amber-400">
                        <Pencil className="size-4" />
                      </button>

                      <button className="rounded-lg border border-slate-700 p-2 text-slate-300 transition hover:border-red-500 hover:text-red-400">
                        <TrashBin className="size-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyTasksPage;
