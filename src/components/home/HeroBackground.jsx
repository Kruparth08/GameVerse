import { motion } from "framer-motion";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Left Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute top-20 -left-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]"
      />

      {/* Right Glow */}
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute bottom-0 -right-32 h-96 w-96 rounded-full bg-purple-600/20 blur-[140px]"
      />

      {/* Top Glow */}
      <motion.div
        animate={{
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-pink-500/10 blur-[120px]"
      />
    </div>
  );
};

export default HeroBackground;