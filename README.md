# Meu Agente - Landing Page & Blog

Site de vendas completo para o **Meu Agente**, um micro SaaS que disponibiliza uma equipe de Agentes de IA operando diretamente no WhatsApp para executar tarefas de atendimento, operações e automação empresarial.

## 🚀 Tecnologias

- **React 18** com TypeScript
- **Vite** para build otimizado
- **Tailwind CSS 3.4+** para estilização
- **shadcn/ui** para componentes UI
- **Lucide React** para ícones
- **React Router DOM** para navegação
- **React Hook Form + Zod** para validação de formulários
- **React Markdown** para renderização de posts do blog
- **React Helmet Async** para SEO e meta tags
- **Gray Matter** para processamento de frontmatter
- **Framer Motion** (via tailwindcss-animate) para animações

## 📁 Estrutura do Projeto

```
site_meuagente/
├── content/
│   └── blog/                    # Posts do blog em Markdown
│       ├── agentes-ia-economizar-tempo.md
│       ├── automatize-atendimento-ia-5-passos.md
│       ├── sdr-virtual-qualificar-leads.md
│       └── ...
├── public/
│   ├── sitemap.xml              # Sitemap para SEO
│   ├── robots.txt               # Configuração de crawlers
│   └── placeholder.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx       # Cabeçalho com navegação
│   │   │   └── Footer.tsx       # Rodapé com newsletter
│   │   ├── sections/            # Seções da home
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AgentsSection.tsx
│   │   │   ├── ExamplesSection.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   ├── IntegrationsSection.tsx
│   │   │   └── ...
│   │   ├── ui/                  # Componentes shadcn/ui
│   │   ├── ChatWidget.tsx       # Widget de chat flutuante
│   │   ├── NewsletterSignup.tsx # Componente de newsletter
│   │   ├── SEO.tsx              # Componente de SEO
│   │   └── GTM.tsx              # Google Tag Manager
│   ├── lib/
│   │   ├── blog.ts              # Utilitários para blog
│   │   ├── seo.ts               # Schemas JSON-LD
│   │   └── utils.ts             # Utilitários gerais
│   ├── pages/
│   │   ├── Index.tsx            # Landing page principal
│   │   ├── Planos.tsx           # Planos com ROI calculator
│   │   ├── ComoFunciona.tsx     # Página de produto
│   │   ├── Blog.tsx             # Listagem de posts
│   │   ├── BlogPost.tsx         # Template de post individual
│   │   ├── FAQ.tsx              # Perguntas frequentes
│   │   ├── Contato.tsx          # Formulário de contato
│   │   └── NotFound.tsx
│   ├── index.css                # Design system (tokens CSS)
│   ├── App.tsx                  # App principal com rotas
│   └── main.tsx                 # Entry point
├── tailwind.config.ts           # Configuração Tailwind
├── components.json              # Configuração shadcn/ui
└── package.json
```

## 🎨 Design System

O projeto utiliza um design system monocromático baseado em HSL com:
- **Paleta**: Preto/Cinza com gradientes brand-900 → brand-700
- **Fonte**: Inter via Google Fonts
- **Animações**: Fade-in, scale, glassmorphism, hover effects
- **Componentes**: Customizados do shadcn/ui

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+ e npm

### Instalação

```bash
# Clone o repositório
git clone <YOUR_GIT_URL>

# Navegue até o diretório
cd <YOUR_PROJECT_NAME>

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:8080`

## 📦 Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`

## 🌐 Deploy

Para fazer deploy via Lovable:
1. Acesse https://lovable.dev/projects/46c8cc9d-0870-4e8b-a870-4ab9f66839d3
2. Clique em "Publish" no canto superior direito
3. Clique em "Update" para publicar as alterações

## 📄 Páginas

### Páginas Principais

- **/** - Landing page completa com todas as seções de vendas
- **/planos** - Planos detalhados, matriz de recursos, calculadora de ROI e FAQ de planos
- **/como-funciona** - Deep dive em cada agente de IA, fluxo do SDR e recursos do app
- **/blog** - Listagem de posts com filtros por categoria, busca e sidebar
- **/blog/:slug** - Post individual com TOC, sidebar sticky, CTAs e posts relacionados
- **/faq** - Perguntas frequentes categorizadas (Geral, Planos, Uso, Segurança, Técnico)
- **/contato** - Formulário validado, informações de contato e redes sociais

### Posts do Blog (5+ completos)

1. "Como Agentes de IA no WhatsApp Podem Economizar 40 Horas por Mês"
2. "Guia Completo: Automatize Seu Atendimento com IA em 5 Passos"
3. "SDR Virtual: Como Qualificar Leads Automaticamente pelo WhatsApp"
4. "Gestão Financeira pelo WhatsApp: Vale a Pena?"
5. "7 Exemplos Reais de Empresas que Dobraram Conversões com Agentes de IA"
6. "WhatsApp Business e IA: O Guia Definitivo para 2025"
7. "Como Otimizar Google Ads com IA: Análise Automática de Campanhas"

## 🎯 SEO

O projeto inclui implementação completa de SEO:

### Meta Tags e Open Graph
- Componente `<SEO>` reutilizável com meta tags completas
- Open Graph tags para compartilhamento em redes sociais
- Twitter Card tags para previews no Twitter
- Imagens OG personalizadas por página

### Structured Data (JSON-LD)
- **Home e Planos:** Schema SoftwareApplication com ofertas dos 4 planos
- **FAQ:** Schema FAQPage com todas as perguntas/respostas
- **Blog Posts:** Schema Article com autor, data e organização
- **Organização:** Schema Organization com contatos e redes sociais

### Sitemap e Robots
- `sitemap.xml` com todas as rotas estáticas e posts do blog
- `robots.txt` otimizado para crawlers
- URLs amigáveis e hierárquicas

### Google Tag Manager
- Componente `<GTM>` preparado para integração
- Configure `VITE_GTM_ID` nas variáveis de ambiente

## ✨ Recursos e Funcionalidades

### Chat Widget Flutuante
- Botão fixo no canto inferior direito em todas as páginas
- Card interativo com opções rápidas de contato
- Redirecionamento direto para WhatsApp
- Animações suaves de entrada/saída

### Newsletter Signup
- Componente reutilizável em 3 variantes: `default`, `compact`, `card`
- Validação de email com feedback visual
- Integrado ao footer e páginas do blog
- Toast de confirmação de inscrição

### Calculadora de ROI (Planos)
- Cálculo interativo de economia de tempo e recuperação de leads
- Comparação de ROI entre planos Básico e Business
- Atualização em tempo real conforme usuário digita

### Formulário de Contato Validado
- React Hook Form + Zod para validação robusta
- Feedback visual com animação `shake` em erros
- Estados de loading e sucesso com toasts
- Integração com redes sociais

### Blog com Markdown
- Posts em Markdown com frontmatter (YAML)
- Renderização com React Markdown + syntax highlighting
- TOC (Table of Contents) automático
- Sidebar sticky com CTA e newsletter
- Filtros por categoria e busca por palavras-chave
- Posts relacionados automaticamente

## 📝 Como Adicionar Posts ao Blog

1. Crie um novo arquivo `.md` em `content/blog/`
2. Adicione o frontmatter com metadados:

```markdown
---
title: "Título do Post"
slug: "titulo-do-post"
description: "Descrição para SEO"
category: "Automação"
tags: ["IA", "WhatsApp"]
author: "Equipe Meu Agente"
date: "2025-01-16"
coverImage: "/placeholder.svg"
readTime: "8 min"
featured: true
---

# Título do Post

Conteúdo em Markdown...
```

3. Adicione os metadados ao array `postsData` em `src/lib/blog.ts`
4. Adicione a URL ao `public/sitemap.xml`

## 🔧 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```bash
# Google Tag Manager
VITE_GTM_ID=GTM-XXXXXXX

# Site URL (para SEO e Open Graph)
VITE_SITE_URL=https://meuagente.com
```

## ♿ Acessibilidade

O site implementa boas práticas de acessibilidade:

- Contraste mínimo WCAG AA em todos os elementos
- Foco visível em controles interativos
- `aria-labels` em botões icon-only
- Navegação completa por teclado
- Suporte a `prefers-reduced-motion` (desativa animações)
- Textos alternativos em imagens

## 📊 Performance

### Otimizações Implementadas

- Lazy loading de imagens com componente otimizado
- Code splitting automático via Vite
- Compressão de assets na build
- Fontes otimizadas via Google Fonts
- Animações CSS em vez de JavaScript quando possível
- Glassmorphism com `backdrop-filter` otimizado

### Objetivo Lighthouse

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## 📝 Licença

© 2025 Meu Agente. Todos os direitos reservados.

## 🤝 Suporte

Para dúvidas ou suporte:
- Email: contato@meuagente.com
- WhatsApp: (11) 99999-9999
