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
};

export function getTechIcon(name: string): TechIconData | null {
  const icon = icons[name];
  return icon ? { path: icon.path, color: `#${icon.hex}` } : null;
}
