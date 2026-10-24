import { Avatar } from "@/components/ui/Avatar";
import { DownloadCvButton } from "@/components/ui/DownloadCvButton";
import { SocialLink } from "@/components/ui/SocialLink";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";
import { profile } from "@/data/profile";
import { slugify } from "@/lib/text";
import { SectionNav } from "./SectionNav";

/**
 * Panel lateral en escritorio. En móviles y tablets es un bloque superior centrado
 * seguido de una barra fija con las secciones y el selector de tema.
 */
export function Header() {
  return (
    <>
      <header className="panel border-b border-line lg:fixed lg:inset-y-0 lg:left-0 lg:z-20 lg:flex lg:w-80 lg:flex-col lg:overflow-y-auto lg:border-b-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:border-r">
        <div className="flex flex-1 flex-col gap-6 px-6 py-10 sm:px-10 lg:gap-8 lg:px-8 lg:py-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <Avatar name={profile.name} photo={profile.photo} />
            <div>
              <p className="font-display text-xl font-bold leading-tight tracking-tight text-fg">
                {profile.name}
              </p>
              <p className="mt-1.5 font-mono text-xs font-medium uppercase tracking-[0.06em] text-primary">
                {profile.role}
              </p>
            </div>
            <div className="hidden lg:block">
              <ThemeSwitcher />
            </div>
          </div>

          <SectionNav variant="sidebar" />

          <div className="flex flex-col items-center gap-5 lg:mt-auto lg:items-stretch">
            <ul className="flex justify-center gap-3 lg:flex-col lg:gap-1">
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
      <div className="sticky top-0 z-30 flex items-center gap-2 border-b border-line bg-canvas/85 pr-3 backdrop-blur-md glass:bg-white/5 glass:backdrop-blur-xl glass:backdrop-saturate-200 sm:pr-10 lg:hidden">
        <SectionNav variant="bar" />
        <ThemeSwitcher />
      </div>
    </>
  );
}
