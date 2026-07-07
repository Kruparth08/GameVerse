import { motion } from "framer-motion";
import { Trophy, Users, Zap } from "lucide-react";

const badges = [
  {
    icon: Users,
    text: "2.5M Live",
    className: "top-6 -left-10",
    delay: 0,
  },
  {
    icon: Trophy,
    text: "$500K Cup",
    className: "top-1/2 -right-12",
    delay: 0.3,
  },
  {
    icon: Zap,
    text: "XP Boost",
    className: "bottom-6 left-8",
    delay: 0.6,
  },
];

const FloatingBadges = () => {
  return (
    <>
      {badges.map((badge) => {
        const Icon = badge.icon;

        return (
          <motion.div
            key={badge.text}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: badge.delay,
            }}
            className={`absolute z-30 ${badge.className} hidden lg:flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl`}
          >
            <Icon size={18} className="text-cyan-400" />
            <span className="text-sm font-medium whitespace-nowrap">
              {badge.text}
            </span>
          </motion.div>
        );
      })}
    </>
  );
};

export default FloatingBadges;