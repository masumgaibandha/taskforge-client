import { getAdminTasks } from "@/lib/api/admin";
import AdminTaskActions from "./AdminTaskActions";

const AdminTasksPage = async () => {
  const tasks = await getAdminTasks();

  return (
    <div>
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 sm:p-6">
        <p className="text-sm font-semibold text-cyan-400">Admin</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Manage Tasks</h1>
        <p className="mt-2 text-slate-400">
          Review all platform tasks and remove unsafe posts.
        </p>
      </div>

      {tasks.length === 0 ? (
        <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900/70 p-8 text-center">
          <h2 className="text-xl font-semibold text-white">No tasks found</h2>
          <p className="mt-2 text-slate-400">
            Platform tasks will appear here.
          </p>
        </div>
      ) : (
        <>
          <div className="mt-6 grid gap-4 lg:hidden">
            {tasks.map((task) => (
              <div
                key={task._id}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
              >
                <h2 className="line-clamp-2 text-lg font-semibold text-white">
                  {task.title}
                </h2>

                <div className="mt-4 space-y-2 text-sm">
                  <p className="text-slate-400">
                    Client:{" "}
                    <span className="text-slate-200">{task.clientEmail}</span>
                  </p>

                  <p className="text-slate-400">
                    Budget:{" "}
                    <span className="font-semibold text-cyan-400">
                      ${task.budget}
                    </span>
                  </p>

                  <p className="text-slate-400">
                    Status:{" "}
                    <span className="font-semibold text-emerald-400">
                      {task.status}
                    </span>
                  </p>
                </div>

                <div className="mt-4 flex justify-end">
                  <AdminTaskActions taskId={task._id} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 hidden overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 lg:block">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px]">
                <thead className="border-b border-slate-800 bg-slate-950/60">
                  <tr>
                    <th className="px-6 py-4 text-left text-slate-300">Task</th>
                    <th className="px-6 py-4 text-left text-slate-300">
                      Client
                    </th>
                    <th className="px-6 py-4 text-left text-slate-300">
                      Budget
                    </th>
                    <th className="px-6 py-4 text-left text-slate-300">
                      Status
                    </th>
                    <th className="px-6 py-4 text-right text-slate-300">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {tasks.map((task) => (
                    <tr key={task._id} className="border-b border-slate-800/70">
                      <td className="px-6 py-5 text-white">{task.title}</td>

                      <td className="px-6 py-5 text-slate-400">
                        {task.clientEmail}
                      </td>

                      <td className="px-6 py-5 font-semibold text-cyan-400">
                        ${task.budget}
                      </td>

                      <td className="px-6 py-5 text-slate-300">
                        {task.status}
                      </td>

                      <td className="px-6 py-5 text-right">
                        <AdminTaskActions taskId={task._id} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminTasksPage;
