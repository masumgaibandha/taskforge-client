import { getFreelancers } from "@/lib/api/freelancers";
import Image from "next/image";
import Link from "next/link";

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

        {freelancers.length === 0 ? (
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 text-center">
            <h2 className="text-xl font-semibold text-white">
              No freelancers found
            </h2>
            <p className="mt-2 text-slate-400">
              Freelancers will appear here after registration.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {freelancers.map((freelancer) => (
              <Link
                key={freelancer._id}
                href={`/freelancers/${freelancer._id}`}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-center transition hover:-translate-y-1 hover:border-cyan-500/50"
              >
                <Image
                  src={freelancer.image || "/assets/default-avatar.png"}
                  alt={freelancer.name || "Freelancer"}
                  width={100}
                  height={100}
                  className="mx-auto h-24 w-24 rounded-full border-2 border-cyan-500/40 object-cover"
                />

                <h2 className="mt-4 text-xl font-semibold text-white">
                  {freelancer.name || "Unnamed Freelancer"}
                </h2>
                {freelancer.verified && (
                  <span className="mt-3 inline-flex rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                    ✓ Verified Freelancer
                  </span>
                )}

                <p className="mt-1 text-sm text-cyan-400">
                  ${freelancer.hourlyRate || 0}/hr
                </p>

                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {(freelancer.skills || []).slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <p className="mt-4 line-clamp-2 text-sm text-slate-400">
                  {freelancer.bio || "No bio added yet."}
                </p>

                <span className="mt-5 inline-flex rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-white">
                  View Profile
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FreelancerPage;
