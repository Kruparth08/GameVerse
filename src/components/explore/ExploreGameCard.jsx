import { Star, Users, Monitor, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ExploreGameCard = ({ game }) => {
  return (
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={game.image}
          alt={game.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020] via-transparent to-transparent" />

        {game.featured && (
          <span className="absolute left-4 top-4 rounded-full bg-cyan-400 px-3 py-1 text-xs font-bold text-black">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between">
          <h3 className="text-2xl font-bold">{game.title}</h3>

          <div className="flex items-center gap-1 text-yellow-400">
            <Star size={18} fill="currentColor" />
            <span>{game.rating}</span>
          </div>
        </div>

        <p className="mt-3 line-clamp-2 text-gray-400">
          {game.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {game.genres.map((genre) => (
            <span
              key={genre}
              className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300"
            >
              {genre}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Users size={16} />
            {game.players}
          </div>

          <div className="flex items-center gap-2">
            <Monitor size={16} />
            {game.platform}
          </div>
        </div>

        <Link
          to={`/games/${game.id}`}
          className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-cyan-400 py-3 font-semibold text-black transition hover:bg-cyan-300"
        >
          View Details
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
};

export default ExploreGameCard;