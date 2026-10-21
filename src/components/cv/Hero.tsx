import { ProvisionalTag } from "@/components/ui/ProvisionalTag";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section aria-labelledby="inicio-title" className="py-16 sm:py-24">
      <p className="text-sm font-medium uppercase tracking-wider text-blue-700">{profile.role}</p>
      <h1
        id="inicio-title"
        className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl"
      >
        {profile.headline}
        {profile.provisional.headline ? <ProvisionalTag /> : null}
      </h1>
      <p className="mt-4 text-slate-600">
        {profile.location ?? "Ubicación por definir"}
        {profile.provisional.location ? <ProvisionalTag /> : null}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#proyectos"
          className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Ver proyectos
        </a>
        <a
          href="#contacto"
          className="rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-800 transition-colors hover:border-blue-600 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Contactar
        </a>
      </div>
    </section>
  );
}
