import {
  type SimpleIcon,
  siEslint,
  siExpress,
  siGit,
  siGithub,
  siLeaflet,
  siNextdotjs,
  siNodedotjs,
  siPnpm,
  siPostgresql,
  siPrisma,
  siReact,
  siSupabase,
  siTailwindcss,
  siTurborepo,
  siTypescript,
  siZod,
} from "simple-icons";

// Asocia el nombre que aparece en `src/data/` con su logo oficial (simple-icons, CC0).
// Si una tecnología no está aquí, se muestra solo su nombre.
const icons: Record<string, SimpleIcon> = {
  "Next.js": siNextdotjs,
  "Next.js (App Router)": siNextdotjs,
  React: siReact,
  TypeScript: siTypescript,
  "Tailwind CSS": siTailwindcss,
  Leaflet: siLeaflet,
  "Node.js": siNodedotjs,
  Express: siExpress,
  Prisma: siPrisma,
  PostgreSQL: siPostgresql,
  Supabase: siSupabase,
  Zod: siZod,
  Git: siGit,
  GitHub: siGithub,
  pnpm: siPnpm,
  Turborepo: siTurborepo,
  ESLint: siEslint,
};

export type TechIconData = {
  path: string;
  /** Color de marca en formato `#RRGGBB`. */
  color: string;
  /** El color de marca es casi negro y no se distinguiría sobre fondos oscuros. */
  isDark: boolean;
};

function isDarkHex(hex: string) {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 0.25;
}

export function getTechIcon(name: string): TechIconData | null {
  const icon = icons[name];
  return icon ? { path: icon.path, color: `#${icon.hex}`, isDark: isDarkHex(icon.hex) } : null;
}
