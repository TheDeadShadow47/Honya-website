/**
 * Honya's 15 built-in themes.
 * Colors are representative swatches used for the website's theme showcase —
 * not a pixel-exact export of the app's theme engine.
 */
export type Theme = {
  name: string;
  description: string;
  background: string;
  surface: string;
  accent: string;
  /** Text tone for previewing on top of `background`/`surface`. */
  ink: string;
  featured?: boolean;
};

export const THEMES: Theme[] = [
  {
    name: "Honya Sakura",
    description: "Pure black with the signature sakura pink accent.",
    background: "#000000",
    surface: "#1a1216",
    accent: "#ed8db0",
    ink: "#fff8f3",
    featured: true,
  },
  {
    name: "Blossom",
    description: "A soft, light rose theme.",
    background: "#fdf3f5",
    surface: "#f6e3e9",
    accent: "#d98ba5",
    ink: "#3a2630",
  },
  {
    name: "Forest",
    description: "Deep, earthy green.",
    background: "#0e1912",
    surface: "#16261c",
    accent: "#4c9a6b",
    ink: "#eef5ef",
  },
  {
    name: "Onyx",
    description: "True OLED black.",
    background: "#000000",
    surface: "#0a0a0a",
    accent: "#e5e5e5",
    ink: "#f2f2f2",
  },
  {
    name: "Daylight",
    description: "Clean light theme with lavender accents.",
    background: "#faf9fc",
    surface: "#efeaf7",
    accent: "#8b5cf6",
    ink: "#241f33",
  },
  {
    name: "Midnight",
    description: "Balanced dark theme with lavender accents.",
    background: "#13121a",
    surface: "#1e1c29",
    accent: "#a78bfa",
    ink: "#f1eefb",
  },
  {
    name: "Ocean",
    description: "Deep blue with a bright cyan accent.",
    background: "#071b2c",
    surface: "#0d2a42",
    accent: "#22d3ee",
    ink: "#eaf7fb",
  },
  {
    name: "Amethyst",
    description: "Rich, dark purple.",
    background: "#180b29",
    surface: "#24123d",
    accent: "#a855f7",
    ink: "#f4ecfb",
  },
  {
    name: "Ember",
    description: "Dark theme with a warm orange-red glow.",
    background: "#1f0f0a",
    surface: "#2c1710",
    accent: "#f97316",
    ink: "#fbeee7",
  },
  {
    name: "Arctic",
    description: "Crisp, cool light blue.",
    background: "#eff8fc",
    surface: "#e0eff6",
    accent: "#38bdf8",
    ink: "#122733",
  },
  {
    name: "Coffee",
    description: "Warm, dark brown.",
    background: "#1c140f",
    surface: "#2a1f17",
    accent: "#b08968",
    ink: "#f4ece3",
  },
  {
    name: "Sage",
    description: "Muted, gray-green.",
    background: "#edf0ea",
    surface: "#dfe4da",
    accent: "#7c8b72",
    ink: "#2a2f26",
  },
  {
    name: "Rosewood",
    description: "Deep burgundy.",
    background: "#1f0b10",
    surface: "#2e1119",
    accent: "#9f2c4c",
    ink: "#f7e7ea",
  },
  {
    name: "Parchment",
    description: "Warm, vintage paper.",
    background: "#f5edda",
    surface: "#ecdfc4",
    accent: "#b08d57",
    ink: "#3a2f1f",
  },
  {
    name: "Lemon",
    description: "Dark theme with a golden yellow accent.",
    background: "#1a1608",
    surface: "#26210d",
    accent: "#e8c547",
    ink: "#f8f4de",
  },
];
