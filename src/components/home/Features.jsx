import { Gamepad2, Trophy, Users, Sparkles } from "lucide-react";
import SectionHeader from "../common/SectionHeader";



const features = [
  {
    icon: Gamepad2,
    title: "Discover Games",
    description:
      "Browse thousands of games with personalized recommendations.",
  },
  {
    icon: Trophy,
    title: "Join Tournaments",
    description:
      "Compete in exciting tournaments and climb the leaderboard.",
  },
  {
    icon: Users,
    title: "Gaming Community",
    description:
      "Connect with friends, creators, and gaming communities.",
  },
  {
    icon: Sparkles,
    title: "AI Recommendations",
    description:
      "Find your next favorite game using smart recommendations.",
  },
];

const Features = () => {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
            badge="Features"
            title="Everything Gamers Need"
            description="GameVerse brings together games, tournaments, creators, and communities in one powerful platform."
            />

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-cyan-400/30 hover:-translate-y-2"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-cyan-400/10 p-4">
                  <Icon className="text-cyan-400" size={28} />
                </div>

                <h3 className="text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-gray-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;