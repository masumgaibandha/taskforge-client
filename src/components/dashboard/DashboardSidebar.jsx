import {
  Briefcase,
  CircleCheck,
  House,
  Person,
  Plus,
} from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import Link from "next/link";

const DashboardSidebar = () => {
  const navItems = [
    { icon: House, href: "/dashboard/client", label: "Overview" },
    { icon: Plus, href: "/dashboard/client/post-task", label: "Post Task" },
    { icon: Briefcase, href: "/dashboard/client/my-tasks", label: "My Tasks" },
    { icon: CircleCheck, href: "/dashboard/client/proposals", label: "Proposals" },
    { icon: Person, href: "/dashboard/client/profile", label: "Profile" },
    { icon: Briefcase, href: "/dashboard/freelancer/my-proposals", label: "My Proposals" },
    
  ];

  const navContent = (
    <div className="flex h-full flex-col">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-white">
          Task<span className="text-cyan-400">Forge</span>
        </h2>
        <p className="mt-1 text-sm text-slate-500">Client Dashboard</p>
      </div>

      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-400 transition hover:bg-cyan-500/10 hover:text-cyan-400"
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
      <aside className="hidden min-h-[80vh] w-64 shrink-0 rounded-3xl border border-slate-800 bg-slate-900/70 p-5 lg:block">
        {navContent}
      </aside>

      <div className="mb-5 lg:hidden">
        <Drawer>
          <Button className="bg-cyan-500 font-semibold text-white">
            Menu
          </Button>

          <Drawer.Backdrop className="bg-black/70">
            <Drawer.Content placement="left">
              <Drawer.Dialog className="min-h-screen w-72 border-r border-slate-800 bg-slate-950 p-5 text-white">
                <Drawer.CloseTrigger />
                {navContent}
              </Drawer.Dialog>
            </Drawer.Content>
          </Drawer.Backdrop>
        </Drawer>
      </div>
    </>
  );
};

export default DashboardSidebar;