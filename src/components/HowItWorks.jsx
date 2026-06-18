const steps = [
  {
    title: "Post a Task",
    text: "Clients publish small tasks with budget, category, and deadline.",
  },
  {
    title: "Get Proposals",
    text: "Freelancers apply with price, timeline, and a short message.",
  },
  {
    title: "Hire and Pay",
    text: "Clients accept the best proposal and pay securely through Stripe.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-slate-950 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold text-cyan-400">
            Simple Process
          </p>
          <h2 className="text-3xl font-bold text-white">How It Works</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500 text-lg font-bold text-white">
                {index + 1}
              </div>

              <h3 className="text-xl font-semibold text-white">{step.title}</h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
