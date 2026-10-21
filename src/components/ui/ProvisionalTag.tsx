/** Indica visualmente que un dato es provisional y debe sustituirse. */
export function ProvisionalTag() {
  return (
    <span className="ml-2 inline-block rounded border border-dashed border-amber-500 px-1.5 py-0.5 align-middle text-xs font-medium text-amber-700">
      Provisional
    </span>
  );
}
