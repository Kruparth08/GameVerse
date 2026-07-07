import { useState } from "react";
import ExploreHeader from "../components/explore/ExploreHeader";
import ExploreGameGrid from "../components/explore/ExploreGameGrid";

const allGenres = ["FPS", "RPG", "Racing", "Action", "Sports", "Simulation"];
const allPlatforms = ["PC", "PlayStation", "Xbox", "Switch"];


const ExploreGamesPage = () => {
  const [search, setSearch] = useState("");
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [sortBy, setSortBy] = useState("rating");

  const toggleGenre = (genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre)
        ? prev.filter((g) => g !== genre)
        : [...prev, genre]
    );
  };

  const resetFilters = () => {
  setSearch("");
  setSelectedGenres([]);
  setSelectedPlatform("");
  setSortBy("rating");
};

  return (
    <main className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <ExploreHeader search={search} setSearch={setSearch} />

        {/* GENRES */}
        <div className="mt-8 flex flex-wrap gap-3">
          {allGenres.map((genre) => {
            const active = selectedGenres.includes(genre);

            return (
              <button
                key={genre}
                onClick={() => toggleGenre(genre)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  active
                    ? "border-cyan-400 bg-cyan-400 text-black"
                    : "border-white/10 bg-white/5 text-gray-300 hover:border-cyan-400/40"
                }`}
              >
                {genre}
              </button>
            );
          })}
        </div>

        {/* PLATFORM FILTER */}
        <div className="mt-6 flex flex-wrap gap-3">
          {allPlatforms.map((platform) => {
            const active = selectedPlatform === platform;

            return (
              <button
                key={platform}
                onClick={() =>
                  setSelectedPlatform(
                    active ? "" : platform
                  )
                }
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  active
                    ? "border-cyan-400 bg-cyan-400 text-black"
                    : "border-white/10 bg-white/5 text-gray-300 hover:border-cyan-400/40"
                }`}
              >
                {platform}
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex items-center justify-between">
  <p className="text-sm text-gray-400">
    {selectedGenres.length +
      (selectedPlatform ? 1 : 0) +
      (search ? 1 : 0) >
    0
      ? "Filters applied"
      : "Showing all games"}
  </p>

  <button
    onClick={resetFilters}
    className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition hover:border-cyan-400/40"
  >
    Reset Filters
  </button>
</div>

        {/* SORT */}
<div className="mt-6 flex items-center gap-3">
  <span className="text-sm text-gray-400">Sort by:</span>

  <select
    value={sortBy}
    onChange={(e) => setSortBy(e.target.value)}
    className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white outline-none"
  >
    <option value="rating">Rating</option>
    <option value="popularity">Popularity</option>
    <option value="newest">Newest</option>
  </select>
</div>

{/* ACTIVE FILTERS */}
{(selectedGenres.length > 0 || selectedPlatform || search) && (
  <div className="mt-6 flex flex-wrap gap-3">
    {search && (
      <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
        Search: {search}
      </span>
    )}

    {selectedGenres.map((genre) => (
      <span
        key={genre}
        className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300"
      >
        {genre}
      </span>
    ))}

    {selectedPlatform && (
      <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
        Platform: {selectedPlatform}
      </span>
    )}
  </div>
)}

        <ExploreGameGrid
            searchQuery={search}
            selectedGenres={selectedGenres}
            selectedPlatform={selectedPlatform}
            sortBy={sortBy}
        />
      </div>
    </main>
  );
};

export default ExploreGamesPage;