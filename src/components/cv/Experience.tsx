import { OrganizationLogo } from "@/components/ui/OrganizationLogo";
import { ProvisionalTag } from "@/components/ui/ProvisionalTag";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experiencia" aria-labelledby="experiencia-title" className="py-12">
      <SectionTitle id="experiencia-title" title="Experiencia" />
      <ol className="space-y-8 border-l-2 border-slate-200">
        {experience.map((item) => (
          <li key={`${item.organization}-${item.period}`} className="relative pl-6">
            <span
              className="absolute -left-[7px] top-1.5 size-3 rounded-full border-2 border-white bg-blue-600"
              aria-hidden="true"
            />
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold text-slate-900">
                  {item.role} · {item.organization}
                  {item.provisional ? <ProvisionalTag /> : null}
                </h3>
                <p className="text-sm text-slate-500">{item.period}</p>
              </div>
              {item.logo ? <OrganizationLogo logo={item.logo} /> : null}
            </div>
            {item.description ? <p className="mt-2 text-slate-700">{item.description}</p> : null}
            {item.highlights.length > 0 ? (
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600 marker:text-blue-600">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}
