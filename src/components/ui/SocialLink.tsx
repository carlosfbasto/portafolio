import { externalLinkProps } from "@/lib/links";
import type { SocialLinkData } from "@/types/cv";
import { SocialIcon } from "./SocialIcon";

type SocialLinkProps = {
  link: SocialLinkData;
  /**
   * `sidebar`: botón redondo solo con ícono en móvil y con texto en escritorio.
   * `light`: ícono y texto sobre fondo claro.
   */
  variant?: "sidebar" | "light";
};

const variants = {
  sidebar: {
    active:
      "size-11 justify-center rounded-full bg-slate-800 text-slate-200 hover:bg-blue-600 hover:text-white lg:size-auto lg:justify-start lg:rounded-md lg:bg-transparent lg:px-3 lg:py-1.5 lg:text-slate-300 lg:hover:bg-slate-800",
    pending: "text-slate-500",
    label: "sr-only lg:not-sr-only",
  },
  light: {
    active: "rounded text-slate-700 hover:text-blue-700",
    pending: "text-slate-400",
    label: "",
  },
};

/** Enlace a una red o medio de contacto. Si aún no hay URL, se muestra como pendiente. */
export function SocialLink({ link, variant = "light" }: SocialLinkProps) {
  const base = "inline-flex items-center gap-2 text-sm";
  const v = variants[variant];

  if (!link.href) {
    return (
      <span className={`${base} ${v.pending}`}>
        <SocialIcon platform={link.platform} />
        {link.label} <span className="text-xs">(pendiente)</span>
      </span>
    );
  }

  return (
    <a
      href={link.href}
      className={`${base} transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${v.active}`}
      {...externalLinkProps(link.href)}
    >
      <SocialIcon platform={link.platform} />
      <span className={v.label}>{link.label}</span>
    </a>
  );
}
