"use client";

import { useLayoutEffect, useSyncExternalStore } from "react";
import {
  THEME_STORAGE_KEY,
  type Theme,
  applyTheme,
  getStoredTheme,
  getSystemTheme,
  isTheme,
  themes,
} from "@/lib/theme";

// Íconos de trazo (24×24), mismo estilo que NavIcon.
const options: Record<Theme, { label: string; path: string }> = {
  dark: {
    label: "Tema oscuro",
    path: "M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z",
  },
  light: {
    label: "Tema claro",
    path: "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4",
  },
  glass: {
    label: "Tema liquid glass",
    path: "M12 3c3 3.6 6 7 6 10.5a6 6 0 0 1-12 0C6 10 9 6.6 12 3ZM9.5 14a2.5 2.5 0 0 0 2.5 2.5",
  },
};

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

function getSnapshot(): Theme | null {
  const value = document.documentElement.getAttribute("data-theme");
  return isTheme(value) ? value : null;
}

function getServerSnapshot(): Theme | null {
  return null;
}

/** Selector segmentado de tema con indicador deslizante. */
export function ThemeSwitcher({ className = "" }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useLayoutEffect(() => {
    // En desarrollo, React limpia los atributos de <html> al remontar; se vuelven a aplicar.
    applyTheme(getStoredTheme() ?? getSystemTheme());

    // Sin elección guardada, sigue los cambios del sistema.
    const media = window.matchMedia("(prefers-color-scheme: light)");
    const onSystemChange = () => {
      if (!getStoredTheme()) applyTheme(getSystemTheme());
    };
    media.addEventListener("change", onSystemChange);
    return () => media.removeEventListener("change", onSystemChange);
  }, []);

  function select(next: Theme) {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Sin almacenamiento disponible, el tema se aplica solo en esta visita.
    }
    applyTheme(next);
  }

  const index = theme ? themes.indexOf(theme) : -1;

  return (
    <div
      role="group"
      aria-label="Tema de color"
      className={`relative inline-flex shrink-0 items-center rounded-full border border-line bg-surface-2/60 p-1 ${className}`}
    >
      <span
        aria-hidden="true"
        className={`absolute inset-y-1 left-1 w-9 rounded-full bg-surface shadow-sm ring-1 ring-line transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] glass:bg-white/20 glass:shadow-[inset_0_1px_1px_0_rgb(255_255_255/0.35)] motion-reduce:transition-none ${index < 0 ? "opacity-0" : "opacity-100"}`}
        style={{ transform: `translateX(${Math.max(index, 0) * 100}%)` }}
      />
      {themes.map((value) => {
        const active = value === theme;
        return (
          <button
            key={value}
            type="button"
            onClick={() => select(value)}
            aria-pressed={active}
            aria-label={options[value].label}
            title={options[value].label}
            className={`relative z-10 flex size-9 items-center justify-center rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${active ? "text-primary" : "text-muted hover:text-fg"}`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.75}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4"
              aria-hidden="true"
            >
              <path d={options[value].path} />
            </svg>
          </button>
        );
      })}
    </div>
  );
}
