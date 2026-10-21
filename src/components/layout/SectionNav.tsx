import { NavIcon } from "@/components/ui/NavIcon";
import { navigation } from "@/data/navigation";

type SectionNavProps = {
  /** `sidebar`: lista vertical del panel en escritorio. `bar`: barra fija con scroll horizontal en móvil y tablet. */
  variant: "sidebar" | "bar";
};

const styles = {
  sidebar: {
    nav: "hidden lg:block",
    list: "flex flex-col gap-1",
    link: "flex items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-slate-800 hover:text-white focus-visible:outline-2 focus-visible:outline-blue-400",
    icon: "size-4 shrink-0 text-blue-400",
  },
  bar: {
    nav: "sticky top-0 z-30 border-b border-slate-800 bg-slate-900/95 backdrop-blur lg:hidden",
    list: "flex gap-2 overflow-x-auto px-4 py-2.5 sm:justify-center sm:px-10",
    link: "flex items-center gap-2 whitespace-nowrap rounded-full border border-slate-700 px-3.5 py-1.5 text-sm text-slate-200 transition-colors hover:border-blue-400 hover:text-white focus-visible:outline-2 focus-visible:outline-blue-400",
    icon: "size-4 shrink-0 text-blue-400",
  },
};

export function SectionNav({ variant }: SectionNavProps) {
  const s = styles[variant];

  return (
    <nav aria-label="Secciones" className={s.nav}>
      <ul className={s.list}>
        {navigation.map((item) => (
          <li key={item.id} className="shrink-0">
            <a href={`#${item.id}`} className={s.link}>
              <NavIcon name={item.icon} className={s.icon} />
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
