import { getTechIcon } from "@/lib/tech-icons";
import { TechIcon } from "./TechIcon";

type SkillBadgeProps = {
  name: string;
  /** `badge`: etiqueta compacta (tarjetas de proyecto). `tile`: tarjeta con logo destacado (Habilidades). */
  variant?: "badge" | "tile";
};

/** Tecnología con su logo. Debe renderizarse dentro de una lista (`ul`). */
export function SkillBadge({ name, variant = "badge" }: SkillBadgeProps) {
  const icon = getTechIcon(name);

  if (variant === "tile") {
    return (
      <li className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition hover:border-blue-300 hover:shadow-md motion-safe:hover:-translate-y-0.5">
        {icon ? (
          <span
            className="flex size-10 shrink-0 items-center justify-center rounded-lg"
            style={{ backgroundColor: `${icon.color}1a` }}
            aria-hidden="true"
          >
            <TechIcon icon={icon} className="size-5" />
          </span>
        ) : null}
        <span className="text-sm font-medium text-slate-800">{name}</span>
      </li>
    );
  }

  return (
    <li className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-sm text-slate-700 transition-colors hover:border-blue-300">
      {icon ? <TechIcon icon={icon} className="size-3.5" /> : null}
      {name}
    </li>
  );
}
