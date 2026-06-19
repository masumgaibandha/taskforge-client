import Image from "next/image";

const FreelancerPage = () => {
  const freelancers = [
    {
      name: "Sarah Johnson",
      title: "UI/UX Designer",
      image: "https://i.pravatar.cc/150?img=5",
      skills: ["Figma", "Branding", "Landing Page"],
      rating: 4.9,
      jobs: 42,
      rate: 35,
    },
    {
      name: "Michael Chen",
      title: "Full Stack Developer",
      image: "https://i.pravatar.cc/150?img=8",
      skills: ["React", "Node.js", "MongoDB"],
      rating: 5.0,
      jobs: 58,
      rate: 45,
    },
    {
      name: "Emily Carter",
      title: "Content Writer",
      image: "https://i.pravatar.cc/150?img=9",
      skills: ["Blog Writing", "SEO", "Copywriting"],
      rating: 4.8,
      jobs: 36,
      rate: 28,
    },
  ];

  return (
    <section className="min-h-screen bg-slate-950 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <p className="text-sm font-semibold text-cyan-400">
            Browse Freelancers
          </p>

          <h1 className="mt-2 text-4xl font-bold">Find Skilled Freelancers</h1>

          <p className="mt-3 max-w-2xl text-slate-400">
            Explore talented freelancers, review their skills, ratings, and
            completed work.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {freelancers.map((freelancer) => (
            <div
              key={freelancer.name}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-center"
            >
    
              <Image src={freelancer.image} alt={freelancer.name} width={100} height={100} className="mx-auto h-24 w-24 rounded-full object-cover"/>

              <h2 className="mt-4 text-xl font-semibold text-white">
                {freelancer.name}
              </h2>

              <p className="mt-1 text-sm text-cyan-400">{freelancer.title}</p>

              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {freelancer.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-center gap-4 text-sm text-slate-400">
                <span>⭐ {freelancer.rating}</span>
                <span>{freelancer.jobs} jobs</span>
              </div>

              <p className="mt-4 font-semibold text-white">
                ${freelancer.rate}/hr
              </p>

              <button className="mt-5 w-full rounded-xl bg-cyan-500 py-2 font-semibold text-white">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreelancerPage;
