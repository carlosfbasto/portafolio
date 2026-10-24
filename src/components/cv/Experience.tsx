import { OrganizationLogo } from "@/components/ui/OrganizationLogo";
import { ProvisionalTag } from "@/components/ui/ProvisionalTag";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { experience } from "@/data/experience";

/** Un puesto es actual si su periodo termina en "Actualidad" o "Presente". */
function isOngoing(period: string) {
  return /actualidad|presente/i.test(period);
}

export function Experience() {
  return (
    <section id="experiencia" aria-labelledby="experiencia-title" className="py-12">
      <SectionTitle id="experiencia-title" title="Experiencia" />
      <ol className="space-y-6 border-l border-line">
        {experience.map((item) => {
          const ongoing = isOngoing(item.period);
          return (
            <li key={`${item.organization}-${item.period}`} className="relative pl-6 sm:pl-8">
              <span
                className={`absolute -left-1 top-7 size-2 rounded-full bg-primary shadow-[0_0_10px_2px] shadow-primary/50 ${ongoing ? "node-pulse" : ""}`}
                aria-hidden="true"
              />
              <div className="card card-hover rounded-2xl p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.06em] text-primary">
                      {item.period}
                    </p>
                    <h3 className="mt-1.5 text-lg font-semibold tracking-[-0.01em] text-fg">
                      {item.role}
                      <span className="text-subtle"> · </span>
                      <span className="text-muted">{item.organization}</span>
                      {item.provisional ? <ProvisionalTag /> : null}
                    </h3>
                  </div>
                  {item.logo ? <OrganizationLogo logo={item.logo} /> : null}
                </div>
                {item.description ? <p className="mt-3 text-muted">{item.description}</p> : null}
                {item.highlights.length > 0 ? (
                  <ul className="mt-4 space-y-2 text-sm text-muted">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span
                          className="mt-[0.45rem] size-1.5 shrink-0 rounded-full bg-tertiary"
                          aria-hidden="true"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
