import SectionHeader from "../common/SectionHeader";
import StreamerCard from "./StreamerCard";
import streamers from "../../data/streamers";

const TopStreamers = () => {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge="Top Streamers"
          title="Watch Your Favorite Creators"
          description="Discover popular creators, watch live gameplay, and join their growing communities."
        />

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {streamers.map((streamer) => (
            <StreamerCard
              key={streamer.id}
              banner={streamer.banner}
              avatar={streamer.avatar}
              name={streamer.name}
              category={streamer.category}
              followers={streamer.followers}
              live={streamer.live}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopStreamers;