import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const role = session?.user?.role;

  if (role === "client") {
    redirect("/dashboard/client");
  }

  if (role === "freelancer") {
    redirect("/dashboard/freelancer");
  }

  redirect("/login");
};

export default DashboardPage;
