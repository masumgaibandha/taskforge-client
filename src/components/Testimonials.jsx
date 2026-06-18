const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Client",
    review:
      "TaskForge helped me find a skilled developer within hours. The process was smooth and the results exceeded my expectations.",
  },
  {
    name: "Michael Chen",
    role: "Freelancer",
    review:
      "I've completed multiple projects on TaskForge. Payments are secure and the platform is easy to use.",
  },
  {
    name: "Emily Carter",
    role: "Client",
    review:
      "Posting tasks and managing proposals was incredibly simple. I hired the perfect freelancer for my project.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-slate-950 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold text-cyan-400">
            Success Stories
          </p>

          <h2 className="text-3xl font-bold text-white">What Our Users Say</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <div className="mb-4 text-cyan-400">★★★★★</div>

              <p className="leading-7 text-slate-300">"{item.review}"</p>

              <div className="mt-6 border-t border-slate-800 pt-4">
                <h3 className="font-semibold text-white">{item.name}</h3>

                <p className="text-sm text-slate-400">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
