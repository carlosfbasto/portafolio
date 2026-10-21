import { externalLinkProps } from "@/lib/links";
import type { Project } from "@/types/cv";
import { ProvisionalTag } from "./ProvisionalTag";
import { SkillBadge } from "./SkillBadge";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const border = project.featured ? "border-blue-200 ring-1 ring-blue-100" : "border-slate-200";

  return (
    <article className={`rounded-xl border bg-white p-6 shadow-sm ${border}`}>
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-lg font-semibold text-slate-900">
          {project.name}
          {project.provisional ? <ProvisionalTag /> : null}
        </h3>
        {project.featured ? (
          <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
            Destacado
          </span>
        ) : null}
        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
          {project.status}
        </span>
      </div>

      <p className="mt-3 text-slate-600">{project.summary}</p>

      <h4 className="mt-5 text-sm font-semibold text-slate-900">Funcionalidades implementadas</h4>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600 marker:text-blue-600">
        {project.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      <h4 className="sr-only">Tecnologías</h4>
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <SkillBadge key={tech} name={tech} />
        ))}
      </ul>

      {project.links.length > 0 ? (
        <div className="mt-5 flex flex-wrap gap-4">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-blue-700 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              {...externalLinkProps(link.href)}
            >
              {link.label}
              <span className="sr-only"> de {project.name} (se abre en una pestaña nueva)</span>
              <span aria-hidden="true"> ↗</span>
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}
