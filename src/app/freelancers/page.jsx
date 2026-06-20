import Image from "next/image";
import { getFreelancers } from "@/lib/api/freelancers";

const FreelancerPage = async () => {
  const freelancers = await getFreelancers();

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
              key={freelancer._id}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-center"
            >
              <Image
                src={freelancer.image || "/assets/default-avatar.png"}
                alt={freelancer.name || "Freelancer"}
                width={100}
                height={100}
                className="mx-auto h-24 w-24 rounded-full object-cover"
              />

              <h2 className="mt-4 text-xl font-semibold text-white">
                {freelancer.name}
              </h2>

              <p className="mt-1 text-sm text-cyan-400">Freelancer</p>

              <p className="mt-4 text-sm text-slate-400">{freelancer.email}</p>

              <p className="mt-4 text-sm text-slate-400">
                Role: {freelancer.role}
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
