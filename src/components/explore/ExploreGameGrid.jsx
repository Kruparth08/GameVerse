import games from "../../data/games";
import ExploreGameCard from "./ExploreGameCard";

const ExploreGameGrid = ({
  searchQuery = "",
  selectedGenres = [],
  selectedPlatform = "",
  sortBy = "rating",
}) => {

  // 1. FILTER
  let filteredGames = games.filter((game) => {
    const matchesSearch = game.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesGenre =
      selectedGenres.length === 0 ||
      selectedGenres.some((genre) =>
        game.genres.includes(genre)
      );

    const matchesPlatform =
      !selectedPlatform || game.platform === selectedPlatform;

    return matchesSearch && matchesGenre && matchesPlatform;
  });

  // 2. SORT (👉 ADD YOUR CODE HERE)
  filteredGames = [...filteredGames].sort((a, b) => {
    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    if (sortBy === "popularity") {
      return (
        parseFloat(b.players) - parseFloat(a.players)
      );
    }

    if (sortBy === "newest") {
      return b.releaseDate - a.releaseDate;
    }

    return 0;
  });

  // 3. EMPTY STATE
  if (filteredGames.length === 0) {
    return (
      <div className="mt-10 text-center text-gray-400">
        No games found.
      </div>
    );
  }

  // 4. RENDER GRID
  return (
    <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {filteredGames.map((game) => (
        <ExploreGameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default ExploreGameGrid;