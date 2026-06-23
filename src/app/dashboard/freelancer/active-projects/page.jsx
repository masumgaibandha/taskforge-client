import { getFreelancerTasks } from "@/lib/api/tasks";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import SubmitDeliverableForm from "./SubmitDeliverableForm";

const ActiveProjectsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const data = await getFreelancerTasks(session?.user?.email);
  const tasks = data?.tasks || [];

  const activeProjects = tasks.filter(
    (task) => task.status === "in-progress" || task.status === "completed",
  );

  return (
    <div>
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
        <p className="text-sm font-semibold text-cyan-400">Freelancer</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Active Projects</h1>
        <p className="mt-2 text-slate-400">
          Track accepted projects, submit deliverables, and view completed work.
        </p>
      </div>

      {activeProjects.length === 0 ? (
        <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900/70 p-8 text-center">
          <h2 className="text-xl font-semibold text-white">
            No active projects found
          </h2>
          <p className="mt-2 text-slate-400">
            Accepted projects will appear here after client payment.
          </p>
        </div>
      ) : (
        <div className="mt-6 grid gap-5">
          {activeProjects.map((task) => (
            <div
              key={task._id}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
                    {task.category}
                  </span>

                  <h2 className="mt-4 text-2xl font-bold text-white">
                    {task.title}
                  </h2>

                  <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
                    {task.description}
                  </p>

                  <div className="mt-5 grid gap-3 text-sm text-slate-400 sm:grid-cols-3">
                    <p>
                      Client:{" "}
                      <span className="text-slate-200">{task.clientName}</span>
                    </p>

                    <p>
                      Budget:{" "}
                      <span className="font-semibold text-cyan-400">
                        ${task.budget}
                      </span>
                    </p>

                    <p>
                      Status:{" "}
                      <span className="font-semibold text-emerald-400">
                        {task.status}
                      </span>
                    </p>
                  </div>

                  {task.deliverableUrl && (
                    <a
                      href={task.deliverableUrl}
                      target="_blank"
                      className="mt-5 inline-flex text-sm font-semibold text-cyan-400 hover:underline"
                    >
                      View Submitted Deliverable →
                    </a>
                  )}
                </div>

                {task.status === "in-progress" && !task.deliverableUrl && (
                  <SubmitDeliverableForm taskId={task._id} />
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ActiveProjectsPage;
