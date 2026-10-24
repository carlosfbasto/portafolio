import { NavIcon } from "@/components/ui/NavIcon";
import { navigation } from "@/data/navigation";

type SectionNavProps = {
  /** `sidebar`: lista vertical del panel en escritorio. `bar`: lista con scroll horizontal en móvil y tablet. */
  variant: "sidebar" | "bar";
};

const styles = {
  sidebar: {
    nav: "hidden lg:block",
    list: "flex flex-col gap-1",
    link: "group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-surface-2 hover:text-fg focus-visible:outline-2 focus-visible:outline-primary",
    icon: "size-4 shrink-0 text-subtle transition-colors group-hover:text-primary",
  },
  bar: {
    nav: "min-w-0 flex-1",
    list: "flex gap-2 overflow-x-auto px-4 py-2.5 sm:justify-center sm:px-10",
    link: "flex items-center gap-2 whitespace-nowrap rounded-full border border-line px-3.5 py-1.5 text-sm text-muted transition-colors hover:border-primary hover:text-fg focus-visible:outline-2 focus-visible:outline-primary",
    icon: "size-4 shrink-0 text-primary",
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
