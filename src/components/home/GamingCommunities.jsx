import SectionHeader from "../common/SectionHeader";
import { Users, ArrowRight } from "lucide-react";

const communities = [
  {
    id: 1,
    name: "FPS Legends",
    members: "245K",
    description: "Join competitive FPS players, tournaments, and strategy discussions.",
    featured: true,
  },
  {
    id: 2,
    name: "RPG World",
    members: "180K",
  },
  {
    id: 3,
    name: "Battle Royale Hub",
    members: "312K",
  },
  {
    id: 4,
    name: "Indie Gamers",
    members: "96K",
  },
];

const GamingCommunities = () => {
  const featured = communities.find((c) => c.featured);
  const others = communities.filter((c) => !c.featured);

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge="Communities"
          title="Find Your Gaming Squad"
          description="Join communities, share strategies, discover teammates, and connect with players worldwide."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Featured */}
          <div className="rounded-3xl border border-cyan-400/20 bg-white/5 p-8 backdrop-blur-xl lg:col-span-2">
            <h3 className="text-3xl font-bold">{featured.name}</h3>

            <div className="mt-4 flex items-center gap-2 text-cyan-400">
              <Users size={20} />
              <span>{featured.members} Members</span>
            </div>

            <p className="mt-6 text-gray-400">
              {featured.description}
            </p>

            <button className="mt-8 flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300">
              Join Community
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Others */}
          <div className="space-y-4">
            {others.map((community) => (
              <div
                key={community.id}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-400/30"
              >
                <h4 className="font-semibold">{community.name}</h4>

                <p className="mt-2 text-sm text-gray-400">
                  {community.members} Members
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamingCommunities;