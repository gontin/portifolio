# > ~/gontin/portfolio

Portfólio pessoal e currículo interativo desenvolvido com estética retro-terminal, animações em WebGL e integração com APIs REST. Projeto criado para a disciplina de Desenvolvimento Web (Sistemas para Internet - UNICAP).

## Links do Projeto

- **Aplicação Online (Vercel):** [Insira aqui o link do seu deploy na Vercel]
- **Demonstração em Vídeo (YouTube):** [Insira aqui o link do vídeo não listado]
- **Repositório:** https://github.com/gontin

---

## Estrutura e Seções

A aplicação foi estruturada em formato *Single-Page* com navegação por âncoras e rolagem suave (`scroll-smooth`):

- **Home (`#top`):** HeroBanner interativo com renderização de pixels em tempo real (`PixelBlast`) e componente de digitação dinâmica (`EfeitoDigitacao`).
- **Sobre (`#sobre`):** Apresentação profissional, terminal interativo conectado a APIs externas e documentação da arquitetura/módulos do projeto.
- **Projetos (`#projetos`):** Grid de projetos desenvolvidos (Bot IA Discord, RPG Ren'Py, InfinityBoard e Peace Machine) com modal detalhado, stack utilizada e links para os repositórios.
- **Experiência Profissional (`#experiencias`):** Linha do tempo com atuação como Monitor de Programação (Infinity School) e Professor de Programação (Kodland).
- **Experiência Acadêmica (`#formacao`):** Formação superior em Sistemas para Internet (UNICAP) e formação Full Stack (Infinity School).

---

## Integração com APIs

Na seção **Sobre (`API::NEKO_TERMINAL`)**, o sistema realiza requisições assíncronas paralelas via `fetch()` para duas APIs públicas:

1. **The Cat API** (`https://api.thecatapi.com/v1/images/search`): Obtém imagens aleatórias de felinos sob demanda.
2. **MeowFacts API** (`https://meowfacts.herokuapp.com/?lang=por`): Retorna curiosidades aleatórias sobre gatos diretamente em português, com tratamento de fallback.

---

## Tecnologias e Módulos Utilizados

- **Next.js (App Router):** Framework principal, estruturação de rotas e otimização de build.
- **React:** Componentização e controle de estado (`useState`, `useEffect`).
- **TypeScript:** Tipagem estática para estruturas de dados, props e retornos de API.
- **Tailwind CSS:** Estilização utilitária, layout responsivo, tema dark/monoespaçado e transições de interface.
- **Three.js / Shaders:** Renderização gráfica do plano de fundo interativo no banner principal.

---

## Como Executar Localmente

1. Clone o repositório:
```bash
git clone [https://github.com/gontin/SEU-REPOSITORIO.git](https://github.com/gontin/SEU-REPOSITORIO.git)