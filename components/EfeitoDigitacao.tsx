// src/components/EfeitoDigitacao.tsx
'use client'; 

import { useState, useEffect } from 'react';

interface EfeitoDigitacaoProps {
  // Mudamos de 'texto' (string) para 'textos' (array de strings)
  textos: string[];       
  velocidade?: number;   
  atrasoInicial?: number; 
  tempoPausa?: number;    // Novo: Quanto tempo a palavra fica na tela antes de apagar
  className?: string;    
}

export default function EfeitoDigitacao({ 
  textos, 
  velocidade = 80, 
  atrasoInicial = 0, 
  tempoPausa = 2000,      // Padrão de 2 segundos lendo a palavra
  className 
}: EfeitoDigitacaoProps) {
  
  const [textoExibido, setTextoExibido] = useState('');
  const [podeComecar, setPodeComecar] = useState(false);
  
  // NOVOS ESTADOS:
  // Controla se estamos adicionando letras ou tirando letras
  const [isDeleting, setIsDeleting] = useState(false);
  // Controla em qual palavra do array nós estamos (0, 1, 2...)
  const [loopIndex, setLoopIndex] = useState(0);

  // EFEITO 1: Atraso inicial (Permanece igual)
  useEffect(() => {
    const timerInicial = setTimeout(() => {
      setPodeComecar(true);
    }, atrasoInicial);
    return () => clearTimeout(timerInicial);
  }, [atrasoInicial]);

  // EFEITO 2: O Motor de Digitar e Apagar
  useEffect(() => {
    if (!podeComecar) return;

    // Descobre qual palavra do array devemos usar agora.
    // O operador '%' (módulo) garante que, se passarmos do final do array, ele volte pro começo.
    const indiceAtual = loopIndex % textos.length;
    const textoCompleto = textos[indiceAtual];

    let timer: NodeJS.Timeout;

    if (isDeleting) {
      // MODO APAGANDO: Tira a última letra. 
      // Dividimos a velocidade por 2 para ele apagar mais rápido do que digita!
      timer = setTimeout(() => {
        setTextoExibido((prev) => prev.slice(0, -1));
      }, velocidade / 2);
    } else {
      // MODO DIGITANDO: Adiciona a próxima letra baseada no tamanho atual
      timer = setTimeout(() => {
        setTextoExibido((prev) => textoCompleto.slice(0, prev.length + 1));
      }, velocidade);
    }

    // LÓGICA DE MUDANÇA DE ESTADO:
    if (isDeleting && textoExibido === '') {
      // Se estava apagando e a tela ficou vazia, para de apagar e vai pra próxima palavra
      setIsDeleting(false);
      setLoopIndex((prev) => prev + 1);
      
    } else if (!isDeleting && textoExibido === textoCompleto) {
      // Se estava digitando e a palavra terminou, espera o 'tempoPausa' e começa a apagar
      timer = setTimeout(() => setIsDeleting(true), tempoPausa);
    }

    return () => clearTimeout(timer);
    
    // O React vai vigiar todas essas variáveis agora
  }, [textoExibido, isDeleting, loopIndex, textos, velocidade, podeComecar, tempoPausa]);

  return (
    // Transformamos o span principal num flex-container para alinhar o cursor perfeitamente
    <span className={`${className} font-mono inline-flex items-center`}>
      {textoExibido}
      {/* O NOVO CURSOR BLOCO CMD:
        - inline-block: permite dar largura (w) e altura (h)
        - w-[0.6em] h-[1em]: o tamanho se adapta automaticamente ao tamanho da fonte do texto
        - bg-current: truque mágico do Tailwind! Pinta o fundo do quadrado com a mesma cor do texto
      */}
      <span className="inline-block w-[0.6em] h-[1em] ml-1 bg-current animate-pulse"></span>
    </span>
  );
}