import { getAdminUsers } from "@/lib/api/admin";
import AdminUserActions from "./AdminUserActions";

const AdminUsersPage = async () => {
  const users = await getAdminUsers();

  return (
    <div>
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 sm:p-6">
        <p className="text-sm font-semibold text-cyan-400">Admin</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Manage Users</h1>
        <p className="mt-2 text-slate-400">
          View users and block or unblock platform accounts.
        </p>
      </div>

      {users.length === 0 ? (
        <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900/70 p-8 text-center">
          <h2 className="text-xl font-semibold text-white">No users found</h2>
          <p className="mt-2 text-slate-400">
            Platform users will appear here.
          </p>
        </div>
      ) : (
        <>
          <div className="mt-6 grid gap-4 lg:hidden">
            {users.map((user) => (
              <div
                key={user._id}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
              >
                <h2 className="text-lg font-semibold text-white">
                  {user.name || "No name"}
                </h2>

                <div className="mt-4 space-y-2 text-sm">
                  <p className="break-all text-slate-400">
                    Email: <span className="text-slate-200">{user.email}</span>
                  </p>

                  <p className="text-slate-400">
                    Role:{" "}
                    <span className="capitalize text-slate-200">
                      {user.role || "client"}
                    </span>
                  </p>

                  <p className="text-slate-400">
                    Status:{" "}
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        user.isBlocked
                          ? "bg-red-500/10 text-red-400"
                          : "bg-emerald-500/10 text-emerald-400"
                      }`}
                    >
                      {user.isBlocked ? "Blocked" : "Active"}
                    </span>
                  </p>
                </div>

                <div className="mt-4 flex justify-end">
                  <AdminUserActions
                    userId={user._id}
                    isBlocked={user.isBlocked}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 hidden overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 lg:block">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px]">
                <thead className="border-b border-slate-800 bg-slate-950/60">
                  <tr>
                    <th className="px-6 py-4 text-left text-slate-300">Name</th>
                    <th className="px-6 py-4 text-left text-slate-300">
                      Email
                    </th>
                    <th className="px-6 py-4 text-left text-slate-300">Role</th>
                    <th className="px-6 py-4 text-left text-slate-300">
                      Status
                    </th>
                    <th className="px-6 py-4 text-right text-slate-300">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user) => (
                    <tr
                      key={user._id}
                      className="border-b border-slate-800/70 transition hover:bg-slate-800/40"
                    >
                      <td className="px-6 py-5 text-white">
                        {user.name || "No name"}
                      </td>

                      <td className="px-6 py-5 text-slate-400">{user.email}</td>

                      <td className="px-6 py-5 capitalize text-slate-300">
                        {user.role || "client"}
                      </td>

                      <td className="px-6 py-5">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium ${
                            user.isBlocked
                              ? "bg-red-500/10 text-red-400"
                              : "bg-emerald-500/10 text-emerald-400"
                          }`}
                        >
                          {user.isBlocked ? "Blocked" : "Active"}
                        </span>
                      </td>

                      <td className="px-6 py-5 text-right">
                        <AdminUserActions
                          userId={user._id}
                          isBlocked={user.isBlocked}
                        />
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

export default AdminUsersPage;
