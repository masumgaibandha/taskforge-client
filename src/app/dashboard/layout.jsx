import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

const DashboardLayout = ({ children }) => {
  return (
    <section className="min-h-screen bg-slate-950 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="lg:flex">
          <DashboardSidebar />

          <main className="mt-6 min-w-0 flex-1 lg:mt-0 lg:pl-8">
            {children}
          </main>
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
