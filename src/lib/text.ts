/** Convierte un texto en un nombre de archivo seguro (p. ej. "José Pérez" → "jose-perez"). */
export function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Iniciales del primer nombre y del primer apellido.
 * Con cuatro o más palabras se asume "nombre nombre apellido apellido"
 * (p. ej. "Ana María López Ruiz" → "AL").
 */
export function getInitials(fullName: string): string {
  const words = fullName.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return "";
  if (words.length === 1) return words[0].charAt(0).toUpperCase();

  const surname = words.length >= 4 ? words[2] : words[words.length - 1];
  return `${words[0].charAt(0)}${surname.charAt(0)}`.toUpperCase();
}
