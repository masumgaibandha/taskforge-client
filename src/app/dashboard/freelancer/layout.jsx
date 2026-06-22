import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const FreelancerDashboardLayout = async ({ children }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  if (!user) {
    redirect("/login");
  }

  if (user.role !== "freelancer") {
    redirect(
      user.role === "client"
        ? "/dashboard/client"
        : user.role === "admin"
          ? "/dashboard/admin"
          : "/",
    );
  }

  return children;
};

export default FreelancerDashboardLayout;
