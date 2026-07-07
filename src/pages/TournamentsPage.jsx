import { useState } from "react";
import tournaments from "../data/tournaments";
import TournamentCard from "../components/tournaments/TournamentCard";

const TournamentsPage = () => {
  const [filter, setFilter] = useState("All");

  const filteredTournaments =
    filter === "All"
      ? tournaments
      : tournaments.filter((t) => t.status === filter);

  const filters = ["All", "Live", "Upcoming", "Completed"];

  return (
    <main className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <h1 className="text-5xl font-bold">
          Tournaments
        </h1>

        <p className="mt-4 max-w-2xl text-gray-400">
          Compete in global gaming tournaments and win rewards.
        </p>

        {/* FILTERS */}
        <div className="mt-10 flex flex-wrap gap-3">
          {filters.map((f) => {
            const active = filter === f;

            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  active
                    ? "border-cyan-400 bg-cyan-400 text-black"
                    : "border-white/10 bg-white/5 text-gray-300 hover:border-cyan-400/40"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* GRID */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTournaments.map((tournament) => (
            <TournamentCard
              key={tournament.id}
              tournament={tournament}
            />
          ))}
        </div>

      </div>
    </main>
  );
};

export default TournamentsPage;