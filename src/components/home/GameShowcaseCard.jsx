import { motion } from "framer-motion";
import { Play, Star, Users } from "lucide-react";
import gameCover from "../../assets/images/game-cover.png";


const GameShowcaseCard = ({
  title = "",
  description = "",
  rating = 0,
  players = "",
  genres = [],
  image = gameCover,
  featured = false,
}) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        rotateX: 5,
        rotateY: -5,
      }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-md overflow-hidden rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020] via-transparent to-transparent" />

        {featured && (
          <div className="absolute left-4 top-4 rounded-full bg-cyan-400 px-3 py-1 text-xs font-bold text-black">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold">{title}</h3>

          <div className="flex items-center gap-1 text-yellow-400">
            <Star size={18} fill="currentColor" />
            <span>{rating}</span>
          </div>
        </div>

        <p className="mt-3 text-gray-400">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {genres.map((genre) => (
            <span
              key={genre}
              className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300"
            >
              {genre}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-300">
            <Users size={18} />
            <span>{players} Players</span>
          </div>

          <button className="flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-2 font-semibold text-black transition hover:bg-cyan-300">
            <Play size={18} />
            Play
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default GameShowcaseCard;