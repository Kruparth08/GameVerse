import { Search } from "lucide-react";

const ExploreHeader = ({search, setSearch}) => {
  return (
    <section className="pb-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        {/* Left */}
        <div>
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            Explore
          </span>

          <h1 className="mt-5 text-5xl font-bold">
            Explore Games
          </h1>

          <p className="mt-4 max-w-2xl text-gray-400">
            Discover thousands of games across every genre,
            platform, and community.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full max-w-md">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search games..."
            className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-12 pr-5 outline-none transition focus:border-cyan-400"
        />
        </div>
      </div>
    </section>
  );
};

export default ExploreHeader;