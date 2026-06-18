const freelancers = [
  {
    name: "John Smith",
    image: "https://i.pravatar.cc/150?img=1",
    skills: ["React", "Next.js"],
    rating: 4.9,
    jobs: 48,
  },
  {
    name: "Emily Carter",
    image: "https://i.pravatar.cc/150?img=5",
    skills: ["UI/UX", "Figma"],
    rating: 4.8,
    jobs: 35,
  },
  {
    name: "Michael Chen",
    image: "https://i.pravatar.cc/150?img=8",
    skills: ["Node.js", "MongoDB"],
    rating: 5.0,
    jobs: 52,
  },
];

const TopFreelancers = () => {
  return (
    <section className="bg-slate-900 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold text-cyan-400">Top Talent</p>
          <h2 className="text-3xl font-bold text-white">Top Freelancers</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {freelancers.map((freelancer) => (
            <div
              key={freelancer.name}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-6 text-center"
            >
              <img
                src={freelancer.image}
                alt={freelancer.name}
                className="mx-auto h-24 w-24 rounded-full object-cover"
              />

              <h3 className="mt-4 text-xl font-semibold text-white">
                {freelancer.name}
              </h3>

              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {freelancer.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-slate-400">
                ⭐ {freelancer.rating} · {freelancer.jobs} jobs completed
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopFreelancers;
