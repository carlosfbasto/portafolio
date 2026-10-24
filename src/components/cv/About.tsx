import { ProvisionalTag } from "@/components/ui/ProvisionalTag";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { StrengthCard } from "@/components/ui/StrengthCard";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="sobre-mi" aria-labelledby="sobre-mi-title" className="py-12">
      <SectionTitle id="sobre-mi-title" title="Sobre mí" />

      <div className="space-y-4 text-[15px] leading-6 text-muted sm:text-lg sm:leading-7">
        {profile.summary.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {profile.provisional.summary ? <ProvisionalTag /> : null}
      </div>

      <h3 className="mt-12 text-xl font-semibold tracking-[-0.01em] text-fg">
        Qué puedo aportar a tu equipo
        {profile.provisional.strengths ? <ProvisionalTag /> : null}
      </h3>
      <ul className="mt-5 grid gap-4 sm:grid-cols-2">
        {profile.strengths.map((strength) => (
          <StrengthCard key={strength.text} strength={strength} />
        ))}
      </ul>
    </section>
  );
}
