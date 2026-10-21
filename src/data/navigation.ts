import type { NavItem } from "@/types/cv";

/** Secciones de la página, en el orden en que aparecen. */
export const navigation: NavItem[] = [
  { id: "sobre-mi", label: "Sobre mí", icon: "user" },
  { id: "proyectos", label: "Proyectos", icon: "folder" },
  { id: "habilidades", label: "Habilidades", icon: "code" },
  { id: "experiencia", label: "Experiencia", icon: "briefcase" },
  { id: "formacion", label: "Formación", icon: "graduation" },
  { id: "contacto", label: "Contacto", icon: "mail" },
];
