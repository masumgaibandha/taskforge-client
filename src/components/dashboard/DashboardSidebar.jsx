import { auth } from "@/lib/auth";
import {
  Briefcase,
  CreditCard,
  FileText,
  House,
  LayoutSideContentLeft,
  Magnifier,
  Person,
} from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import Link from "next/link";
import { headers } from "next/headers";

const DashboardSidebar = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;
  const role = user?.role || "client";

  const clientNavLinks = [
    { icon: House, href: "/dashboard/client", label: "Overview" },
    { icon: FileText, href: "/dashboard/client/post-task", label: "Post Task" },
    { icon: Briefcase, href: "/dashboard/client/my-tasks", label: "My Tasks" },
    { icon: FileText, href: "/dashboard/client/proposals", label: "Proposals" },
    { icon: Person, href: "/dashboard/client/profile", label: "Profile" },
    { icon: CreditCard, href: "/dashboard/client/payments", label: "Payments" },
  ];

  const freelancerNavLinks = [
    { icon: House, href: "/dashboard/freelancer", label: "Overview" },
    { icon: Magnifier, href: "/tasks", label: "Browse Tasks" },
    {
      icon: Briefcase,
      href: "/dashboard/freelancer/my-proposals",
      label: "My Proposals",
    },
    { icon: Person, href: "/dashboard/freelancer/profile", label: "Profile" },
  ];

  const navItems = role === "freelancer" ? freelancerNavLinks : clientNavLinks;

  const navContent = (
    <div className="flex h-full flex-col">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-white">
          Task<span className="text-cyan-400">Forge</span>
        </h2>
        <p className="mt-1 text-sm capitalize text-slate-400">
          {role} Dashboard
        </p>
      </div>

      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-400 transition hover:bg-slate-800 hover:text-cyan-400"
          >
            <item.icon className="size-5" />
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );

  return (
    <>
      <aside className="hidden min-h-[calc(100vh-120px)] w-64 shrink-0 rounded-3xl border border-slate-800 bg-slate-900/70 p-5 lg:block">
        {navContent}
      </aside>

      <Drawer>
        <Button className="mb-5 bg-slate-800 text-white lg:hidden">
          <LayoutSideContentLeft />
          Sidebar
        </Button>

        <Drawer.Backdrop className="bg-black/70">
          <Drawer.Content placement="left" className="bg-slate-950 text-white">
            <Drawer.Dialog className="min-h-screen border-r border-slate-800 bg-slate-950 p-5 text-white">
              <Drawer.CloseTrigger className="text-slate-400 hover:text-white" />
              <Drawer.Body>{navContent}</Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </>
  );
};

export default DashboardSidebar;
