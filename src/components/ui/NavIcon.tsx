import type { NavIconName } from "@/types/cv";

// Íconos de trazo (24×24), mismo estilo que los de StrengthCard.
const paths: Record<NavIconName, string> = {
  user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 20a8 8 0 0 1 16 0",
  folder: "M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z",
  code: "M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14",
  briefcase: "M4 8h16v11H4zM9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M4 13h16",
  graduation: "M12 4 2 9l10 5 10-5-10-5ZM6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5M22 9v6",
  mail: "M4 6h16v12H4zM4 7l8 6 8-6",
};

type NavIconProps = {
  name: NavIconName;
  className?: string;
};

export function NavIcon({ name, className = "size-4" }: NavIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  );
}
