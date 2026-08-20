'use client';

const EXPERIENCIAS = [
    {
        id: 1,
        cargo: "Monitor de Programação",
        empresa: "Infinity School",
        periodo: "Set 2025 - Dez 2025",
        descricao: "Aulas particulares e monitoria para alunos, com foco no ensino prático e resolução de problemas em SQL, Python e JavaScript."
    },
    {
        id: 2,
        cargo: "Tutor de turmas",
        empresa: "Kodland",
        periodo: "Jul 2026 - Presente",
        descricao: "Em construção."
    },
];

export default function Experiencias() {
  return (
    <section id="experiencias" className="w-full max-w-7xl mx-auto py-24 px-6 md:px-12 font-mono text-zinc-300">
      
      <div className="mb-16 border-b border-zinc-800 pb-4">
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-white">
          <span className="text-zinc-600 mr-2">{'>'}</span>Experiência_
        </h2>
      </div>

      <div className="relative border-l border-zinc-800 ml-4 md:ml-6 space-y-12">
        {EXPERIENCIAS.map((exp) => (
          <div key={exp.id} className="relative pl-8 group">
            {/* Marcador na linha do tempo */}
            <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 bg-black border border-zinc-500 group-hover:bg-white group-hover:border-white transition-colors"></span>
            
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2 gap-2">
              <h3 className="text-2xl font-bold text-white uppercase tracking-tight group-hover:text-emerald-400 transition-colors">
                {exp.cargo}
              </h3>
              <span className="text-xs text-zinc-500 uppercase tracking-widest bg-zinc-950 px-2 py-1 border border-zinc-800">
                {exp.periodo}
              </span>
            </div>
            
            <h4 className="text-sm text-zinc-400 uppercase tracking-wider mb-4">
              @ {exp.empresa}
            </h4>
            
            <p className="text-sm text-zinc-400 leading-relaxed max-w-3xl border border-transparent group-hover:border-zinc-800 p-4 -ml-4 rounded-sm transition-colors">
              {exp.descricao}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}