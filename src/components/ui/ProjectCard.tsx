import { externalLinkProps } from "@/lib/links";
import type { Project } from "@/types/cv";
import { ProvisionalTag } from "./ProvisionalTag";
import { SkillBadge } from "./SkillBadge";

type ProjectCardProps = {
  project: Project;
};

const pill = "rounded-full px-2.5 py-0.5 font-mono text-[11px] font-semibold uppercase tracking-[0.06em]";

export function ProjectCard({ project }: ProjectCardProps) {
  const featured = project.featured ? "ring-1 ring-primary/30" : "";

  return (
    <article
      className={`card card-hover group relative overflow-hidden rounded-2xl p-6 sm:p-7 motion-safe:hover:scale-[1.01] ${featured}`}
    >
      <div
        className="micro-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_35%)]"
        aria-hidden="true"
      />
      {project.featured ? (
        <div
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-70"
          aria-hidden="true"
        />
      ) : null}

      <div className="relative">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="mr-1 text-xl font-semibold tracking-[-0.01em] text-fg">
            {project.name}
            {project.provisional ? <ProvisionalTag /> : null}
          </h3>
          {project.featured ? (
            <span className={`${pill} border border-primary/30 bg-primary/10 text-primary`}>
              Destacado
            </span>
          ) : null}
          <span
            className={`${pill} inline-flex items-center gap-1.5 border border-tertiary/30 bg-tertiary/10 text-tertiary`}
          >
            <span className="size-1.5 rounded-full bg-tertiary" aria-hidden="true" />
            {project.status}
          </span>
        </div>

        <p className="mt-4 text-muted">{project.summary}</p>

        <h4 className="mt-6 font-mono text-[11px] font-semibold uppercase tracking-[0.06em] text-subtle">
          Funcionalidades implementadas
        </h4>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          {project.features.map((feature) => (
            <li key={feature} className="flex gap-3">
              <span
                className="mt-[0.45rem] size-1.5 shrink-0 rounded-full bg-primary"
                aria-hidden="true"
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <h4 className="sr-only">Tecnologías</h4>
        <ul className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
          {project.stack.map((tech) => (
            <SkillBadge key={tech} name={tech} />
          ))}
        </ul>

        {project.links.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 rounded-full border border-line px-3.5 py-1.5 text-sm font-medium text-fg transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                {...externalLinkProps(link.href)}
              >
                {link.label}
                <span className="sr-only"> de {project.name} (se abre en una pestaña nueva)</span>
                <span aria-hidden="true"> ↗</span>
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
