import Image from "next/image";
import { OrganizationLogo } from "@/components/ui/OrganizationLogo";
import { ProvisionalTag } from "@/components/ui/ProvisionalTag";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { education } from "@/data/education";

export function Education() {
  return (
    <section id="formacion" aria-labelledby="formacion-title" className="py-12">
      <SectionTitle id="formacion-title" title="Formación" />
      <ul className="space-y-4">
        {education.map((item) => (
          <li
            key={`${item.institution}-${item.title}`}
            className="card card-hover rounded-2xl p-5 sm:p-6"
          >
            {/* La insignia va junto al título en móvil y ocupa toda la altura en pantallas grandes. */}
            <div className={`grid items-start gap-x-4 ${item.badge ? "grid-cols-[1fr_auto]" : "grid-cols-1"}`}>
              <div className="flex min-w-0 items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.06em] text-secondary">
                    {item.period}
                  </p>
                  <h3 className="mt-1.5 text-lg font-semibold tracking-[-0.01em] text-fg">
                    {item.title}
                    {item.provisional ? <ProvisionalTag /> : null}
                  </h3>
                  <p className="mt-0.5 text-sm text-muted">{item.institution}</p>
                </div>
                {item.logo ? <OrganizationLogo logo={item.logo} /> : null}
              </div>
              {item.badge ? (
                <Image
                  src={item.badge.src}
                  alt={item.badge.alt}
                  width={item.badge.width}
                  height={item.badge.height}
                  sizes="(min-width: 640px) 112px, 64px"
                  className="h-auto w-16 rounded-md shadow-[0_8px_24px_-6px] shadow-secondary/40 transition-transform motion-safe:hover:scale-105 sm:row-span-2 sm:w-28"
                />
              ) : null}
              {item.description ? (
                <p className={`mt-3 text-muted ${item.badge ? "col-span-2 sm:col-span-1" : ""}`}>
                  {item.description}
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
