/**
 * Marca un dato como provisional: existe para mostrar la estructura de la página,
 * pero debe sustituirse por información real antes de publicar.
 */
export type Provisional = {
  provisional?: boolean;
};

export type SocialPlatform = "github" | "linkedin" | "email" | "website";

export type SocialLinkData = Provisional & {
  platform: SocialPlatform;
  label: string;
  /** `null` cuando el enlace aún no se conoce. */
  href: string | null;
};

export type StrengthIcon = "interface" | "api" | "monorepo" | "git";

export type Strength = {
  icon: StrengthIcon;
  text: string;
};

export type Profile = {
  name: string;
  role: string;
  location: string | null;
  headline: string;
  summary: string[];
  /** Lo que la persona puede aportar a un equipo. */
  strengths: Strength[];
  /** Fotografía cuadrada dentro de `public/`, o `null` para mostrar las iniciales. */
  photo: { src: string; alt: string } | null;
  socials: SocialLinkData[];
  provisional: {
    location: boolean;
    headline: boolean;
    summary: boolean;
    strengths: boolean;
  };
};

/** Logo de una empresa o institución, dentro de `public/`. */
export type OrganizationLogo = {
  src: string;
  alt: string;
  /** Tamaño original en píxeles, para conservar la proporción. */
  width: number;
  height: number;
  /** Fondo detrás del logo; `dark` para logos con partes blancas. */
  background?: "light" | "dark";
};

export type ExperienceItem = Provisional & {
  logo?: OrganizationLogo;
  role: string;
  organization: string;
  period: string;
  description?: string;
  highlights: string[];
};

export type EducationItem = Provisional & {
  logo?: OrganizationLogo;
  title: string;
  institution: string;
  period: string;
  description?: string;
};

export type SkillGroup = {
  name: string;
  skills: string[];
};

export type ProjectStatus = "En desarrollo" | "Publicado";

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = Provisional & {
  name: string;
  summary: string;
  status: ProjectStatus;
  featured: boolean;
  /** Solo funcionalidades implementadas y verificadas en el código. */
  features: string[];
  stack: string[];
  links: ProjectLink[];
};

export type NavIconName = "user" | "folder" | "code" | "briefcase" | "graduation" | "mail";

export type NavItem = {
  id: string;
  label: string;
  icon: NavIconName;
};
