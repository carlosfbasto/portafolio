import Image from "next/image";
import { getInitials } from "@/lib/text";
import type { Profile } from "@/types/cv";

type AvatarProps = {
  name: string;
  photo: Profile["photo"];
};

const base = "size-24 shrink-0 rounded-full lg:size-28";

/** Fotografía circular de perfil; si no hay foto, muestra las iniciales. */
export function Avatar({ name, photo }: AvatarProps) {
  if (!photo) {
    return (
      <div
        className={`${base} flex items-center justify-center bg-blue-600 text-3xl font-semibold text-white`}
        aria-hidden="true"
      >
        {getInitials(name)}
      </div>
    );
  }

  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      width={224}
      height={224}
      sizes="(min-width: 1024px) 112px, 96px"
      preload
      className={`${base} object-cover ring-2 ring-blue-500 ring-offset-2 ring-offset-slate-900`}
    />
  );
}
