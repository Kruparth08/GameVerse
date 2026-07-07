import GameShowcaseCard from "./GameShowcaseCard";
import games from "../../data/games";

const TrendingGames = () => {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            Trending
          </span>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Trending Games
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Explore the hottest games played by millions of gamers around the
            world.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {games.map((game) => (
            <GameShowcaseCard
              key={game.id}
              title={game.title}
              description={game.description}
              rating={game.rating}
              players={game.players}
              genres={game.genres}
              image={game.image}
              featured={game.featured}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <button className="rounded-xl border border-cyan-400/20 bg-white/5 px-8 py-4 font-semibold transition hover:bg-cyan-400 hover:text-black">
            View All Games
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingGames;