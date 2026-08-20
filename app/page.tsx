import HeroBanner from "@/app/sections/HeroBanner";
import Projetos from "@/app/sections/Projetos";
import Navbar from "@/app/sections/Navbar";
import EfeitoDigitacao from "@/components/EfeitoDigitacao";
import Experiencias from "./sections/Experiencias";
import Formacao from "./sections/Formacao";
import FadeIn from "@/components/FadeIn";

export default function Home() {


  return (  
<main>
  <Navbar></Navbar>
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
      tempoPausa={2500} // Fica 2.5s na tela antes de apagar
      atrasoInicial={1500}
      className="text-3xl"
    />
  </HeroBanner>

  <section>
    
    <FadeIn><Projetos /></FadeIn>
    <FadeIn><Experiencias /></FadeIn>
    <FadeIn><Formacao /></FadeIn>
  </section>

  <section>
    {/* Habilidades */}
  </section>

  <section>
    {/* footer */}
  </section>
  
</main>
  );
}
