import DashboardSidebar from "@/components/dashboard/DashboardSidebar";



const DashboardLayout = ({ children }) => {
  return (
    <section className="min-h-screen bg-slate-950 text-white">
      <div className="container mx-auto flex px-4 py-8">
        <DashboardSidebar />

        <main className="flex-1 lg:pl-8">{children}</main>
      </div>
    </section>
  );
};

export default DashboardLayout;
