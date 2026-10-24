import { profile } from "@/data/profile";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <Container>
        <p className="font-mono text-xs text-subtle">
          © {new Date().getFullYear()} {profile.name}. Hecho con Next.js y Tailwind CSS.
        </p>
      </Container>
    </footer>
  );
}
