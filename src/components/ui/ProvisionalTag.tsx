/** Indica visualmente que un dato es provisional y debe sustituirse. */
export function ProvisionalTag() {
  return (
    <span className="ml-2 inline-block rounded-full border border-dashed border-warn px-2 py-0.5 align-middle font-mono text-[11px] font-semibold uppercase tracking-[0.06em] text-warn">
      Provisional
    </span>
  );
}
