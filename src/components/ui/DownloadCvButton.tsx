"use client";

import { useState } from "react";
import { downloadBlob } from "@/lib/download";

type DownloadCvButtonProps = {
  fileName: string;
};

function DownloadIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="size-4"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v11m0 0-4-4m4 4 4-4M5 19h14" />
    </svg>
  );
}

/**
 * Genera el CV en PDF en el navegador al hacer clic.
 * La librería de PDF se carga solo en ese momento para no aumentar la carga inicial.
 */
export function DownloadCvButton({ fileName }: DownloadCvButtonProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function handleClick() {
    setStatus("loading");
    try {
      const [{ pdf }, { CvDocument }] = await Promise.all([
        import("@react-pdf/renderer"),
        import("@/components/cv/CvDocument"),
      ]);
      const blob = await pdf(<CvDocument baseUrl={window.location.origin} />).toBlob();
      downloadBlob(blob, fileName);
      setStatus("idle");
    } catch (error) {
      console.error("No se pudo generar el CV en PDF", error);
      setStatus("error");
    }
  }

  const loading = status === "loading";

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        aria-busy={loading}
        className="inline-flex w-full items-center justify-center gap-2 btn-primary rounded-lg px-4 py-2.5 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary glass:border glass:border-white/20 disabled:cursor-wait disabled:opacity-70"
      >
        <DownloadIcon />
        {loading ? "Generando PDF…" : "Descargar CV (PDF)"}
      </button>
      <p role="status" className="mt-2 text-xs text-danger">
        {status === "error" ? "No se pudo generar el PDF. Inténtalo de nuevo." : ""}
      </p>
    </div>
  );
}
