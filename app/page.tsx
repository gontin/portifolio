import HeroBanner from "@/app/sections/HeroBanner";
import Projetos from "@/app/sections/Projetos";
import Navbar from "@/app/sections/Navbar";
import EfeitoDigitacao from "@/components/EfeitoDigitacao";
import Experiencias from "./sections/Experiencias";
import Formacao from "./sections/Formacao";
import Sobre from "./sections/Sobre";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <main id="top" className="bg-black min-h-screen text-zinc-300">
      <Navbar />
      
      <HeroBanner>
        <EfeitoDigitacao
          textos={[
            "> Olá, você já bebeu água hoje?",
            "> Que calor do carai.",
            "> Da uma explorada ai.",
            "> Lembre de beber água :D",
            "> Miau.",
            "> Bolo de morango.",
            "> Meow.",
          ]}
          velocidade={40}
          tempoPausa={2500}
          atrasoInicial={1500}
          className="text-2xl md:text-3xl font-mono text-white px-4"
        />
      </HeroBanner>

      <section>
        <FadeIn><Sobre /></FadeIn>
        <FadeIn><Projetos /></FadeIn>
        <FadeIn><Experiencias /></FadeIn>
        <FadeIn><Formacao /></FadeIn>
      </section>

      <footer className="border-t border-zinc-900 py-8 text-center font-mono text-xs text-zinc-500">
        {'>'} Desenvolvido com Next.js, React & Tailwind CSS // Miau.
      </footer>
    </main>
  );
}