import { getFreelancers } from "@/lib/api/freelancers";
import Image from "next/image";
import Link from "next/link";

const TopFreelancers = async () => {
  const freelancers = await getFreelancers();

  const topFreelancers = freelancers.slice(0, 6);

  return (
    <section className="bg-slate-900 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold text-cyan-400">Top Talent</p>

          <h2 className="text-3xl font-bold text-white">Top Freelancers</h2>
        </div>

        {topFreelancers.length === 0 ? (
          <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8 text-center">
            <h3 className="text-xl font-semibold text-white">
              No freelancers found
            </h3>

            <p className="mt-2 text-slate-400">Freelancers will appear here.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {topFreelancers.map((freelancer) => (
              <Link
                key={freelancer._id}
                href="/freelancers"
                className="rounded-2xl border border-slate-800 bg-slate-950 p-6 text-center transition hover:border-cyan-500/50"
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
                  {freelancer.name}
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  {freelancer.location || "Remote Freelancer"}
                </p>

                <div className="mt-4">
                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
                    {freelancer.role}
                  </span>
                </div>

                <p className="mt-4 text-slate-400">
                  {freelancer.location || "Remote"}
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
