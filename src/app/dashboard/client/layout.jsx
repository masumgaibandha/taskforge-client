import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const ClientDashboardLayout = async ({ children }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  if (!user) {
    redirect("/login");
  }

  if (user.role !== "client") {
    redirect(
      user.role === "freelancer"
        ? "/dashboard/freelancer"
        : user.role === "admin"
          ? "/dashboard/admin"
          : "/",
    );
  }

  return children;
};

export default ClientDashboardLayout;