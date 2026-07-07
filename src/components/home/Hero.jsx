import { motion } from "framer-motion";
import { Trophy, Gamepad2, Users } from "lucide-react";
import HeroBackground from "./HeroBackground";
import GameShowcaseCard from "./GameShowcaseCard";
import FloatingBadges from "./FloatingBadges";
import {useNavigate} from "react-router-dom";

const stats = [
  {
    icon: Users,
    value: "2.5M+",
    label: "Players",
  },
  {
    icon: Gamepad2,
    value: "8K+",
    label: "Games",
  },
  {
    icon: Trophy,
    value: "1200+",
    label: "Tournaments",
  },
];

const Hero = () => {

  const navigate = useNavigate()

  return (
    <section className="relative overflow-hidden px-6 py-20 md:py-28">
      {/* Background Glow */}
      <HeroBackground />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            🚀 Frontend Battle 2026
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
            Level Up Your
            <br />
            <span className="text-cyan-400">
              Gaming Experience
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
            Discover trending games, compete in tournaments,
            connect with creators, and become part of the
            biggest gaming community.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
          <button
      onClick={() => navigate("/explore")}
      className="rounded-xl bg-cyan-400 px-8 py-4 font-semibold text-black transition hover:scale-105"
    >
      Explore Games
    </button>

    <button
      onClick={() => navigate("/tournaments")}
      className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold backdrop-blur hover:bg-white/10"
    >
      Join Tournament
    </button>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex w-full max-w-md justify-center"
            >
            <FloatingBadges />
            <GameShowcaseCard />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;