import { SectionTitle } from "@/components/ui/SectionTitle";
import { SkillBadge, type SkillTone } from "@/components/ui/SkillBadge";
import { skillGroups } from "@/data/skills";

// Tono por grupo, en el orden de `src/data/skills.ts`: Frontend, Backend y datos, Herramientas.
const tones: SkillTone[] = ["primary", "tertiary", "secondary"];

export function Skills() {
  return (
    <section id="habilidades" aria-labelledby="habilidades-title" className="py-12">
      <SectionTitle
        id="habilidades-title"
        title="Habilidades"
        description="Tecnologías y herramientas que he utilizado en mis proyectos."
      />
      <div className="space-y-8">
        {skillGroups.map((group, index) => (
          <div key={group.name}>
            <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.06em] text-subtle">
              {group.name}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2.5">
              {group.skills.map((skill) => (
                <SkillBadge
                  key={skill}
                  name={skill}
                  variant="tile"
                  tone={tones[index % tones.length]}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
