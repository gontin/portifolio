'use client'; 

import { useState } from 'react';

// LISTA DE DADOS
const MEUS_PROJETOS = [
  {
    id: 1,
    titulo: "Bot IA Discord",
    descricaoCurta: "Bot do discord para comunicação natural.",
    descricaoLonga: "Um bot completo focado em comunicação natural. Ele utiliza uma API para se comunicar com o Character.ai, gerando respostas escritas e via audio de acordo com um modelo customizável pelo usuario ou feito pela comunidade.",
    imagem: "/imagens/project_discordbot.PNG",
    tecnologias: ["Python", "Discord.py", "discord-ext-voice-recv", "PyCharacterAI", "SpeechRecognition", "SciPy & NumPy", "Scrapping"],
    github:"https://github.com/gontin/CharAI"
  },
  {
    id: 2,
    titulo: "RPG Ren'Py",
    descricaoCurta: "Visual novel narrativa.",
    descricaoLonga: "Em construção.",
    imagem: "/imagens/renpy_project.PNG",
    tecnologias: ["Ren'Py", "Python", "UX/UI", "Krita", "Pixel Art"],
    github:"https://github.com/gontin/meow-game"
  },
  {
    id: 3,
    titulo: "InfinityBoard",
    descricaoCurta: "Sistema para a organização de funcionários da Infinity School.",
    descricaoLonga: "Este é um sistema web desenvolvido com Django, voltado para organização e produtividade dos funcionários da Infinity School. A plataforma oferece um dashboard centralizado com ferramentas essenciais para o dia a dia dos colaboradores, como calendário, tarefas, links úteis, anotações e mais.",
    imagem: "https://placehold.co/600x400/111111/444444?text=DATA_CORE",
    tecnologias: ["Python", "Django", "Google Cloud Console", "Javascript", "HTML/CSS"],
    github: "https://github.com/gontin/infinityboard"
  },
  {
    id: 4,
    titulo: "Peace Machine",
    descricaoCurta: "Escape Room educacional gamificado integrando interface web e hardware IoT.",
    descricaoLonga: "Um projeto educacional imersivo que une engenharia de software e robótica. A plataforma conecta um web app interativo a uma estrutura física controlada por um microcontrolador ESP32. Os alunos resolvem desafios de matemática e lógica no tablet para gerar códigos. Ao inseri-los no terminal do jogo, requisições HTTP acionam motores servo via Wi-Fi para destrancar compartimentos reais, unindo tecnologia e metodologias ativas de forma inovadora.",
    imagem: "https://placehold.co/600x400/111111/444444?text=PEACE_MACHINE",
    tecnologias: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "C++", "ESP32", "Arduino"],
    github: "https://github.com/gontin/Peace-machine"
  },

];

export default function Projetos() {
  const [projetoAberto, setProjetoAberto] = useState<null | any>(null);

  return (
    <main className="min-h-screen bg-black text-zinc-300 font-mono selection:bg-white selection:text-black">
      
      <section id="projetos" className="w-full max-w-7xl mx-auto py-24 px-6 md:px-12 relative">
        
        {/* Cabeçalho */}
        <div className="mb-16 border-b border-zinc-800 pb-4">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-white">
            <span className="text-zinc-600 mr-2">{'>'}</span>Projetos_
          </h2>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MEUS_PROJETOS.map((projeto) => (
            <div 
              key={projeto.id} 
              className="group relative h-[400px] cursor-pointer border border-zinc-800 bg-zinc-950 overflow-hidden hover:border-zinc-400 transition-colors duration-300 flex flex-col justify-between"
              onClick={() => setProjetoAberto(projeto)}
            > 
              {/* Imagem de Fundo do Card (Super sutil, como textura) */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={projeto.imagem} 
                  alt={projeto.titulo}
                  className="w-full h-full object-cover opacity-10 group-hover:opacity-30 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/90 to-transparent"></div>
              </div>
              
              {/* Topo do Card */}
              <div className="relative z-10 p-6">
                <span className="text-[10px] text-zinc-500 tracking-widest uppercase font-bold">ID: 00{projeto.id}</span>
                <h3 className="text-2xl font-bold text-white mt-2 group-hover:text-zinc-300 transition-colors">
                  {projeto.titulo}
                </h3>
              </div>

              {/* Base do Card */}
              <div className="relative z-10 p-6 flex flex-col gap-4">
                <p className="text-sm text-zinc-400 line-clamp-2">
                  {projeto.descricaoCurta}
                </p>
                
                <div className="flex gap-2 flex-wrap">
                  {projeto.tecnologias.slice(0, 3).map((tech, i) => (
                    <span key={i} className="text-[10px] uppercase bg-black text-zinc-400 px-2 py-1 border border-zinc-800 group-hover:border-zinc-600 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Botão de Ação Visual */}
                <div className="mt-4 w-full flex items-center justify-between border-t border-zinc-800 pt-4 text-xs uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">
                  <span>[ Extrair_Dados ]</span>
                  <span className="font-bold opacity-0 group-hover:opacity-100 transition-opacity">{'->'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL (POP-UP) SEM BLUR, APENAS ESCURECIMENTO (bg-black/95) */}
      {projetoAberto && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 bg-black/95">
          
          <div className="relative w-full max-w-5xl max-h-[90vh] bg-black border border-zinc-700 flex flex-col md:flex-row overflow-y-auto custom-scrollbar">
            
            {/* Botão Fechar */}
            <button 
              onClick={() => setProjetoAberto(null)}
              className="absolute top-0 right-0 text-zinc-500 hover:text-black bg-black hover:bg-white w-12 h-12 flex items-center justify-center transition-colors z-20 font-mono text-xl border-l border-b border-zinc-700"
              title="Encerrar Processo"
            >
              ✕
            </button>

            {/* Coluna da Imagem */}
            <div className="w-full md:w-1/2 min-h-[250px] md:min-h-full bg-zinc-900 relative border-b md:border-b-0 md:border-r border-zinc-800">
              <img 
                src={projetoAberto.imagem} 
                alt={projetoAberto.titulo}
                className="w-full h-full object-cover opacity-70"
              />
              {/* Efeito Scanline sutil na imagem do pop-up */}
              <div className="absolute inset-0 bg-[repeating-linear-gradient(transparent,transparent_2px,rgba(0,0,0,0.4)_3px,rgba(0,0,0,0.4)_3px)] opacity-50 pointer-events-none"></div>
            </div>

            {/* Coluna de Texto / Terminal */}
            <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
              
              <div className="flex items-center gap-2 text-xs text-zinc-500 mb-4 border-b border-zinc-800 pb-2">
                <span className="animate-pulse h-2 w-2 bg-zinc-300 rounded-full"></span>
                <span>CONEXÃO ESTABELECIDA</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-tight">
                {projetoAberto.titulo}
              </h3>
              
              <div className="bg-zinc-950 border border-zinc-800 p-5 mb-8">
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {projetoAberto.descricaoLonga}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-3">
                  <span className="text-zinc-300 mr-2">{'>'}</span>Stack_Utilizada
                </h4>
                <div className="flex flex-wrap gap-2">
                  {projetoAberto.tecnologias?.map((tech: string, index: number) => (
                    <span 
                      key={index} 
                      className="px-3 py-1.5 bg-black text-zinc-300 border border-zinc-700 text-xs hover:border-white hover:text-white transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
                {projetoAberto.github && (
                  <div className="mt-8 pt-6 border-t border-zinc-800">
                    <a 
                      href={projetoAberto.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-zinc-900 hover:bg-white hover:text-black text-white border border-zinc-700 transition-colors flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-bold"
                    >
                      <span>[ Repositório do GitHub ]</span>
                    </a>
                  </div>
                )}

            </div>
          </div>
          
          {/* Fundo clicável para fechar */}
          <div className="absolute inset-0 z-[-1]" onClick={() => setProjetoAberto(null)}></div>
        </div>
      )}

    </main>
  );
}