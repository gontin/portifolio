'use client'; 

import { useState } from 'react';
import PixelCard from '@/components/PixelCard';

// LISTA DE DADOS (Com todas as tecnologias preenchidas para evitar erros)
const MEUS_PROJETOS = [
  {
    id: 1,
    titulo: "Bot IA Discord",
    descricaoCurta: "Assistente de servidor com personalidade gerada por IA.",
    descricaoLonga: "Um bot completo focado em moderação, diversão e gerenciamento. Ele utiliza a API de IA para gerar respostas contextuais e interagir com os usuários de forma dinâmica, elevando o engajamento da comunidade.",
    imagem: "https://placehold.co/600x400/18181b/52525b?text=LOG+SYS_BOT", 
    tecnologias: ["Python", "Discord.py", "API Gemini", "SQLite"],
  },
  {
    id: 2,
    titulo: "RPG Ren'Py",
    descricaoCurta: "Visual novel narrativa com mecânicas de inventário e escolhas.",
    descricaoLonga: "Um projeto autoral unindo arte em pixel e uma narrativa profunda. O jogo conta com um sistema de escolhas que afetam o mundo, mecânicas de inventário e diálogos ramificados, explorando temas de cuidado e introspecção.",
    imagem: "https://placehold.co/600x400/18181b/52525b?text=RENDER_01",
    tecnologias: ["Ren'Py", "Python", "Krita", "Pixel Art"],
  },
  {
    id: 3,
    titulo: "Edutech",
    descricaoCurta: "Sistema de ensino gamificado com tutores virtuais.",
    descricaoLonga: "Uma plataforma educacional completa focada em revolucionar o ensino nas escolas. O sistema integra inteligência artificial para auxiliar os alunos e professores, além de mecânicas de gamificação para manter o engajamento.",
    imagem: "https://placehold.co/600x400/18181b/52525b?text=DATA_CORE",
    tecnologias: ["Next.js", "React", "Tailwind CSS", "Node.js"],
  }
];

export default function Projetos() {
  const [projetoAberto, setProjetoAberto] = useState<any | null>(null);

  return (
    <main className="flex flex-col text-zinc-200">
      
      {/* px-8 md:px-16 lg:px-8 garante que não grude na borda em telas médias */}
      <section id="projetos" className="w-full max-w-6xl mx-auto py-20 px-8 md:px-16 lg:px-8 relative">
        
        {/* Título da Seção */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold uppercase tracking-widest text-white">/Projetos</h2>
          <div className="w-24 h-1 bg-zinc-700 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {MEUS_PROJETOS.map((projeto) => (
            // flex flex-col garante que o card se estique corretamente
            <div 
              key={projeto.id} 
              className="group relative w-full h-full cursor-pointer flex flex-col" 
              onClick={() => setProjetoAberto(projeto)}
            > 
              <PixelCard variant="default">
                
                {/* 1. FUNDO DO CARD (Isolado na camada z-0) */}
                <div className="absolute inset-0 z-0 pointer-events-none rounded-lg overflow-hidden">
                  <img 
                    src={projeto.imagem} 
                    alt={projeto.titulo}
                    className="w-full h-full object-cover opacity-20 grayscale transition-all duration-700 group-hover:opacity-40 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-zinc-900/40"></div>
                </div>
                
                {/* 2. CONTEÚDO DO CARD (Isolado na camada z-10) */}
                <div className="relative z-10 p-6 flex flex-col h-full min-h-[350px] border border-white/5 group-hover:border-white/20 transition-colors">
                  
                  {/* flex-1 empurra o botão lá pro fundo do card */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white font-mono">{projeto.titulo}</h3>
                    <p className="mt-3 text-sm text-zinc-400 line-clamp-3">
                      {projeto.descricaoCurta}
                    </p>
                  </div>
                  
                  {/* Tags e Botão alinhados no fundo */}
                  <div className="flex flex-col gap-4 mt-6">
                    <div className="flex gap-2 flex-wrap">
                      {projeto.tecnologias?.slice(0, 2).map((tech, i) => (
                        <span key={i} className="text-[10px] uppercase font-mono bg-zinc-800 text-zinc-300 px-2 py-1 border border-zinc-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <button className="w-full bg-zinc-100 text-zinc-950 hover:bg-white font-bold py-2 px-4 uppercase tracking-widest text-xs transition-colors">
                      Acessar Dados
                    </button>
                  </div>

                </div>

              </PixelCard>
            </div>
          ))}

        </div>
      </section>

      {/* MODAL (POP-UP) */}
      {projetoAberto && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-zinc-950/90 backdrop-blur-md">
          
          <div className="relative w-full max-w-3xl bg-zinc-950 border border-zinc-800 shadow-2xl flex flex-col md:flex-row overflow-hidden">
            
            {/* Botão Fechar */}
            <button 
              onClick={() => setProjetoAberto(null)}
              className="absolute top-4 right-4 text-zinc-500 hover:text-white bg-zinc-900 hover:bg-zinc-800 w-8 h-8 flex items-center justify-center transition-colors z-20 font-mono text-sm border border-zinc-800"
            >
              [X]
            </button>

            {/* Imagem Lateral */}
            <div className="w-full md:w-2/5 h-64 md:h-auto bg-zinc-900 relative border-b md:border-b-0 md:border-r border-zinc-800">
              <img 
                src={projetoAberto.imagem} 
                alt={projetoAberto.titulo}
                className="w-full h-full object-cover grayscale opacity-80"
              />
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            </div>

            {/* Textos do Modal */}
            <div className="w-full md:w-3/5 p-8 flex flex-col justify-center">
              <span className="text-xs font-mono text-zinc-500 mb-2">ARQUIVO_ID: 00{projetoAberto.id}</span>
              <h3 className="text-3xl font-bold text-white mb-6 font-mono">{projetoAberto.titulo}</h3>
              
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                {projetoAberto.descricaoLonga}
              </p>

              <div>
                <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-3 border-b border-zinc-800 pb-2">/ Stack_Utilizada</h4>
                <div className="flex flex-wrap gap-2">
                  {projetoAberto.tecnologias?.map((tech: string, index: number) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-zinc-900 text-zinc-300 border border-zinc-700 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
          
          {/* Fundo clicável para fechar */}
          <div className="absolute inset-0 z-[-1]" onClick={() => setProjetoAberto(null)}></div>
        </div>
      )}

    </main>
  );
}