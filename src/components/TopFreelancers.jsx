import { getFreelancers } from "@/lib/api/freelancers";
import { StarFill } from "@gravity-ui/icons";
import Image from "next/image";
import Link from "next/link";

const TopFreelancers = async () => {
  const freelancers = await getFreelancers();

  const topFreelancers = freelancers
    .sort((a, b) => {
      const ratingDiff = (b.averageRating || 0) - (a.averageRating || 0);
      if (ratingDiff !== 0) return ratingDiff;

      return (b.completedJobs || 0) - (a.completedJobs || 0);
    })
    .slice(0, 6);

  return (
    <section className="bg-slate-900 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold text-cyan-400">Top Talent</p>

          <h2 className="text-3xl font-bold text-white">Top Freelancers</h2>

          <p className="mx-auto mt-3 max-w-2xl text-slate-400">
            Explore skilled freelancers based on profile quality, completed
            jobs, and client feedback.
          </p>
        </div>

        {topFreelancers.length === 0 ? (
          <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8 text-center">
            <h3 className="text-xl font-semibold text-white">
              No freelancers found
            </h3>

            <p className="mt-2 text-slate-400">Freelancers will appear here.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {topFreelancers.map((freelancer) => (
              <Link
                key={freelancer._id}
                href={`/freelancers/${freelancer._id}`}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-6 text-center transition hover:-translate-y-1 hover:border-cyan-500/50"
              >
                <Image
                  src={
                    freelancer.image ||
                    "https://i.ibb.co/dSjqkQR/568-camedia.png"
                  }
                  alt={freelancer.name || "Freelancer"}
                  width={200}
                  height={200}
                  className="mx-auto h-24 w-24 rounded-full border-2 border-cyan-500/40 object-cover"
                />

                <h3 className="mt-4 text-xl font-semibold text-white">
                  {freelancer.name || "Unnamed Freelancer"}
                </h3>

                {freelancer.verified && (
                  <span className="mt-3 inline-flex rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                    ✓ Verified Freelancer
                  </span>
                )}

                <p className="mt-1 text-sm text-slate-400">
                  {freelancer.location || "Remote Freelancer"}
                </p>

                <div className="mt-4 flex items-center justify-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-yellow-400">
                    <StarFill className="size-4" />
                    <span className="font-semibold">
                      {freelancer.averageRating || 0}
                    </span>
                    <span className="text-slate-500">
                      ({freelancer.totalReviews || 0})
                    </span>
                  </div>

                  <div className="text-slate-400">
                    <span className="font-semibold text-white">
                      {freelancer.completedJobs || 0}
                    </span>{" "}
                    jobs
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {(freelancer.skills || []).slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300"
                    >
                      {skill}
                    </span>
                  ))}

                  {(!freelancer.skills || freelancer.skills.length === 0) && (
                    <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-400">
                      Skills not added
                    </span>
                  )}
                </div>

                <p className="mt-5 line-clamp-2 text-sm leading-6 text-slate-400">
                  {freelancer.bio || "No bio added yet."}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TopFreelancers;
