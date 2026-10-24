import Image from "next/image";
import type { OrganizationLogo as OrganizationLogoData } from "@/types/cv";

type OrganizationLogoProps = {
  logo: OrganizationLogoData;
};

const backgrounds = {
  light: "bg-white ring-1 ring-line",
  dark: "bg-slate-900 ring-1 ring-white/10",
};

/**
 * Logo de empresa o institución en un recuadro de tamaño fijo, para que logos con
 * proporciones distintas ocupen el mismo espacio sin alterar el diseño.
 */
export function OrganizationLogo({ logo }: OrganizationLogoProps) {
  return (
    <div
      className={`flex h-12 w-24 shrink-0 items-center justify-center rounded-lg p-2 sm:h-14 sm:w-28 ${backgrounds[logo.background ?? "light"]}`}
    >
      <Image
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        sizes="112px"
        className="max-h-full w-auto max-w-full object-contain"
      />
    </div>
  );
}
