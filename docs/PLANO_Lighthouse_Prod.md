# Plano de testes e otimização – Produção (`https://site.meuagente.api.br`)

## Contexto
- App em React 18 + Vite + Tailwind/shadcn/ui, foco em landing e blog.
- Teste executado: Lighthouse (via `lighthouse-mcp`) em produção, dispositivo mobile com throttling (05/12/2025 20:24 UTC).
- Referências consultadas: Vite (/vitejs/vite – guia de performance) e React (/websites/react_dev_reference – lazy/Suspense); componentes shadcn/ui disponíveis (lista via shadcnui-mcp) para avaliar carregamento seletivo.
- Novo teste desktop (throttling) executado 05/12/2025 20:31 UTC para comparação.

## Resultado Lighthouse (mobile throttled)
- Performance: **0.76**
- Accessibility: **0.85**
- Best Practices: **1.00**
- SEO: **1.00**
- Métricas: FCP 4.1s, LCP 4.2s, TBT 30ms, CLS 0, Speed Index 4.1s, TTI 4.2s.

### Achados rápidos
- Gargalo principal é LCP/FCP (~4.2s). TBT e CLS estão ótimos.
- LCP provável: hero (gradientes + ícone svg) e/ou assets iniciais (imagens grandes em `dist/assets` ou fontes Inter em múltiplos pesos).
- Animações e overlays (ex.: `ChatWidget`, gradientes com blur) podem aumentar custo de pintura em dispositivos modestos.

## Resultado Lighthouse (desktop throttled)
- Performance: **0.60**
- Accessibility: **0.85**
- Best Practices: **1.00**
- SEO: **1.00**
- Métricas: FCP 4.0s, LCP 4.1s, TBT 60ms, CLS 0.007, Speed Index 4.0s, TTI 4.2s.

### Achados rápidos (desktop)
- LCP também ~4.1s, com Score de Performance menor que mobile; provável mesmo elemento LCP (hero).
- FCP e Speed Index similares; TBT baixo (60ms) e CLS quase zero.
- Confirmam que o gargalo está no carregamento/pintura inicial, não em JS de interação.

## Comparação Mobile x Desktop
- LCP estável (~4.1–4.2s) em ambos → foco em otimização do asset LCP (imagem/fonte/gradiente).
- TBT e CLS bons nos dois contextos → prioridade é peso/tempo de carregamento, não script.
- Performance desktop caiu para 0.60 (vs 0.76 mobile) por thresholds mais rígidos: reforça necessidade de reduzir peso do hero e fontes.

## Recomendações priorizadas
1) **Reduzir payload inicial / LCP**
   - Converter assets do hero/branding para WebP/AVIF e servir dimensões reais; usar `vite-plugin-image-optimizer` ou job de compressão antes do build (Vite: `/vitejs/vite` sugere otimizar plugins e bundling para prod).
   - Preload do asset LCP (img ou fonte mais pesada) via `<link rel="preload">` no `index.html` quando identificado.
   - Avaliar lazy-loading de seções pesadas (carrosséis, gráficos) com `React.lazy` + `<Suspense>` conforme recomendação do React (react.dev).

2) **Split de código e carregamento condicional**
   - Dividir rotas secundárias (blog, planos) com `React.lazy` + `Suspense`.
   - Componentes shadcn/ui específicos (accordion, command, charts) importar sob demanda para evitar bundling desnecessário.

3) **Reduzir custo de pintura**
   - Simplificar blur/gradientes grandes em `HeroSection` e overlays do `ChatWidget` para mobile (usar `prefers-reduced-motion` e classes Tailwind condicionais).
   - Evitar múltiplas fontes Inter; manter pesos realmente usados (400/600/800, por exemplo).

4) **Configuração Vite**
   - Habilitar `build.reportCompressedSize` e analisar bundles.
   - Considerar `json.stringify: true` para JSON grandes (guia Vite) e `cssCodeSplit` (já padrão) assegurado.
   - Usar `vite --profile`/`vite-plugin-inspect` em dev para auditar plugins (recomendação do guia de performance).

5) **Acessibilidade**
   - Verificar contraste de botões gradientes e foco visível nas CTAs (score 0.85 indica itens faltantes).
   - Garantir `aria-label` em botões icônicos (ex.: `ChatWidget` toggle e fechar modal).

## Roteiro de validação (Chrome DevTools + Lighthouse)
1. **Network**: registrar carregamento em 4G simulado, identificar asset LCP e tamanho total inicial.
2. **Performance**: capturar timeline para custo de pintura de gradientes/blur e sobreposições.
3. **Coverage**: medir CSS/JS não usados na dobra; priorizar split/lazy conforme resultado.
4. **Re-testes Lighthouse**: mobile e desktop após cada ajuste; meta Performance ≥ 0.90, LCP < 2.5s.

## Próximos passos sugeridos
- Mapear asset LCP no hero e otimizar/comprimir.
- Aplicar lazy/Suspense em rotas e seções não críticas.
- Limitar pesos de fonte Inter carregados.
- Rodar Lighthouse desktop e comparar, registrar no mesmo documento.
- Documentar ganhos (antes/depois) e publicar build otimizado.

## Plano de implantação (etapas com validação)
Ordem sugerida, cada etapa deve ser implementada, testada (Lighthouse mobile+desktop) e o plano atualizado antes de avançar.

1) **Split de rotas com React.lazy + Suspense**  
   - Alvo: `src/App.tsx` (rotas secundárias: Blog, BlogPost, Planos, ComoFunciona, etc.) mantendo `Index` eager.  
   - Fallback leve no `<Suspense>` (skeleton curto) para não afetar CLS.  
   - Status: **implementado** (lazy em rotas secundárias + fallback leve).  
   - Validação: Lighthouse pós-implementação (05/12/2025 20:50-20:51 UTC)  
     - Mobile: Perf 0.76 (igual), LCP 4.2s, FCP 4.1s, TBT 30ms, CLS 0.  
     - Desktop: Perf 0.59 (vs 0.60 antes), LCP 4.1s, FCP 4.0s, TBT 100ms, CLS 0.007.  
     - Conclusão: split não piorou, mas não melhorou LCP; próxima etapa deve focar payload (fontes) e pintura do hero.

2) **Redução e preload de fontes**  
   - Alvo: `src/main.tsx` e `index.html`.  
   - Manter somente pesos Inter usados (400/600/800) e remover demais imports.  
   - (Preload adiado) Preload direto via `index.html` foi evitado para não quebrar paths em dev; reavaliar se precisarmos pré-carregar fontes com import `?url`.  
   - Status: **implementado** (fontes reduzidas em `src/main.tsx`).  
   - Validação (05/12/2025 20:58 UTC):  
     - Mobile: Perf 0.76 (≈ igual), LCP 4.2s, FCP 4.0s, TBT 70ms, CLS 0.  
     - Desktop: Perf 0.60 (≈ igual), LCP 4.1s, FCP 4.0s, TBT 50ms, CLS 0.007.  
   - Conclusão: redução de fontes não moveu LCP; próximo passo deve focar pintura (hero/blur) e/ou preload otimizado com `?url` se necessário.

3) **Custo de pintura no hero/chat**  
   - Alvo: `HeroSection` e `ChatWidget`.  
   - Reduzir blur/gradientes pesados em mobile (usar `prefers-reduced-motion`/condicionais).  
   - Status: **implementado** (glows com blur escondidos no mobile; animações do chat e hero respeitam motion-reduce).  
   - Validação (05/12/2025 21:11-21:12 UTC):  
     - Mobile: Perf 0.76, LCP 4.2s, FCP 4.1s, TBT 25ms, CLS 0.  
     - Desktop: Perf 0.60, LCP 4.2s, FCP 4.0s, TBT 60ms, CLS 0.007.  
   - Conclusão: ajustes de pintura não mudaram LCP perceptivelmente; métricas de bloqueio/CLS continuam boas. LCP permanece ~4.2s → próximas ações devem focar imagem/asset LCP ou preload otimizado.
   - Validação: medir LCP/FCP e verificar que animações continuam suaves sem penalizar CLS.

4) **(Opcional) Plugin de otimização de imagens**  
   - Alvo: `vite.config.ts` com `/fatehak/vite-plugin-image-optimizer`; instalar `sharp`/`svgo` devDeps.  
   - Config WebP/AVIF lossy moderado; incluir `public` se identificarmos imagens LCP maiores.  
   - Status: **implementado** (plugin adicionado com includePublic e qualidades moderadas; deps `sharp`/`svgo` instaladas).  
   - Build local: ok (05/12/2025) com savings ~54% nos PNGs principais do hero/logo.  
   - Validação (pós-deploy 05/12/2025 21:23-21:24 UTC):  
     - Mobile: Perf 0.90, LCP 2.9s, FCP 2.9s, TBT 0ms, CLS 0.  
     - Desktop: Perf 0.67, LCP 2.9s, FCP 2.9s, TBT 0ms, CLS 0.007.  
   - Conclusão: otimização de imagens reduziu LCP de ~4.2s para ~2.9s; mobile atingiu meta de Performance ≥ 0.9; desktop ainda abaixo de 0.9, mas LCP caiu significativamente.

5) **Auditoria final**  
   - Rodar Lighthouse mobile+desktop, registrar métricas no plano (antes/depois).  
   - Conferir A11y (contraste e `aria-label` em botões icônicos).  
   - Status: **executada** com otimizações publicadas (ver métrica acima).  
   - A11y permanece 0.85; foco futuro: contraste e `aria-label` em botões icônicos.  
   - Pronto para aprovação final.

