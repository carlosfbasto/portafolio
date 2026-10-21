import { SectionTitle } from "@/components/ui/SectionTitle";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="habilidades" aria-labelledby="habilidades-title" className="py-12">
      <SectionTitle
        id="habilidades-title"
        title="Habilidades"
        description="Tecnologías y herramientas que he utilizado en mis proyectos."
      />
      <div className="space-y-8">
        {skillGroups.map((group) => (
          <div key={group.name}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              {group.name}
            </h3>
            <ul className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {group.skills.map((skill) => (
                <SkillBadge key={skill} name={skill} variant="tile" />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
