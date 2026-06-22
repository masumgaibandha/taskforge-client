import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const AdminDashboardLayout = async ({ children }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  if (!user) {
    redirect("/login");
  }

  if (user.role !== "admin") {
    redirect(
      user.role === "client"
        ? "/dashboard/client"
        : user.role === "freelancer"
          ? "/dashboard/freelancer"
          : "/",
    );
  }

  return children;
};

export default AdminDashboardLayout;
