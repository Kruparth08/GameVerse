import { useParams } from "react-router-dom";
import tournaments from "../data/tournaments";
import { Trophy, Users, Gamepad2 } from "lucide-react";
import { useState } from "react";


const TournamentDetailsPage = () => {
  const { id } = useParams();
  const [joined, setJoined] = useState(false);

  const tournament = tournaments.find(
    (t) => t.id === Number(id)
  );

  if (!tournament) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Tournament not found
      </div>
    );
  }

  const progress =
    (tournament.participants / tournament.maxParticipants) * 100;

  return (
    <main className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-5xl">

        {/* HEADER */}
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
            {tournament.status}
          </span>

          <span className="text-gray-400">
            {tournament.mode}
          </span>
        </div>

        {/* TITLE */}
        <h1 className="mt-6 text-5xl font-bold">
          {tournament.title}
        </h1>

        {/* GAME */}
        <div className="mt-3 flex items-center gap-2 text-gray-400">
          <Gamepad2 size={18} />
          {tournament.game}
        </div>

        {/* GRID INFO */}
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-gray-400 text-sm">Prize Pool</p>
            <p className="text-2xl font-bold text-cyan-400 flex items-center gap-2">
              <Trophy size={18} />
              {tournament.prizePool}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-gray-400 text-sm">Entry Fee</p>
            <p className="text-2xl font-bold">
              {tournament.entryFee}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-gray-400 text-sm">Players</p>
            <p className="text-2xl font-bold flex items-center gap-2">
              <Users size={18} />
              {tournament.participants}/{tournament.maxParticipants}
            </p>
          </div>

        </div>

        {/* PROGRESS */}
        <div className="mt-10">
          <div className="flex justify-between text-sm text-gray-400">
            <span>Registration Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>

          <div className="mt-2 h-3 w-full rounded-full bg-white/10">
            <div
              className="h-3 rounded-full bg-cyan-400"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="mt-10 text-gray-400">
          <p>
            Join this tournament and compete with players globally.
            Show your skills and climb the leaderboard to win rewards.
          </p>
        </div>

        {/* CTA */}
        <button
  onClick={() => setJoined(true)}
  disabled={joined}
  className={`mt-10 w-full rounded-xl py-4 font-semibold transition ${
    joined
      ? "bg-green-500 text-black cursor-not-allowed"
      : "bg-cyan-400 text-black hover:bg-cyan-300"
  }`}
>
  {joined ? "Already Joined ✔" : "Join Tournament"}
</button>

      </div>
    </main>
  );
};

export default TournamentDetailsPage;