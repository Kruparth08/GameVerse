import banner from "../assets/images/game-cover.png";
import a1 from "../assets/images/avatar/avatar_1.jpg";
import a2 from "../assets/images/avatar/avatar_2.jpg";
import a3 from "../assets/images/avatar/avatar_3.jpg";
import a4 from "../assets/images/avatar/avatar_4.jpg";

const streamers = [
  {
    id: 1,
    name: "ShadowX",
    category: "FPS • Valor Strike",
    followers: "2.4M",
    live: true,
    banner,
    avatar: a1,
  },
  {
    id: 2,
    name: "NovaGirl",
    category: "Battle Royale",
    followers: "1.8M",
    live: false,
    banner,
    avatar: a4,
  },
  {
    id: 3,
    name: "PixelKing",
    category: "Strategy",
    followers: "965K",
    live: true,
    banner,
    avatar: a3,
  },
  {
    id: 4,
    name: "CyberAce",
    category: "Racing",
    followers: "1.2M",
    live: false,
    banner,
    avatar: a2,
  },
];

export default streamers;