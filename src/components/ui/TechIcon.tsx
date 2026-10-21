import type { TechIconData } from "@/lib/tech-icons";

type TechIconProps = {
  icon: TechIconData;
  className?: string;
};

/** Logo de una tecnología con su color de marca. Es decorativo: el nombre se muestra junto a él. */
export function TechIcon({ icon, className = "size-4" }: TechIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={icon.color}
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}
