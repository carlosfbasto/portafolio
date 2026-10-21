import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  // Los proyectos destacados aparecen primero.
  const sorted = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured));

  return (
    <section id="proyectos" aria-labelledby="proyectos-title" className="py-12">
      <SectionTitle
        id="proyectos-title"
        title="Proyectos"
        description="Proyectos en los que he trabajado. Solo se listan funcionalidades ya implementadas."
      />
      <div className="space-y-6">
        {sorted.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
