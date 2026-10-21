import type { SkillGroup } from "@/types/cv";

// Tecnologías utilizadas en los proyectos de este portafolio (no una autoevaluación de dominio).
export const skillGroups: SkillGroup[] = [
  {
    name: "Frontend",
    skills: ["Next.js (App Router)", "React", "TypeScript", "Tailwind CSS", "Leaflet"],
  },
  {
    name: "Backend y datos",
    skills: ["Node.js", "Express", "Prisma", "PostgreSQL", "Supabase", "Zod"],
  },
  {
    name: "Herramientas",
    skills: ["Git", "GitHub", "pnpm", "Turborepo", "ESLint"],
  },
];
