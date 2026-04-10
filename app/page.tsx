import PixelBlast from "@/components/PixelBlast";
import HeroBanner from "@/app/sections/HeroBanner";
import PixelCard from "@/components/PixelCard";
import Projetos from "@/app/sections/Projetos";
import Navbar from "@/app/sections/Navbar";
import EfeitoDigitacao from "@/components/EfeitoDigitacao";

export default function Home() {


  return (  
<main>
  <Navbar></Navbar>
  <HeroBanner>
    <EfeitoDigitacao 
      textos={[
        "> Olá, já bebeu água hoje?",
        "> Que calor.",
        "> Fique à vontade para explorar.",
        "> Lembre de beber água :D",
        "> Miau.",
        "> Bolo gato yuumi.",
        "> Miau.", 
      ]}
      velocidade={40} 
      tempoPausa={2500} // Fica 2.5s na tela antes de apagar
      atrasoInicial={1500}
      className="text-3xl"
    />
  </HeroBanner>

  <section>
    <Projetos></Projetos>
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
