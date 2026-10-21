# Portafolio profesional

CV digital y portafolio de proyectos de **Carlos Francisco Basto Batun**. Es una página estática, adaptable a móviles, construida con componentes de servidor y con toda la información profesional centralizada en archivos de datos tipados.

## Tecnologías

| Herramienta | Versión |
|---|---|
| Next.js (App Router, Turbopack) | 16.4.2 |
| React / React DOM | 19.3.0 |
| TypeScript (`strict`) | 5 |
| Tailwind CSS (`@tailwindcss/turbopack`) | 4 |
| ESLint (`eslint-config-next`) | 9 |
| pnpm | 11.22.0 |
| `@react-pdf/renderer` (generación del CV en PDF) | 4.9.0 |
| `simple-icons` (logos de tecnologías, licencia CC0) | 16.35.0 |

No usa base de datos, autenticación ni API. Las únicas dependencias añadidas al proyecto base son `@react-pdf/renderer` y `simple-icons`.

## Cómo ejecutar el proyecto

Requisitos: Node.js 20 o superior y pnpm 11 (`corepack enable`).

```bash
pnpm install     # instalar dependencias
pnpm dev         # servidor de desarrollo en http://localhost:3000
pnpm lint        # revisar el código con ESLint
pnpm build       # compilación de producción
pnpm start       # servir la compilación de producción
```

## Estructura

```
src/
├── app/                  # Rutas: layout (metadatos, fuentes), page (ensambla las secciones) y estilos globales
├── components/
│   ├── layout/           # Header (panel lateral oscuro), SectionNav, Footer y Container
│   ├── cv/               # Hero, About, Projects, Skills, Experience, Education, Contact
│   │                     # y CvDocument (plantilla del CV en PDF)
│   └── ui/               # SectionTitle, SkillBadge, TechIcon, NavIcon, ProjectCard, SocialLink,
│                         # SocialIcon, StrengthCard, Avatar, DownloadCvButton y ProvisionalTag
├── data/                 # profile, projects, skills, experience, education y navigation
├── lib/                  # links (enlaces externos), text (iniciales y nombres de archivo),
│                         # download (descargas en el navegador) y tech-icons (logos de tecnologías)
└── types/                # cv.ts: tipos de todos los datos
public/
└── images/               # profile.jpg (fotografía de perfil)
    └── logos/            # logos de Macropay (experiencia) y CECyTE Yucatán (formación)
```

Todos los componentes son de servidor salvo `DownloadCvButton`, el único componente de cliente. La página se genera de forma estática en la compilación.

## CV en PDF

El botón **Descargar CV (PDF)** del panel lateral genera el PDF en el navegador al hacer clic, con `@react-pdf/renderer` y la plantilla `src/components/cv/CvDocument.tsx`:

- Usa los mismos datos de `src/data/`, así que el PDF siempre coincide con la página y no hay que mantener un archivo aparte.
- La librería y la plantilla se cargan con `import()` solo al hacer clic, para no aumentar la carga inicial de la página.
- Formato A4 con panel lateral oscuro (foto, contacto y habilidades) y contenido principal (perfil, aportes, experiencia, proyectos y formación, con los logos de Macropay y CECyTE). Si el contenido ocupa más de una página, el panel se repite.
- Se descarga como `CV-carlos-francisco-basto-batun.pdf`.

## Diseño

- **Escritorio:** panel lateral oscuro (`slate-900`) fijo, con foto, nombre y puesto centrados, navegación con íconos, enlaces de contacto y botón de CV.
- **Móvil y tablet:** bloque superior centrado (foto, nombre, botones redondos de GitHub y correo, y botón de CV), seguido de una barra de secciones con íconos que queda fija arriba al hacer scroll y se desliza horizontalmente.
- Contenido principal sobre fondo claro con acentos azules (`blue-600`).
- **Tecnologías:** se muestran con su logo oficial y su color de marca. En los proyectos son etiquetas compactas y en Habilidades, tarjetas por grupo. No hay barras de porcentaje.
- **Íconos de tecnologías:** se renderizan en el servidor, así que `simple-icons` no se envía al navegador. Para una tecnología nueva, agrega su logo en `src/lib/tech-icons.ts`; si no está, se muestra solo el nombre.
- Accesibilidad: enlace “Saltar al contenido”, `lang="es"`, secciones con `aria-labelledby`, foco visible en enlaces y desplazamiento suave desactivado con `prefers-reduced-motion`.

## Cómo actualizar la información

Toda la información vive en `src/data/` y sigue los tipos de `src/types/cv.ts`; los componentes no necesitan cambios.

- **Datos provisionales:** los elementos con `provisional: true` (o los indicadores de `profile.provisional`) se muestran con la etiqueta **Provisional**. Al sustituir un dato por información real, cambia la marca a `false` o elimínala.
- **Logos de experiencia y formación:** guarda la imagen en `public/images/logos/` y agrega `logo` (`src`, `alt`, `width`, `height` y, para logos con partes blancas, `background: "dark"`) al elemento en `src/data/experience.ts` o `src/data/education.ts`. Se muestran en la esquina superior derecha, dentro de un recuadro de tamaño fijo, tanto en la página como en el CV en PDF. Usa **PNG o JPG**: el generador de PDF no admite WebP ni SVG.
- **Fotografía:** reemplaza `public/images/profile.jpg` por otra imagen cuadrada, o usa `photo: null` en `src/data/profile.ts` para mostrar las iniciales.
- **Enlaces:** en `profile.socials`, asigna `href` (`https://…` o `mailto:…`). Si `href` es `null`, el enlace se muestra como pendiente.
- **Proyectos:** agrega objetos en `src/data/projects.ts`. Describe solo funcionalidades implementadas; `featured: true` lo coloca primero con la etiqueta “Destacado”.

## Estado de la información

| Dato | Archivo | Estado |
|---|---|---|
| Ubicación y disponibilidad | `src/data/profile.ts` (`location`) | Confirmado |
| Titular, “Sobre mí” y “Qué puedo aportar” | `src/data/profile.ts` | Confirmado |
| Correo electrónico y GitHub | `src/data/profile.ts` (`socials`) | Confirmado (LinkedIn omitido) |
| Fotografía | `public/images/profile.jpg` (`photo`) | Confirmado (recorte cuadrado 800×800) |
| Experiencia laboral | `src/data/experience.ts` | Confirmado |
| Formación académica | `src/data/education.ts` | Confirmado |
| CV en PDF | `src/components/cv/CvDocument.tsx` | Generado al hacer clic a partir de `src/data/` |
| Repositorio del portafolio | `src/data/projects.ts` | **Pendiente**: aún no hay remoto en GitHub |

Notas de verificación:

- **Nombre** y **usuario de GitHub** (`carlosfbasto`): tomados del historial de Git y del remoto de COSAVE.
- **COSAVE:** repositorio público. Las funcionalidades listadas existen en su código (rutas de la API y páginas de la app web); figura “En desarrollo” porque, según su README, faltan migraciones y pruebas contra Supabase.
- **Habilidades:** solo tecnologías usadas en COSAVE o en este portafolio; no son una autoevaluación de dominio.

## Despliegue

Pensado para desplegarse en [Vercel](https://vercel.com/): importa el repositorio de GitHub y Vercel detectará Next.js y pnpm automáticamente. No requiere variables de entorno.
