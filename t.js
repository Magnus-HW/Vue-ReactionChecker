let sc = [
  {
    id: 0,
    playerName: "Magnus",
    country: "Finland",
    score: 0.21,
  },
  {
    id: 1,
    playerName: "Kraken",
    country: "US",
    score: 0.32,
  },
  {
    id: 2,
    playerName: "Gordon",
    country: "UK",
    score: 0.43,
  },
  {
    id: 3,
    playerName: "Termit",
    country: "Africa",
    score: 0.54,
  },
  {
    id: 4,
    playerName: "Croko",
    country: "Australia",
    score: 0.001,
  },
];
console.log(sc.sort((a, b) => a.score - b.score));
