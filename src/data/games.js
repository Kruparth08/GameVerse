// import gameCover from "../assets/images/game-cover.png";
import game1 from "../assets/images/cyberstrike.jpg";
import game2 from "../assets/images/gta6.jpg";

const games = [
  {
    id: 1,
    title: "Cyber Strike",
    description: "Fast-paced futuristic FPS.",
    image: game1,

    rating: 4.8,
    players: "2.4M",

    genres: ["FPS", "Action"],

    platform: "PC",

    releaseDate: "2025",

    developer: "Nova Studios",

    price: "Free",

    featured: true,
  },

  {
    id: 2,
    title: "Grand Theft Auto VI",
    description: "Epic fantasy RPG adventure.",
    image: game2,

    rating: 4.7,
    players: "1.9M",

    genres: ["RPG"],

    platform: "PC",

    releaseDate: "2024",

    developer: "Dream Forge",

    price: "$39.99",

    featured: false,
  },

  // Continue with at least 8–12 games
];


export default games;