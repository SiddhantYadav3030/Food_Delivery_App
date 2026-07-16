export const MENU = {
  Antipasti: [
    {
      id: "a1",
      name: "Burrata al Forno",
      desc: "Charred burrata, blistered tomatoes, basil oil",
      price: 12,
      icon: "🧀",
    },
    {
      id: "a2",
      name: "Arancini Trio",
      desc: "Saffron risotto balls, San Marzano dip",
      price: 9,
      icon: "🍚",
    },
    {
      id: "a3",
      name: "Bruschetta Classica",
      desc: "Heirloom tomato, garlic, aged EVOO",
      price: 8,
      icon: "🍅",
    },
  ],

  Pizza: [
    {
      id: "p1",
      name: "Margherita DOP",
      desc: "San Marzano, fior di latte, basil",
      price: 16,
      icon: "🍕",
    },
    {
      id: "p2",
      name: "Diavola",
      desc: "Spicy soppressata, chili honey",
      price: 18,
      icon: "🌶️",
    },
    {
      id: "p3",
      name: "Funghi e Tartufo",
      desc: "Wild mushroom, truffle cream, taleggio",
      price: 19,
      icon: "🍄",
    },
    {
      id: "p4",
      name: "Ortolana",
      desc: "Charred zucchini, peppers, eggplant, ricotta",
      price: 17,
      icon: "🍆",
    },
  ],

  Pasta: [
    {
      id: "s1",
      name: "Cacio e Pepe",
      desc: "Tonnarelli, pecorino, cracked pepper",
      price: 15,
      icon: "🍝",
    },
    {
      id: "s2",
      name: "Ragu della Casa",
      desc: "Slow-braised short rib, pappardelle",
      price: 19,
      icon: "🥘",
    },
    {
      id: "s3",
      name: "Vongole",
      desc: "Linguine, clams, white wine, chili",
      price: 18,
      icon: "🦪",
    },
  ],

  Dolci: [
    {
      id: "d1",
      name: "Tiramisu al Forno",
      desc: "Espresso-soaked, mascarpone",
      price: 8,
      icon: "🍮",
    },
    {
      id: "d2",
      name: "Budino di Cioccolato",
      desc: "Warm chocolate pudding cake",
      price: 9,
      icon: "🍫",
    },
  ],

  Bevande: [
    {
      id: "b1",
      name: "Chinotto",
      desc: "Italian bitter soda",
      price: 4,
      icon: "🥤",
    },
    {
      id: "b2",
      name: "Limonata",
      desc: "House-made lemonade",
      price: 4,
      icon: "🍋",
    },
    {
      id: "b3",
      name: "San Pellegrino",
      desc: "Sparkling water",
      price: 3,
      icon: "💧",
    },
  ],
};

export const CATEGORIES = Object.keys(MENU);
export const ORDER_SECONDS = 26 * 60;