import { getFreelancerById } from "@/lib/api/freelancers";
import { ArrowLeft, StarFill } from "@gravity-ui/icons";
import Image from "next/image";
import Link from "next/link";

const FreelancerDetailsPage = async ({ params }) => {
  const { id } = await params;
  const freelancer = await getFreelancerById(id);

  return (
    <section className="min-h-screen bg-slate-950 py-16 text-white">
      <div className="container mx-auto max-w-5xl px-4">
        <Link
          href="/freelancers"
          className="mb-6 inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-cyan-500 hover:text-cyan-400"
        >
          <ArrowLeft className="size-4" />
          Back to Freelancers
        </Link>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 text-center">
            <Image
              src={freelancer.image || "/assets/default-avatar.png"}
              alt={freelancer.name || "Freelancer"}
              width={220}
              height={220}
              className="mx-auto h-32 w-32 rounded-full border-2 border-cyan-500/40 object-cover"
            />

            <h1 className="mt-5 text-2xl font-bold text-white">
              {freelancer.name || "Unnamed Freelancer"}
            </h1>

            <p className="mt-2 text-cyan-400">
              ${freelancer.hourlyRate || 0}/hr
            </p>

            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-300">
              <StarFill className="size-4 text-yellow-400" />
              <span>Rating will appear after reviews</span>
            </div>

            <p className="mt-4 break-all text-sm text-slate-400">
              {freelancer.email}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 lg:col-span-2">
            <h2 className="text-xl font-semibold text-white">About</h2>

            <p className="mt-3 leading-7 text-slate-400">
              {freelancer.bio || "This freelancer has not added a bio yet."}
            </p>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-white">Skills</h2>

              {freelancer.skills?.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {freelancer.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="mt-3 text-slate-400">No skills added yet.</p>
              )}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                <p className="text-sm text-slate-400">Completed Jobs</p>
                <h3 className="mt-2 text-2xl font-bold text-white">0</h3>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                <p className="text-sm text-slate-400">Average Rating</p>
                <h3 className="mt-2 text-2xl font-bold text-white">0.0</h3>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                <p className="text-sm text-slate-400">Hourly Rate</p>
                <h3 className="mt-2 text-2xl font-bold text-cyan-400">
                  ${freelancer.hourlyRate || 0}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreelancerDetailsPage;
