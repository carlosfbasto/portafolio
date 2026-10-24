import { externalLinkProps } from "@/lib/links";
import type { SocialLinkData } from "@/types/cv";
import { SocialIcon } from "./SocialIcon";

type SocialLinkProps = {
  link: SocialLinkData;
  /**
   * `sidebar`: botón redondo solo con ícono en móvil y con texto en escritorio.
   * `light`: pastilla con ícono y texto en el contenido principal.
   */
  variant?: "sidebar" | "light";
};

const variants = {
  sidebar: {
    active:
      "size-11 justify-center rounded-full bg-surface-2 text-muted hover:bg-primary hover:text-on-primary lg:size-auto lg:justify-start lg:rounded-lg lg:bg-transparent lg:px-3 lg:py-2 lg:hover:bg-surface-2 lg:hover:text-fg",
    pending: "text-subtle",
    label: "sr-only lg:not-sr-only",
  },
  light: {
    active: "card card-hover rounded-full px-4 py-2 font-medium text-fg hover:text-primary",
    pending: "rounded-full border border-dashed border-line px-4 py-2 text-subtle",
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
        {link.label} <span className="font-mono text-xs">(pendiente)</span>
      </span>
    );
  }

  return (
    <a
      href={link.href}
      className={`${base} transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${v.active}`}
      {...externalLinkProps(link.href)}
    >
      <SocialIcon platform={link.platform} />
      <span className={v.label}>{link.label}</span>
    </a>
  );
}
