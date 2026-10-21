import { SectionTitle } from "@/components/ui/SectionTitle";
import { SocialLink } from "@/components/ui/SocialLink";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section id="contacto" aria-labelledby="contacto-title" className="py-12">
      <SectionTitle
        id="contacto-title"
        title="Contacto"
        description="¿Buscas a alguien para tu equipo de desarrollo? Escríbeme o revisa mi trabajo en GitHub."
      />
      <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
        {profile.socials.map((link) => (
          <li key={link.platform}>
            <SocialLink link={link} />
          </li>
        ))}
      </ul>
    </section>
  );
}
