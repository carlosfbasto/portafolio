/** Gradientes difuminados detrás del contenido; solo se muestran en el tema glass. */
export function GlassBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="glass-backdrop pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="glass-blob left-[-10%] top-[-10%] size-[55vmax] bg-[#00b8d4]" />
      <div className="glass-blob right-[-15%] top-[20%] size-[50vmax] bg-[#6d28d9] [animation-delay:-8s]" />
      <div className="glass-blob bottom-[-20%] left-[25%] size-[45vmax] bg-[#059669] [animation-delay:-16s]" />
    </div>
  );
}
