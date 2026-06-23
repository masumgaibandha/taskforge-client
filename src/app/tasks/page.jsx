import { getClientTasks } from "@/lib/api/tasks";
import Link from "next/link";
import TaskFilters from "./TaskFilters";

const TasksPage = async ({ searchParams }) => {
  const params = await searchParams;

  const search = params?.search || "";
  const category = params?.category || "";
  const page = Number(params?.page) || 1;

  const data = await getClientTasks(null, search, category, page, 9);

  const tasks = data?.tasks || [];
  const totalPages = data?.totalPages || 1;

  const createPageUrl = (pageNumber) => {
    const query = new URLSearchParams();

    if (search) query.set("search", search);
    if (category) query.set("category", category);
    query.set("page", pageNumber);

    return `/tasks?${query.toString()}`;
  };

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

        <TaskFilters search={search} category={category} />

        {(search || category) && (
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <p className="text-sm text-slate-400">
              Showing results
              {search ? ` for "${search}"` : ""}
              {category ? ` in ${category}` : ""}
            </p>

            <Link
              href="/tasks"
              className="rounded-full border border-slate-700 px-4 py-1.5 text-sm text-slate-300 hover:border-cyan-500 hover:text-cyan-400"
            >
              Clear filters
            </Link>
          </div>
        )}

        {tasks.length === 0 ? (
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 text-center">
            <h2 className="text-xl font-semibold text-white">No tasks found</h2>
            <p className="mt-2 text-slate-400">
              Try changing your search or category filter.
            </p>
          </div>
        ) : (
          <>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {tasks.map((task) => (
                <div
                  key={task._id}
                  className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
                >
                  <span className="w-fit rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
                    {task.category}
                  </span>

                  <h2 className="mt-4 line-clamp-2 text-xl font-semibold text-white">
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
                    className="mt-auto block w-full rounded-xl bg-cyan-500 py-2 text-center font-semibold text-white"
                  >
                    View Details
                  </Link>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
                <Link
                  href={createPageUrl(Math.max(page - 1, 1))}
                  className={`rounded-lg border border-slate-700 px-4 py-2 text-sm ${
                    page === 1
                      ? "pointer-events-none opacity-40"
                      : "hover:border-cyan-500 hover:text-cyan-400"
                  }`}
                >
                  Previous
                </Link>

                {Array.from({ length: totalPages }, (_, index) => {
                  const pageNumber = index + 1;

                  return (
                    <Link
                      key={pageNumber}
                      href={createPageUrl(pageNumber)}
                      className={`rounded-lg border px-4 py-2 text-sm ${
                        pageNumber === page
                          ? "border-cyan-500 bg-cyan-500 text-white"
                          : "border-slate-700 text-slate-300 hover:border-cyan-500 hover:text-cyan-400"
                      }`}
                    >
                      {pageNumber}
                    </Link>
                  );
                })}

                <Link
                  href={createPageUrl(Math.min(page + 1, totalPages))}
                  className={`rounded-lg border border-slate-700 px-4 py-2 text-sm ${
                    page === totalPages
                      ? "pointer-events-none opacity-40"
                      : "hover:border-cyan-500 hover:text-cyan-400"
                  }`}
                >
                  Next
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default TasksPage;
