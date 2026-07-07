import { User, Trophy, Gamepad2 } from "lucide-react";

const ProfilePage = () => {
  const user = {
    name: "Player One",
    level: 12,
    gamesPlayed: 24,
    tournamentsJoined: 5,
    wins: 3,
  };

  return (
    <main className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-5xl">

        {/* HEADER */}
        <div className="flex items-center gap-6">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-cyan-400 text-black text-2xl font-bold">
            {user.name[0]}
          </div>

          <div>
            <h1 className="text-4xl font-bold">
              {user.name}
            </h1>

            <p className="text-gray-400">
              Level {user.level} Gamer
            </p>
          </div>
        </div>

        {/* STATS */}
        <div className="mt-10 grid gap-6 sm:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <Gamepad2 className="text-cyan-400" />
            <p className="mt-3 text-gray-400">Games Played</p>
            <p className="text-3xl font-bold">
              {user.gamesPlayed}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <Trophy className="text-yellow-400" />
            <p className="mt-3 text-gray-400">
              Tournaments Joined
            </p>
            <p className="text-3xl font-bold">
              {user.tournamentsJoined}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <User className="text-green-400" />
            <p className="mt-3 text-gray-400">Wins</p>
            <p className="text-3xl font-bold">
              {user.wins}
            </p>
          </div>

        </div>

        {/* ACTIVITY SECTION */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold">
            Recent Activity
          </h2>

          <div className="mt-6 space-y-4 text-gray-400">
            <p>✔ Joined Cyber Strike Championship</p>
            <p>✔ Played Shadow Arena</p>
            <p>✔ Won Battle Royale Open</p>
          </div>
        </div>

      </div>
    </main>
  );
};

export default ProfilePage;