# Meu Agente - Landing Page

Site de vendas completo para o **Meu Agente**, um micro SaaS que disponibiliza uma equipe de Agentes de IA operando diretamente no WhatsApp para executar tarefas de atendimento, operações e automação empresarial.

## 🚀 Tecnologias

- **React 18** com TypeScript
- **Vite** para build otimizado
- **Tailwind CSS** para estilização
- **shadcn/ui** para componentes
- **Lucide React** para ícones
- **React Router DOM** para navegação

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AgentsSection.tsx
│   │   ├── PricingSection.tsx
│   │   └── ...
│   └── ui/ (shadcn components)
├── pages/
│   ├── Index.tsx (Landing page)
│   ├── Planos.tsx
│   ├── FAQ.tsx
│   ├── Contato.tsx
│   └── NotFound.tsx
├── index.css (Design system)
└── App.tsx
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

- **/** - Landing page completa com todas as seções
- **/planos** - Página detalhada de planos com calculadora de ROI
- **/faq** - Perguntas frequentes organizadas por categoria
- **/contato** - Formulário de contato e informações

## 🎯 SEO

O projeto inclui:
- Meta tags completas (title, description, keywords)
- Open Graph tags para redes sociais
- Twitter Card tags
- JSON-LD schemas (Product, FAQ, Article)
- Sitemap.xml
- Robots.txt otimizado
- URLs amigáveis

## 📝 Licença

© 2025 Meu Agente. Todos os direitos reservados.

## 🤝 Suporte

Para dúvidas ou suporte:
- Email: contato@meuagente.com
- WhatsApp: (11) 99999-9999
