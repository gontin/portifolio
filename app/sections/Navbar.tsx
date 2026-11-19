'use client';

interface NavlinkProps {
  href: string;
  label: string;
  children: React.ReactNode;
}

const Navlink = ({ href, label, children }: NavlinkProps) => {
  return (
    <a
      href={href}
      className="group relative flex flex-col items-center px-3 py-1.5 text-zinc-400 hover:text-emerald-400 transition-all duration-300"
    >
      <div className="transform transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]">
        {children}
      </div>
      <span className="text-[10px] uppercase tracking-widest mt-1.5 transition-colors duration-300">
        {label}
      </span>
      {/* Linha animada no hover */}
      <span className="absolute bottom-0 h-[2px] w-0 bg-emerald-400 transition-all duration-300 group-hover:w-full" />
    </a>
  );
};

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-black/85 backdrop-blur-md border-b border-zinc-900 px-6 py-3 font-mono">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center">
        
        {/* Identificador Terminal */}
        <div className="hidden md:flex items-center gap-2 text-xs text-zinc-500">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>~/gontin/portfolio</span>
        </div>

        {/* Links de Navegação com Âncoras */}
        <div className="flex justify-center gap-2 sm:gap-6">
          <Navlink href="#top" label="Home">
            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 20h4v-6h2v6h4v2H4v-2h4v-6h2v6Zm-6 0H2V10h2v10Zm18 0h-2V10h2v10Zm-8-6h-4v-2h4v2Zm-8-4H4V8h2v2Zm14 0h-2V8h2v2ZM8 8H6V6h2v2Zm10 0h-2V6h2v2Zm-8-2H8V4h2v2Zm6 0h-2V4h2v2Zm-2-2h-4V2h4v2Z"/>
            </svg>
          </Navlink>

          <Navlink href="#sobre" label="Sobre">
            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"/>
            </svg>
          </Navlink>

          <Navlink href="#projetos" label="Projetos">
            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2 8h2v12H2zm18 0h2v12h-2zM4 6h16v2H4zm0 14h16v2H4zM8 4h2v2H8zm2-2h4v2h-4zm4 2h2v2h-2z"/>
            </svg>
          </Navlink>

          <Navlink href="#experiencias" label="Profissional">
            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5h2v2H8V5ZM6 7h2v2H6V7ZM4 9h2v2H4V9Zm-2 2h2v2H2v-2Zm2 2h2v2H4v-2Zm2 2h2v2H6v-2Zm2 2h2v2H8v-2Zm8-12h-2v2h2V5Zm2 2h-2v2h2V7Zm2 2h-2v2h2V9Zm2 2h-2v2h2v-2Zm-2 2h-2v2h2v-2Zm-2 2h-2v2h2v-2Zm-2 2h-2v2h2v-2Z"/>
            </svg>
          </Navlink>

          <Navlink href="#formacao" label="Acadêmico">
            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
            </svg>
          </Navlink>
        </div>

        {/* Botão GitHub */}
        <div className="hidden md:flex justify-end">
          <a
            href="https://github.com/gontin"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-xs text-zinc-300 border border-zinc-700 px-3.5 py-2 hover:border-emerald-400 hover:bg-emerald-400/10 hover:text-emerald-400 transition-all duration-300 uppercase tracking-wider"
          >
            <span>GitHub</span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">{'->'}</span>
          </a>
        </div>

      </div>
    </nav>
  );
}