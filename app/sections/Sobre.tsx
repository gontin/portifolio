'use client';

import { useEffect, useState } from 'react';

const STACK_DO_PROJETO = [
  { nome: 'Next.js (App Router)', categoria: 'Framework', descricao: 'Estrutura de páginas, renderização e otimização de build.' },
  { nome: 'React', categoria: 'Biblioteca UI', descricao: 'Componentização e gerenciamento de estado (useState, useEffect).' },
  { nome: 'TypeScript', categoria: 'Linguagem', descricao: 'Tipagem estática para componentes, listas de dados e respostas de API.' },
  { nome: 'Tailwind CSS', categoria: 'Estilização', descricao: 'Estilização responsiva, paleta dark/terminal e animações de hover.' },
  { nome: 'Three.js / Shaders', categoria: 'Gráficos WebGL', descricao: 'Background interativo PixelBlast renderizado em tempo real no HeroBanner.' },
  { nome: 'The Cat API & MeowFacts', categoria: 'Integração REST', descricao: 'Consumo assíncrono via fetch() de imagens e curiosidades felinas em português.' },
];

export default function Sobre() {
  const [catImage, setCatImage] = useState<string | null>(null);
  const [catFact, setCatFact] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const buscarGato = async () => {
    setLoading(true);
    try {
      const [resImg, resFact] = await Promise.all([
        fetch('https://api.thecatapi.com/v1/images/search'),
        fetch('https://meowfacts.herokuapp.com/?lang=por'),
      ]);
      const dataImg = await resImg.json();
      const dataFact = await resFact.json();

      if (dataImg?.[0]?.url) setCatImage(dataImg[0].url);
      if (dataFact?.data?.[0]) setCatFact(dataFact.data[0]);
    } catch {
      setCatFact('Miau! Erro ao conectar com a central felina.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    buscarGato();
  }, []);

  return (
    <section id="sobre" className="scroll-mt-20 w-full max-w-7xl mx-auto py-24 px-6 md:px-12 font-mono text-zinc-300">
      
      {/* Cabeçalho */}
      <div className="mb-12 border-b border-zinc-800 pb-4">
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-white">
          <span className="text-zinc-600 mr-2">{'>'}</span>Sobre_
        </h2>
      </div>

      {/* Grid: Bio + Widget API de Gatos */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        
        {/* Coluna Esquerda: Sobre Mim */}
        <div className="lg:col-span-2 bg-zinc-950 border border-zinc-800 p-6 md:p-8 flex flex-col justify-between">
          <div>
            <span className="text-xs text-emerald-400 uppercase tracking-widest">
              [ SISTEMA: ONLINE // RECIFE, PE ]
            </span>
            <h3 className="text-2xl font-bold text-white mt-3 mb-4 uppercase">
              Desenvolvedor Full Stack & Professor de Programação
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Graduando em Sistemas para Internet pela Universidade Católica de Pernambuco (UNICAP) e formado em Desenvolvimento Full Stack pela Infinity School, onde conquistei o 1º lugar no ranking estudantil.
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Tenho experiência prática com Python, JavaScript, React/Next.js, Django e bancos de dados SQL, além de desenvolver projetos criativos que vão desde bots de IA no Discord e jogos narrativos no Ren&apos;Py até sistemas IoT integrando Web e hardware (ESP32).
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-800 flex flex-wrap gap-3 text-xs text-zinc-500">
            <span>{'>'} Status: Disponível para novos desafios</span>
          </div>
        </div>

        {/* Coluna Direita: API de Gatos */}
        <div className="bg-zinc-950 border border-zinc-700 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
              <span className="text-xs text-zinc-400 uppercase tracking-widest">API::NEKO_TERMINAL</span>
              <span className="text-[10px] text-emerald-400 uppercase">[ LIVE ]</span>
            </div>

            {/* Imagem do Gato */}
            <div className="relative w-full h-48 bg-black border border-zinc-800 mb-4 overflow-hidden flex items-center justify-center">
              {loading ? (
                <span className="text-xs text-zinc-500 animate-pulse">{'>'} Carregando felino...</span>
              ) : catImage ? (
                <img
                  src={catImage}
                  alt="Gato aleatório via TheCatAPI"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <span className="text-xs text-zinc-600">Sem imagem</span>
              )}
            </div>

            {/* Curiosidade em Português */}
            <div className="bg-black border border-zinc-800 p-3 min-h-[76px] flex items-center">
              <p className="text-xs text-zinc-400 leading-relaxed">
                <span className="text-emerald-400 font-bold mr-1">FATO:</span>
                {loading ? 'Decodificando miado...' : catFact}
              </p>
            </div>
          </div>

          <button
            onClick={buscarGato}
            disabled={loading}
            className="mt-4 w-full py-2.5 bg-zinc-900 hover:bg-white hover:text-black disabled:opacity-50 text-white border border-zinc-700 text-xs uppercase tracking-widest font-bold transition-colors cursor-pointer"
          >
            {loading ? '[ ... ]' : '[ Meow ]'}
          </button>
        </div>

      </div>

      {/* Tecnologias e Módulos utilizados no Portfólio (Obrigatório na atividade) */}
      <div>
        <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">
          <span className="text-emerald-400 mr-2">#</span>Tecnologias_&_Módulos_deste_App
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {STACK_DO_PROJETO.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-950 border border-zinc-800 hover:border-emerald-400/60 p-5 transition-colors"
            >
              <span className="text-[10px] text-emerald-400 uppercase tracking-widest block mb-1">
                {item.categoria}
              </span>
              <h4 className="text-base font-bold text-white mb-2">{item.nome}</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">{item.descricao}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}