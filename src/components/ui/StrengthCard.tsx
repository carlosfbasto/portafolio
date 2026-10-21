import type { Strength, StrengthIcon } from "@/types/cv";

// Íconos de trazo (24×24) para cada tipo de aportación.
const icons: Record<StrengthIcon, string> = {
  interface: "M3 5h18v12H3zM8 21h8M12 17v4M7 9l-2 2 2 2M11 13l2-4",
  api: "M4 7h16M4 12h16M4 17h10M17 15l3 2-3 2",
  monorepo: "M12 3 3 8l9 5 9-5-9-5ZM3 13l9 5 9-5M3 17.5l9 5 9-5",
  git: "M6 3v12M6 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM18 9c0 5-6 4-12 6",
};

type StrengthCardProps = {
  strength: Strength;
};

/** Tarjeta de "Qué puedo aportar". Debe renderizarse dentro de una lista (`ul`). */
export function StrengthCard({ strength }: StrengthCardProps) {
  return (
    <li className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-300 hover:shadow-md motion-safe:hover:-translate-y-0.5">
      <span className="absolute inset-y-0 left-0 w-1 bg-blue-600" aria-hidden="true" />
      <div className="flex items-start gap-4">
        <span
          className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700 ring-1 ring-blue-100 transition-colors group-hover:bg-blue-600 group-hover:text-white"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.75}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-6"
          >
            <path d={icons[strength.icon]} />
          </svg>
        </span>
        <p className="text-sm leading-relaxed text-slate-700">{strength.text}</p>
      </div>
    </li>
  );
}
