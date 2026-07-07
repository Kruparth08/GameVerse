import { Users, Trophy, Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";


const TournamentCard = ({ tournament }) => {
  const progress =
    (tournament.participants / tournament.maxParticipants) * 100;

  const statusColor = {
    Live: "text-green-400 border-green-400/30 bg-green-400/10",
    Upcoming: "text-yellow-400 border-yellow-400/30 bg-yellow-400/10",
    Completed: "text-gray-400 border-gray-400/30 bg-gray-400/10",
  };

  return (
    <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-400/40">

      {/* STATUS */}
      <div className="flex items-center justify-between">
        <span
          className={`rounded-full border px-3 py-1 text-xs font-semibold ${
            statusColor[tournament.status]
          }`}
        >
          {tournament.status}
        </span>

        <span className="text-sm text-gray-400">
          {tournament.mode}
        </span>
      </div>

      {/* TITLE */}
      <h3 className="mt-4 text-xl font-bold">
        {tournament.title}
      </h3>

      {/* GAME */}
      <div className="mt-2 flex items-center gap-2 text-gray-400">
        <Gamepad2 size={16} />
        {tournament.game}
      </div>

      {/* PRIZE */}
      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center gap-2 text-cyan-400 font-semibold">
          <Trophy size={18} />
          {tournament.prizePool}
        </div>

        <div className="text-sm text-gray-400">
          {tournament.entryFee}
        </div>
      </div>

      {/* PROGRESS */}
      <div className="mt-6">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>Participants</span>
          <span>
            {tournament.participants} / {tournament.maxParticipants}
          </span>
        </div>

        <div className="mt-2 h-2 w-full rounded-full bg-white/10">
          <div
            className="h-2 rounded-full bg-cyan-400 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* CTA */}
      <Link
  to={`/tournaments/${tournament.id}`}
  className="mt-6 block w-full rounded-xl bg-cyan-400 py-3 text-center font-semibold text-black transition hover:bg-cyan-300"
>
  View Details
</Link>
    </div>
  );
};

export default TournamentCard;