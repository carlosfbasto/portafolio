/** Devuelve los atributos para abrir enlaces externos en una pestaña nueva de forma segura. */
export function externalLinkProps(href: string) {
  return /^https?:\/\//.test(href)
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
}
