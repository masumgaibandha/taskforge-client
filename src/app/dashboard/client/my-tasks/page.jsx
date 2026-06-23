import { getClientTasks } from "@/lib/api/tasks";
import { ArrowLeft, Eye, Pencil, TrashBin } from "@gravity-ui/icons";
import Link from "next/link";
import DeleteTaskButton from "./DeleteTaskButton";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import CompleteTaskButton from "./CompleteTaskButton";
import ReviewTaskButton from "./ReviewTaskButton";
import { getReviews } from "@/lib/api/reviews";
import VerifyFreelancerButton from "./VerifyFreelancerButton";

const MyTasksPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const data = await getClientTasks(user?.email);
  const tasks = data?.tasks || [];
  const reviews = await getReviews({
    reviewerEmail: user?.email,
  });

  const reviewedTaskIds = reviews.map((review) => review.taskId);

  const getStatusStyle = (status) => {
    if (status === "open") return "bg-cyan-500/10 text-cyan-300";
    if (status === "in-progress") return "bg-amber-500/10 text-amber-300";
    if (status === "completed") return "bg-emerald-500/10 text-emerald-300";
    return "bg-slate-500/10 text-slate-300";
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div>
      <Link
        href="/dashboard/client"
        className="mb-6 inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-cyan-500 hover:text-cyan-400"
      >
        <ArrowLeft size={18} />
        Back to Dashboard
      </Link>

      <div className="mb-8 flex flex-col justify-between gap-4 rounded-3xl border border-slate-800 bg-slate-900/70 p-5 md:flex-row md:items-center md:p-6">
        <div>
          <p className="text-sm font-semibold text-cyan-400">Client</p>
          <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
            My Tasks
          </h1>
          <p className="mt-2 text-sm leading-6 text-slate-400 md:text-base">
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

      {tasks.length === 0 ? (
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 text-center">
          <h2 className="text-xl font-semibold text-white">No tasks found</h2>
          <p className="mt-2 text-slate-400">
            You have not posted any task yet.
          </p>
        </div>
      ) : (
        <>
          <div className="grid gap-5 lg:hidden">
            {tasks.map((task) => (
              <div
                key={task._id}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="font-semibold text-white">{task.title}</h2>
                    <p className="mt-1 text-sm text-slate-400">
                      {task.category}
                    </p>
                  </div>

                  <span
                    className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${getStatusStyle(
                      task.status,
                    )}`}
                  >
                    {task.status}
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-slate-500">Budget</p>
                    <p className="mt-1 font-semibold text-cyan-400">
                      ${task.budget}
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-500">Deadline</p>
                    <p className="mt-1 whitespace-nowrap text-slate-300">
                      {formatDate(task.deadline)}
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-500">Proposals</p>
                    <p className="mt-1 text-slate-300">
                      {task.proposalCount || 0}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex gap-2">
                  <Link
                    href={`/tasks/${task._id}`}
                    className="flex-1 rounded-lg border border-slate-700 px-3 py-2 text-center text-slate-300"
                  >
                    <Eye className="mx-auto size-4" />
                  </Link>

                  <Link
                    href={`/dashboard/client/my-tasks/${task._id}`}
                    className="flex-1 rounded-lg border border-slate-700 px-3 py-2 text-center text-slate-300"
                  >
                    <Pencil className="mx-auto size-4" />
                  </Link>
                  {task.status === "completed" &&
                    task.freelancerEmail &&
                    !task.verified && (
                      <VerifyFreelancerButton
                        freelancerEmail={task.freelancerEmail}
                      />
                    )}
                  <DeleteTaskButton taskId={task._id} />
                  {task.status === "in-progress" && task.deliverableUrl && (
                    <CompleteTaskButton taskId={task._id} />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="hidden overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 lg:block">
            <div className="overflow-x-auto">
              <table className="w-full min-w-212.5 text-left">
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
                    <th className="w-40 px-6 py-4 text-sm font-semibold text-slate-300">
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
                      key={task._id}
                      className="border-b border-slate-800/70 transition hover:bg-slate-800/40"
                    >
                      <td className="px-6 py-5">
                        <p className="font-semibold text-white">{task.title}</p>
                      </td>

                      <td className="px-6 py-5 text-slate-400">
                        {task.category}
                      </td>

                      <td className="px-6 py-5 font-semibold text-cyan-400">
                        ${task.budget}
                      </td>

                      <td className="px-6 py-5 whitespace-nowrap text-slate-400">
                        {formatDate(task.deadline)}
                      </td>

                      <td className="px-6 py-5 text-slate-400">
                        {task.proposalCount || 0}
                      </td>

                      <td className="px-6 py-5">
                        <span
                          className={`inline-flex whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium ${getStatusStyle(
                            task.status,
                          )}`}
                        >
                          {task.status}
                        </span>
                      </td>

                      <td className="px-6 py-5">
                        <div className="flex justify-end gap-2">
                          <Link
                            href={`/tasks/${task._id}`}
                            className="rounded-lg border border-slate-700 p-2 text-slate-300"
                          >
                            <Eye className="size-4" />
                          </Link>

                          <Link
                            href={`/dashboard/client/my-tasks/${task._id}`}
                            className="rounded-lg border border-slate-700 p-2 text-slate-300"
                          >
                            <Pencil className="size-4" />
                          </Link>

                          {task.status === "in-progress" &&
                            task.deliverableUrl && (
                              <CompleteTaskButton taskId={task._id} />
                            )}
                          {task.status === "completed" &&
                            task.freelancerEmail &&
                            !task.verified && (
                              <VerifyFreelancerButton
                                freelancerEmail={task.freelancerEmail}
                              />
                            )}
                          <DeleteTaskButton taskId={task._id} />
                        </div>
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

export default MyTasksPage;
