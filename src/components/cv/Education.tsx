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
            className="rounded-lg border border-slate-200 bg-white p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold text-slate-900">
                  {item.title}
                  {item.provisional ? <ProvisionalTag /> : null}
                </h3>
                <p className="text-sm text-slate-600">{item.institution}</p>
                <p className="text-sm text-slate-500">{item.period}</p>
              </div>
              {item.logo ? <OrganizationLogo logo={item.logo} /> : null}
            </div>
            {item.description ? <p className="mt-2 text-slate-700">{item.description}</p> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
