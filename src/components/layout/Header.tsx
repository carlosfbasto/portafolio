import { Avatar } from "@/components/ui/Avatar";
import { DownloadCvButton } from "@/components/ui/DownloadCvButton";
import { SocialLink } from "@/components/ui/SocialLink";
import { profile } from "@/data/profile";
import { slugify } from "@/lib/text";
import { SectionNav } from "./SectionNav";

/**
 * Panel lateral oscuro en escritorio. En móviles y tablets es un bloque superior centrado
 * seguido de una barra de secciones fija.
 */
export function Header() {
  return (
    <>
      <header className="bg-slate-900 text-slate-100 lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-80 lg:flex-col lg:overflow-y-auto">
        <div className="flex flex-1 flex-col gap-6 px-6 py-10 sm:px-10 lg:gap-8 lg:px-8 lg:py-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <Avatar name={profile.name} photo={profile.photo} />
            <div>
              <p className="text-xl font-semibold leading-tight text-white">{profile.name}</p>
              <p className="mt-1 text-sm text-blue-300">{profile.role}</p>
            </div>
          </div>

          <SectionNav variant="sidebar" />

          <div className="flex flex-col items-center gap-5 lg:mt-auto lg:items-stretch">
            <ul className="flex justify-center gap-3 lg:flex-col lg:gap-2">
              {profile.socials.map((link) => (
                <li key={link.platform}>
                  <SocialLink link={link} variant="sidebar" />
                </li>
              ))}
            </ul>
            <div className="w-full max-w-xs lg:max-w-none">
              <DownloadCvButton fileName={`CV-${slugify(profile.name)}.pdf`} />
            </div>
          </div>
        </div>
      </header>
      <SectionNav variant="bar" />
    </>
  );
}
