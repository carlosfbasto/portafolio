import type { Profile } from "@/types/cv";

// Nombre y usuario de GitHub tomados del historial de Git y del remoto del repositorio de COSAVE.
// Los campos marcados como provisionales deben sustituirse por información real.
export const profile: Profile = {
  name: "Carlos Francisco Basto Batun",
  role: "Desarrollador web full stack",
  location: "Panaba, Yucatán, México · Disponible para trabajo remoto",
  headline:
    "Construyo aplicaciones web con Next.js, React y TypeScript, desde la interfaz hasta la API y la base de datos.",
  summary: [
    "Soy una persona apasionada por la tecnología y el desarrollo web. En mi tiempo libre me dedico a aprender, experimentar y construir aplicaciones web de principio a fin, utilizando tecnologías como React, Tailwind CSS, Express, Prisma y PostgreSQL.",
    "Me interesa escribir código limpio, bien estructurado y fácil de mantener, así como documentar las decisiones técnicas para facilitar la colaboración. Me adapto con rapidez a los cambios, aprendo nuevas tecnologías con facilidad y disfruto enfrentar desafíos que me permitan desarrollar mis habilidades y crear soluciones útiles.",
  ],
  strengths: [
    {
      icon: "interface",
      text: "Desarrollo de interfaces con Next.js (App Router), React y Tailwind CSS.",
    },
    {
      icon: "api",
      text: "Diseño de APIs REST con Express, validación con Zod y acceso a datos con Prisma.",
    },
    {
      icon: "monorepo",
      text: "Organización de proyectos en monorepo con pnpm y Turborepo.",
    },
    {
      icon: "git",
      text: "Trabajo con Git y GitHub usando ramas y documentación del proyecto.",
    },
  ],
  photo: {
    src: "/images/profile.jpg",
    alt: "Fotografía de Carlos Francisco Basto Batun",
  },
  socials: [
    {
      platform: "github",
      label: "GitHub",
      href: "https://github.com/carlosfbasto",
    },
    {
      platform: "email",
      label: "Correo electrónico",
      href: "mailto:Carlosbatun607@gmail.com",
    },
  ],
  provisional: {
    location: false,
    headline: false,
    summary: false,
    strengths: false,
  },
};
