import { profile } from "@/data/profile";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8">
      <Container>
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {profile.name}. Hecho con Next.js y Tailwind CSS.
        </p>
      </Container>
    </footer>
  );
}
