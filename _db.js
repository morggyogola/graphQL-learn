let games = [
  {
    id: 1,
    title: "The Witcher 3: Wild Hunt",
    platforms: ["PC", "PlayStation", "Xbox"],
  },
  {
    id: 2,
    title: "Animal Crossing: New Horizons",
    platforms: ["Nintendo Switch"],
  },
  {
    id: 3,
    title: "FIFA 21",
    platforms: ["PlayStation", "Xbox", "PC"],
  },
  {
    id: 4,
    title: "Assassin's Creed Odyssey",
    platforms: ["PC", "PlayStation", "Xbox"],
  },
  {
    id: 5,
    title: "The Legend of Zelda: Breath of the Wild",
    platforms: ["Nintendo Switch"],
  },
  {
    id: 6,
    title: "Red Dead Redemption 2",
    platforms: ["PlayStation", "Xbox", "PC"],
  },
  {
    id: 7,
    title: "Super Mario Odyssey",
    platforms: ["Nintendo Switch"],
  },
];
let authors = [
  {
    id: 1,
    name: "Jane Doe",
    verified: true,
  },
  {
    id: 2,
    name: "John Smith",
    verified: false,
  },
  {
    id: 3,
    name: "Alice Johnson",
    verified: true,
  },
  {
    id: 4,
    name: "Bob Williams",
    verified: false,
  },
  {
    id: 5,
    name: "Eva Davis",
    verified: true,
  },
  {
    id: 6,
    name: "Michael Brown",
    verified: false,
  },
  {
    id: 7,
    name: "Sophia Miller",
    verified: true,
  },
];
let reviews = [
  {
    id: 1,
    rating: 4.5,
    content: "A fantastic game with great graphics and storyline!",
    author_id: 1,
    game_id: 1,
  },
  {
    id: 2,
    rating: 3.2,
    content: "Enjoyed playing, but there are some bugs that need fixing.",
    author_id: 2,
    game_id: 3,
  },
  {
    id: 3,
    rating: 5.0,
    content: "Absolutely loved it! Must-play for all gamers.",
    author_id: 3,
    game_id: 5,
  },
  {
    id: 4,
    rating: 2.8,
    content: "Disappointing. The game did not live up to the hype.",
    author_id: 4,
    game_id: 2,
  },
  {
    id: 5,
    rating: 4.7,
    content: "Solid gameplay and engaging storyline. Highly recommend.",
    author_id: 5,
    game_id: 4,
  },
  {
    id: 6,
    rating: 3.5,
    content: "Decent game, but could use more variety in missions.",
    author_id: 6,
    game_id: 6,
  },
  {
    id: 7,
    rating: 4.0,
    content: "Fun and challenging. Worth the purchase.",
    author_id: 7,
    game_id: 7,
  },
];
export default { games, authors, reviews };
