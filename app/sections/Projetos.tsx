import PixelCard from '@/components/PixelCard';

export default function Projetos() {
  return (

    <main className="flex flex-col min-h-screen bg-zinc-950 text-white">

      <section id="projetos" className="w-full max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Meus Projetos</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="relative w-full h-72"> 
            <PixelCard variant="default">
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold">Bot Discord</h3>
                  <p className="mt-3 text-sm text-gray-300 line-clamp-4">
                    Um bot assistente integrado com inteligência artificial para moderação, diversão e gerenciamento do servidor.
                  </p>
                </div>
                <button className="bg-pink-600/20 hover:bg-pink-600/40 font-bold py-2 px-4 rounded border border-pink-500/50 transition-colors">
                  Ver Mais
                </button>
              </div>
            </PixelCard>
          </div>
          <div className="relative w-full h-72"> 
            <PixelCard variant="default">
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold">Jogo RPG Ren'Py</h3>
                  <p className="mt-3 text-sm text-gray-300 line-clamp-4">
                    Uma visual novel focada em narrativa com mecânicas de RPG e uma estética em pixel art totalmente original.
                  </p>
                </div>
                <button className="bg-pink-600/20 hover:bg-pink-600/40 font-bold py-2 px-4 rounded border border-pink-500/50 transition-colors">
                  Ver Mais
                </button>
              </div>
            </PixelCard>
          </div>

        </div>
      </section>

    </main>
  );
}