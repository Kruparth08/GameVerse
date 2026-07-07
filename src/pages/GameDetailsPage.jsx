import { useParams } from "react-router-dom";
import games from "../data/games";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const GameDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const game = games.find((g) => g.id === Number(id));

  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Game not found
      </div>
    );
  }

  return (
    <main className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <button
  onClick={() => navigate("/explore")}
  className="mb-8 flex items-center gap-2 text-gray-400 transition hover:text-cyan-400"
>
  <ArrowLeft size={18} />
  Back to Explore
</button>
        
        {/* HERO */}
        <div className="relative h-[400px] overflow-hidden rounded-3xl">
          <img
            src={game.image}
            alt={game.title}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020] via-transparent" />
        </div>

        {/* INFO */}
        <div className="mt-10 grid gap-10 lg:grid-cols-3">
  
  {/* LEFT CONTENT */}
  <div className="lg:col-span-2">
    <h1 className="text-5xl font-bold">{game.title}</h1>

    <p className="mt-4 text-gray-400 leading-relaxed">
      {game.description}
    </p>

    {/* GENRES */}
    <div className="mt-6 flex flex-wrap gap-3">
      {game.genres.map((g) => (
        <span
          key={g}
          className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300"
        >
          {g}
        </span>
      ))}
    </div>

    {/* CTA */}
    <button className="mt-8 flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300">
      🎮 Play Now
    </button>
  </div>

  {/* RIGHT SIDEBAR */}
  <div className="space-y-5">
    
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="text-gray-400 text-sm">Rating</p>
      <p className="text-2xl font-bold text-cyan-400">
        ⭐ {game.rating}
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="text-gray-400 text-sm">Players</p>
      <p className="text-2xl font-bold">
        {game.players}
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="text-gray-400 text-sm">Platform</p>
      <p className="text-2xl font-bold">
        {game.platform}
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="text-gray-400 text-sm">Developer</p>
      <p className="text-lg font-semibold">
        {game.developer}
      </p>
    </div>

  </div>
</div>
    </div>

    {/* MEDIA SECTION */}
<div className="mt-16">
  <h2 className="text-2xl font-bold">Game Media</h2>

  {/* TRAILER */}
  <div className="mt-6 aspect-video w-full overflow-hidden rounded-3xl border border-white/10 bg-black">
    <div className="flex h-full items-center justify-center text-gray-500">
      🎬 Trailer Coming Soon
    </div>
  </div>

  {/* SCREENSHOTS */}
  <div className="mt-10">
    <h3 className="text-xl font-semibold text-gray-300">
      Screenshots
    </h3>

    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div
          key={item}
          className="group overflow-hidden rounded-2xl border border-white/10"
        >
          <div className="h-40 bg-white/5 transition duration-300 group-hover:scale-105 group-hover:bg-white/10" />
        </div>
      ))}

    </div>
  </div>
</div>
{/* RELATED GAMES */}
<div className="mt-20">
  <h2 className="text-2xl font-bold">
    Related Games
  </h2>

  <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {games
      .filter((g) => g.id !== game.id)
      .slice(0, 3)
      .map((g) => (
        <Link
          key={g.id}
          to={`/games/${g.id}`}
          className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-cyan-400/40"
        >
          <div className="h-40 overflow-hidden">
            <img
              src={g.image}
              className="h-full w-full object-cover transition group-hover:scale-110"
            />
          </div>

          <div className="p-4">
            <h3 className="font-semibold">
              {g.title}
            </h3>
            <p className="text-sm text-gray-400">
              {g.platform}
            </p>
          </div>
        </Link>
      ))}
  </div>
</div>
    </main>
    
  );
};

export default GameDetailsPage;