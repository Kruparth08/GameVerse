import { Calendar, Trophy, Users } from "lucide-react";

const tournaments = [
  {
    id: 1,
    title: "Valor Strike Championship",
    date: "Aug 15, 2026",
    prize: "$100,000",
    teams: "128 Teams",
    status: "Live",
  },
  {
    id: 2,
    title: "Battle Royale Masters",
    date: "Aug 22, 2026",
    prize: "$50,000",
    teams: "64 Teams",
    status: "Open",
  },
  {
    id: 3,
    title: "Cyber Arena Cup",
    date: "Sep 02, 2026",
    prize: "$75,000",
    teams: "96 Teams",
    status: "Registration",
  },
];

const statusStyles = {
  Live: "bg-red-500/20 text-red-400",
  Open: "bg-green-500/20 text-green-400",
  Registration: "bg-cyan-500/20 text-cyan-400",
};

const LiveTournaments = () => {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            Tournaments
          </span>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Live & Upcoming Tournaments
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Compete with players around the world and win exciting prizes.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {tournaments.map((tournament) => (
            <div
              key={tournament.id}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30"
            >
              <div className="mb-5 flex items-center justify-between">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[tournament.status]}`}
                >
                  {tournament.status}
                </span>

                <Trophy className="text-cyan-400" size={24} />
              </div>

              <h3 className="text-2xl font-bold">
                {tournament.title}
              </h3>

              <div className="mt-6 space-y-3 text-gray-300">
                <div className="flex items-center gap-3">
                  <Calendar size={18} />
                  <span>{tournament.date}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Users size={18} />
                  <span>{tournament.teams}</span>
                </div>

                <div className="text-xl font-bold text-cyan-400">
                  Prize Pool: {tournament.prize}
                </div>
              </div>

              <button className="mt-8 w-full rounded-xl bg-cyan-400 py-3 font-semibold text-black transition hover:bg-cyan-300">
                Register Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveTournaments;