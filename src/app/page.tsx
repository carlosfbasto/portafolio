import { About } from "@/components/cv/About";
import { Contact } from "@/components/cv/Contact";
import { Education } from "@/components/cv/Education";
import { Experience } from "@/components/cv/Experience";
import { Hero } from "@/components/cv/Hero";
import { Projects } from "@/components/cv/Projects";
import { Skills } from "@/components/cv/Skills";
import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary focus:shadow"
      >
        Saltar al contenido
      </a>
      <Header />
      <div className="flex min-h-screen flex-col lg:pl-80">
        <main id="contenido" className="flex-1">
          <Container className="divide-y divide-line pb-12">
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Education />
            <Contact />
          </Container>
        </main>
        <Footer />
      </div>
    </>
  );
}
