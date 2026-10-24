import { ProvisionalTag } from "@/components/ui/ProvisionalTag";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section aria-labelledby="inicio-title" className="py-16 sm:py-24">
      <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.06em] text-primary">
        <span className="size-1.5 rounded-full bg-tertiary" aria-hidden="true" />
        {profile.role}
      </p>
      <h1
        id="inicio-title"
        className="mt-6 text-[35px] font-extrabold leading-[1.2] tracking-[-0.02em] text-fg"
      >
        {profile.headline}
        {profile.provisional.headline ? <ProvisionalTag /> : null}
      </h1>
      <p className="mt-5 inline-flex items-center gap-2 font-mono text-[13px] text-muted">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4 text-subtle"
          aria-hidden="true"
        >
          <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21ZM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
        </svg>
        {profile.location ?? "Ubicación por definir"}
        {profile.provisional.location ? <ProvisionalTag /> : null}
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="#proyectos"
          className="btn-primary rounded-lg px-5 py-2.5 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-safe:hover:-translate-y-0.5 glass:border glass:border-white/20 glass:backdrop-blur-xl"
        >
          Ver proyectos
        </a>
        <a
          href="#contacto"
          className="rounded-lg border border-line px-5 py-2.5 text-sm font-semibold text-fg transition-colors hover:border-primary hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Contactar
        </a>
      </div>
    </section>
  );
}
