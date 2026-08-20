'use client';

const FORMACAO = [
  {
    id: 1,
    curso: "Sistemas para Internet",
    instituicao: "Universidade Católica de Pernambuco (UNICAP)",
    status: "Em andamento (Noturno)",
    destaque: false
  },
  {
    id: 2,
    curso: "Desenvolvedor Full Stack",
    instituicao: "Infinity School",
    status: "Concluído",
    destaque: true,
    nota: "1º lugar no ranking estudantil"
  }
];

export default function Formacao() {
  return (
    <section id="formacao" className="w-full max-w-7xl mx-auto py-24 px-6 md:px-12 font-mono text-zinc-300">
      
      <div className="mb-12 border-b border-zinc-800 pb-4">
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-white">
          <span className="text-zinc-600 mr-2">{'>'}</span>Formação_
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {FORMACAO.map((item) => (
          <div 
            key={item.id} 
            className={`p-6 border transition-all duration-300 flex flex-col justify-between min-h-[180px] bg-zinc-950
              ${item.destaque ? 'border-zinc-600 hover:border-emerald-400' : 'border-zinc-800 hover:border-zinc-500'}`}
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white uppercase">{item.curso}</h3>
              </div>
              <p className="text-sm text-zinc-400 uppercase tracking-wide">
                {item.instituicao}
              </p>
            </div>
            
            <div className="mt-6 flex flex-col gap-2">
              <span className="text-xs text-zinc-500 uppercase tracking-widest">
                [ {item.status} ]
              </span>
              {item.nota && (
                <span className="text-xs text-emerald-400/80 uppercase">
                  {'>'} {item.nota}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}