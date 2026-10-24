import type { EducationItem } from "@/types/cv";

export const education: EducationItem[] = [
  {
    title: "Curso Intensivo: IA Aplicada al Trabajo",
    institution: "Centro de Inteligencia Artificial de Yucatán (CIAY)",
    period: "Oct 2026",
    badge: {
      src: "/images/badges/ciay-ia-aplicada-al-trabajo.png",
      alt: "Insignia del Curso Intensivo IA Aplicada al Trabajo del CIAY, Mérida, Yucatán",
      width: 968,
      height: 1147,
    },
    description:
      "Formación práctica enfocada en el uso de la inteligencia artificial generativa en el trabajo: funcionamiento y límites de los modelos de lenguaje, redacción de instrucciones efectivas con rol, contexto, tarea, formato y ejemplo, ingeniería de contexto, creación de asistentes personalizados, diferencia entre chatbots y agentes, diseño de automatizaciones con revisión humana y uso responsable de los datos.",
  },
  {
    title: "Técnico en soporte y mantenimiento de equipo de cómputo",
    institution: "CECYTEY 05 Panaba",
    period: "2015 – 2018",
    logo: {
      src: "/images/logos/cecyte-yucatan.png",
      alt: "Logo de CECyTE Yucatán",
      width: 300,
      height: 135,
    },
    description:
      "Formación técnica enfocada en el soporte, mantenimiento preventivo y correctivo de equipos de cómputo, instalación de software, diagnóstico de fallas y conocimientos básicos de hardware y sistemas operativos.",
  },
];
