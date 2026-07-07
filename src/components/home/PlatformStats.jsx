import { Gamepad2, Trophy, Users, Globe } from "lucide-react";
import SectionHeader from "../common/SectionHeader";

const stats = [
  {
    id: 1,
    icon: Users,
    value: "2.5M+",
    label: "Active Players",
  },
  {
    id: 2,
    icon: Gamepad2,
    value: "5,000+",
    label: "Games Available",
  },
  {
    id: 3,
    icon: Trophy,
    value: "850+",
    label: "Tournaments Hosted",
  },
  {
    id: 4,
    icon: Globe,
    value: "120+",
    label: "Countries",
  },
];

const PlatformStats = () => {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge="Platform Stats"
          title="Trusted by Millions of Gamers"
          description="A growing gaming ecosystem connecting players, creators, and communities worldwide."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.id}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10">
                  <Icon size={30} className="text-cyan-400" />
                </div>

                <h3 className="text-4xl font-bold text-cyan-400">
                  {stat.value}
                </h3>

                <p className="mt-3 text-gray-400">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlatformStats;