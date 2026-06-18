const PlatformStats = () => {
  const stats = [
    {
      value: "2,500+",
      label: "Tasks Posted",
    },
    {
      value: "1,200+",
      label: "Freelancers",
    },
    {
      value: "$85K+",
      label: "Total Payout",
    },
    {
      value: "98%",
      label: "Success Rate",
    },
  ];

  return (
    <section className="bg-slate-900 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold text-cyan-400">
            Platform Growth
          </p>
          <h2 className="text-3xl font-bold text-white">
            Trusted By Thousands
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-8 text-center"
            >
              <h3 className="text-4xl font-bold text-cyan-400">{stat.value}</h3>

              <p className="mt-3 text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformStats;
