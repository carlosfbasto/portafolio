import { getTechIcon } from "@/lib/tech-icons";
import { TechIcon } from "./TechIcon";

/** Acento de la categoría: cian (frontend), esmeralda (backend y datos), violeta (herramientas). */
export type SkillTone = "primary" | "secondary" | "tertiary";

type SkillBadgeProps = {
  name: string;
  /** `badge`: etiqueta compacta (tarjetas de proyecto). `tile`: pastilla con tono de categoría (Habilidades). */
  variant?: "badge" | "tile";
  tone?: SkillTone;
};

const tones: Record<SkillTone, { pill: string; dot: string }> = {
  primary: {
    pill: "border-primary/25 bg-primary/10 hover:border-primary/60",
    dot: "bg-primary shadow-[0_0_6px_1px] shadow-primary/60",
  },
  secondary: {
    pill: "border-secondary/25 bg-secondary/10 hover:border-secondary/60",
    dot: "bg-secondary shadow-[0_0_6px_1px] shadow-secondary/60",
  },
  tertiary: {
    pill: "border-tertiary/25 bg-tertiary/10 hover:border-tertiary/60",
    dot: "bg-tertiary shadow-[0_0_6px_1px] shadow-tertiary/60",
  },
};

/** Tecnología con su logo. Debe renderizarse dentro de una lista (`ul`). */
export function SkillBadge({ name, variant = "badge", tone = "primary" }: SkillBadgeProps) {
  const icon = getTechIcon(name);

  if (variant === "tile") {
    const t = tones[tone];
    return (
      <li
        className={`inline-flex items-center gap-2.5 rounded-full border py-2 pl-3 pr-3.5 text-fg transition motion-safe:hover:-translate-y-0.5 ${t.pill}`}
      >
        {icon ? <TechIcon icon={icon} className="size-4" /> : null}
        <span className="font-mono text-xs font-semibold tracking-[0.02em]">{name}</span>
        <span className={`size-1.5 rounded-full ${t.dot}`} aria-hidden="true" />
      </li>
    );
  }

  return (
    <li className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-2/60 px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.06em] text-muted transition-colors hover:border-primary/50 hover:text-fg">
      {icon ? <TechIcon icon={icon} className="size-3.5" /> : null}
      {name}
    </li>
  );
}
