import Hero from "../components/home/Hero";
import TrendingGames from "../components/home/TrendingGames";
import Features from "../components/home/Features";
import LiveTournaments from "../components/home/LiveTournaments";
import TopStreamers from "../components/home/TopStreamers";
import PlatformStats from "../components/home/PlatformStats";
import GamingCommunities from "../components/home/GamingCommunities";
import CTA from "../components/home/CTA";



const HomePage = () => {
  return (
    <>
      <Hero />
      <TrendingGames />
      <Features />
      <LiveTournaments />
      <TopStreamers />
      <PlatformStats />
      <GamingCommunities />
      <CTA />
    </>
  );
};

export default HomePage;