import {
  Document,
  Font,
  Image as PdfImage,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import type { OrganizationLogo } from "@/types/cv";

// La separación silábica integrada es para inglés; se desactiva para no cortar palabras en español.
Font.registerHyphenationCallback((word) => [word]);

// Paleta alineada con la página (Tailwind slate / blue).
const colors = {
  sidebar: "#0f172a",
  sidebarText: "#cbd5e1",
  accent: "#2563eb",
  accentLight: "#93c5fd",
  heading: "#0f172a",
  text: "#334155",
  muted: "#64748b",
};

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 9.5,
    color: colors.text,
    paddingVertical: 32,
    paddingLeft: "32%",
  },
  // Absoluto y `fixed` para que ocupe la altura completa en cada página.
  sidebar: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    width: "32%",
    backgroundColor: colors.sidebar,
    color: colors.sidebarText,
    paddingVertical: 32,
    paddingHorizontal: 20,
  },
  photo: { width: 96, height: 96, borderRadius: 48, marginBottom: 16, alignSelf: "center" },
  name: { fontFamily: "Helvetica-Bold", fontSize: 16, color: "#ffffff", lineHeight: 1.2 },
  role: { fontSize: 10, color: colors.accentLight, marginTop: 4 },
  sidebarTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    color: "#ffffff",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginTop: 20,
    marginBottom: 6,
  },
  sidebarText: { fontSize: 8.5, lineHeight: 1.5 },
  sidebarLink: { fontSize: 8.5, lineHeight: 1.5, color: colors.accentLight, textDecoration: "none" },
  skill: { fontSize: 8.5, lineHeight: 1.6 },
  main: { paddingHorizontal: 26 },
  headline: { fontSize: 11, color: colors.heading, lineHeight: 1.4, marginBottom: 4 },
  sectionTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 11,
    color: colors.accent,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginTop: 14,
    marginBottom: 6,
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
  },
  paragraph: { fontSize: 9.5, lineHeight: 1.45, marginBottom: 4 },
  itemTitle: { fontFamily: "Helvetica-Bold", fontSize: 10, color: colors.heading },
  itemMeta: { fontSize: 8.5, color: colors.muted, marginTop: 1, marginBottom: 3 },
  item: { marginBottom: 8 },
  bulletRow: { flexDirection: "row", marginBottom: 2 },
  bullet: { width: 10, fontSize: 9.5, color: colors.accent },
  bulletText: { flex: 1, fontSize: 9.5, lineHeight: 1.4 },
  stack: { fontSize: 8.5, color: colors.muted, marginTop: 2 },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 4,
  },
  itemHeaderText: { flex: 1, paddingRight: 10 },
  logoBox: {
    width: 66,
    height: 30,
    padding: 4,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  logoLight: { backgroundColor: "#ffffff", borderWidth: 1, borderColor: "#e2e8f0" },
  logoDark: { backgroundColor: colors.sidebar },
  logo: { maxWidth: "100%", maxHeight: "100%", objectFit: "contain" },
});

function SectionTitle({ children }: { children: string }) {
  return <Text style={styles.sectionTitle}>{children}</Text>;
}

function Bullets({ items }: { items: string[] }) {
  return (
    <View>
      {items.map((item) => (
        <View key={item} style={styles.bulletRow}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.bulletText}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

/** Logo de empresa o institución alineado a la derecha del encabezado de un elemento. */
function ItemLogo({ logo, baseUrl }: { logo: OrganizationLogo; baseUrl: string }) {
  const background = logo.background === "dark" ? styles.logoDark : styles.logoLight;

  return (
    <View style={[styles.logoBox, background]}>
      <PdfImage src={new URL(logo.src, baseUrl).href} style={styles.logo} />
    </View>
  );
}

type CvDocumentProps = {
  /** Origen del sitio; react-pdf no resuelve rutas relativas, así que las imágenes se cargan desde aquí. */
  baseUrl: string;
};

/** CV en PDF generado a partir de los mismos datos de `src/data/`. Solo admite imágenes PNG y JPG. */
export function CvDocument({ baseUrl }: CvDocumentProps) {
  const contacts = profile.socials.filter((link) => link.href);
  const photoUrl = profile.photo ? new URL(profile.photo.src, baseUrl).href : null;

  return (
    <Document
      title={`CV · ${profile.name}`}
      author={profile.name}
      subject={profile.role}
      language="es"
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.sidebar} fixed>
          {photoUrl ? <PdfImage src={photoUrl} style={styles.photo} /> : null}
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.role}>{profile.role}</Text>

          <Text style={styles.sidebarTitle}>Contacto</Text>
          {profile.location ? <Text style={styles.sidebarText}>{profile.location}</Text> : null}
          {contacts.map((link) => (
            <Link key={link.platform} src={link.href ?? ""} style={styles.sidebarLink}>
              {link.platform === "whatsapp"
                ? link.label
                : (link.href ?? "").replace(/^mailto:/, "").replace(/^https?:\/\//, "")}
            </Link>
          ))}

          {skillGroups.map((group) => (
            <View key={group.name}>
              <Text style={styles.sidebarTitle}>{group.name}</Text>
              {group.skills.map((skill) => (
                <Text key={skill} style={styles.skill}>
                  {skill}
                </Text>
              ))}
            </View>
          ))}
        </View>

        <View style={styles.main}>
          <Text style={styles.headline}>{profile.headline}</Text>

          <SectionTitle>Sobre mí</SectionTitle>
          {profile.summary.map((paragraph) => (
            <Text key={paragraph} style={styles.paragraph}>
              {paragraph}
            </Text>
          ))}

          <SectionTitle>Qué puedo aportar</SectionTitle>
          <Bullets items={profile.strengths.map((strength) => strength.text)} />

          <SectionTitle>Experiencia</SectionTitle>
          {experience.map((item) => (
            <View key={`${item.organization}-${item.period}`} style={styles.item} wrap={false}>
              <View style={styles.itemHeader}>
                <View style={styles.itemHeaderText}>
                  <Text style={styles.itemTitle}>
                    {item.role} · {item.organization}
                  </Text>
                  <Text style={styles.itemMeta}>{item.period}</Text>
                </View>
                {item.logo ? <ItemLogo logo={item.logo} baseUrl={baseUrl} /> : null}
              </View>
              {item.description ? <Text style={styles.paragraph}>{item.description}</Text> : null}
              <Bullets items={item.highlights} />
            </View>
          ))}

          <SectionTitle>Proyectos</SectionTitle>
          {projects.map((project) => (
            <View key={project.name} style={styles.item} wrap={false}>
              <Text style={styles.itemTitle}>{project.name}</Text>
              <Text style={styles.itemMeta}>
                {project.status}
                {project.links.length > 0
                  ? ` · ${project.links[0].href.replace(/^https?:\/\//, "")}`
                  : ""}
              </Text>
              <Text style={styles.paragraph}>{project.summary}</Text>
              <Bullets items={project.features} />
              <Text style={styles.stack}>Tecnologías: {project.stack.join(", ")}</Text>
            </View>
          ))}

          <SectionTitle>Formación</SectionTitle>
          {education.map((item) => (
            <View key={`${item.institution}-${item.title}`} style={styles.item} wrap={false}>
              <View style={styles.itemHeader}>
                <View style={styles.itemHeaderText}>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Text style={styles.itemMeta}>
                    {item.institution} · {item.period}
                  </Text>
                </View>
                {item.logo ? <ItemLogo logo={item.logo} baseUrl={baseUrl} /> : null}
              </View>
              {item.description ? <Text style={styles.paragraph}>{item.description}</Text> : null}
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
