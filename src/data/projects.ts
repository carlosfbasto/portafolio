import type { Project } from "@/types/cv";

// Las funcionalidades de COSAVE se verificaron contra el código del repositorio
// (rutas de la API y páginas de la app web). No incluir lo que aún está en el roadmap.
export const projects: Project[] = [
  {
    name: "COSAVE",
    summary:
      "Plataforma inmobiliaria para buscar, publicar y dar seguimiento a propiedades. Permite guardar una búsqueda cuando no hay resultados que cumplan los criterios del usuario.",
    status: "En desarrollo",
    featured: true,
    features: [
      "Registro, inicio de sesión y recuperación de contraseña.",
      "Publicación de propiedades con fotos y flujo de revisión por parte de administración.",
      "Catálogo de venta y renta con filtros y vista de mapa.",
      "Ficha de propiedad con galería y formulario para contactar al anunciante.",
      "Favoritos y búsquedas guardadas (“No encontré lo que busco”).",
      "Panel de administración de usuarios, propiedades y solicitudes.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "Zod",
      "Leaflet",
      "Turborepo",
    ],
    links: [
      { label: "Repositorio", href: "https://github.com/carlosfbasto/Cosave" },
    ],
  },
  {
    name: "Portafolio profesional",
    summary:
      "Este sitio: CV digital y portafolio de proyectos, con la información centralizada en archivos de datos tipados.",
    status: "En desarrollo",
    featured: false,
    features: [
      "Diseño adaptable con panel lateral y navegación por secciones.",
      "Contenido generado desde datos tipados con TypeScript.",
      "Renderizado estático con componentes de servidor.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    links: [],
  },
];
