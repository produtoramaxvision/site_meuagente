# Plano de Acessibilidade (ações graduais)

## Etapas
1) Nomes acessíveis e tipos de botão
   - Adicionar `aria-label`/`aria-expanded`/`aria-controls` em botões icônicos (menu, togglers) e garantir `type="button"` quando não for submit.
2) Contraste e distinção de links
   - Ajustar links de rodapé e demais para cor de alto contraste (mantendo o vermelho do branding com ratio ≥ 4.5:1) e estilo que não dependa só de cor (pode ser peso/opacidade no hover; sem sublinhado se indesejado).
3) Áreas de toque mínimas
   - Aumentar altura/padding dos botões pequenos (>=40–44px) e alinhar chips “Ir para card” para tamanho consistente.
4) Validação
   - Rodar Lighthouse (A11y/Best Practices) e revisar contraste/labels; iterar conforme necessário.

## Status
- Etapa 1: **concluída** — Header: menu mobile com `type="button"`, `aria-label` (abrir/fechar), `aria-expanded`, `aria-controls="mobile-menu"`.
- Etapa 2: **concluída** — Footer: links em alto contraste (`text-text`), contatos em `text-text`; link “Produtora MaxVision” mantém vermelho do logo com `font-semibold` e hover em vermelho mais claro.
- Etapa 3: **concluída** — Indicadores “Ir para card” no `morphing-card-stack` com área de toque mínima (min-w/min-h 40px), foco visível e aparência preservada via círculo interno. Validação A11y mobile/desktop 0.85 sem regressões.
- Etapa 4: em validação (Lighthouse local porta 8181).

