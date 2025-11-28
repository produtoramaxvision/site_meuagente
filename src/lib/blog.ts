export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  author: string;
  date: string;
  coverImage: string;
  readTime: string;
  featured: boolean;
  content: string;
}

// Metadados dos posts (sem o conteúdo em si)
const postsData = [
  {
    slug: "agentes-ia-economizar-tempo",
    title: "Como Agentes de IA no WhatsApp Podem Economizar 40 Horas por Mês",
    description:
      "Descubra como empresas estão automatizando tarefas operacionais e economizando dezenas de horas por mês com Agentes de IA no WhatsApp.",
    category: "Automação",
    tags: ["IA", "WhatsApp", "Produtividade", "Automação"],
    author: "Equipe Meu Agente",
    date: "2025-01-16",
    coverImage: "/placeholder.svg",
    readTime: "8 min",
    featured: true,
  },
  {
    slug: "automatize-atendimento-ia-5-passos",
    title: "Guia Completo: Automatize Seu Atendimento com IA em 5 Passos",
    description:
      "Passo a passo completo para implementar automação de atendimento com Agentes de IA no WhatsApp em menos de 1 semana.",
    category: "IA",
    tags: ["IA", "Atendimento", "Automação", "WhatsApp"],
    author: "Equipe Meu Agente",
    date: "2025-01-15",
    coverImage: "/placeholder.svg",
    readTime: "10 min",
    featured: true,
  },
  {
    slug: "sdr-virtual-qualificar-leads",
    title: "SDR Virtual: Como Qualificar Leads Automaticamente pelo WhatsApp",
    description:
      "Aprenda como um SDR virtual qualifica leads, agenda reuniões e aumenta conversões automaticamente via WhatsApp.",
    category: "Vendas",
    tags: ["SDR", "Vendas", "Leads", "Automação"],
    author: "Equipe Meu Agente",
    date: "2025-01-14",
    coverImage: "/placeholder.svg",
    readTime: "12 min",
    featured: true,
  },
  {
    slug: "gestao-financeira-whatsapp",
    title: "Gestão Financeira pelo WhatsApp: Vale a Pena?",
    description:
      "Análise completa sobre gerenciar finanças empresariais pelo WhatsApp com Agentes de IA, com prós, contras e casos reais.",
    category: "Finanças",
    tags: ["Finanças", "WhatsApp", "Gestão", "Automação"],
    author: "Equipe Meu Agente",
    date: "2025-01-13",
    coverImage: "/placeholder.svg",
    readTime: "9 min",
    featured: false,
  },
  {
    slug: "dobrar-conversoes-agentes-ia",
    title:
      "7 Exemplos Reais de Empresas que Dobraram Conversões com Agentes de IA",
    description:
      "Cases reais de empresas que aumentaram conversões, reduziram custos e escalaram operações usando Agentes de IA no WhatsApp.",
    category: "Casos de Uso",
    tags: ["Cases", "Conversão", "IA", "ROI"],
    author: "Equipe Meu Agente",
    date: "2025-01-12",
    coverImage: "/placeholder.svg",
    readTime: "11 min",
    featured: true,
  },
  {
    slug: "whatsapp-business-guia-completo",
    title: "WhatsApp Business e IA: O Guia Definitivo para 2025",
    description:
      "Tudo que você precisa saber sobre WhatsApp Business API, automação com IA e como escalar atendimento mantendo conformidade.",
    category: "WhatsApp",
    tags: ["WhatsApp", "Business", "API", "Compliance"],
    author: "Equipe Meu Agente",
    date: "2025-01-11",
    coverImage: "/placeholder.svg",
    readTime: "13 min",
    featured: false,
  },
  {
    slug: "google-ads-automacao-ia",
    title:
      "Como Otimizar Google Ads com IA: Análise Automática de Campanhas",
    description:
      "Aprenda como Agentes de IA analisam campanhas do Google Ads, identificam oportunidades e enviam relatórios automáticos via WhatsApp.",
    category: "Marketing",
    tags: ["Google Ads", "Marketing", "IA", "Performance"],
    author: "Equipe Meu Agente",
    date: "2025-01-10",
    coverImage: "/placeholder.svg",
    readTime: "10 min",
    featured: false,
  },
];

// Conteúdo bruto dos arquivos Markdown (inclui frontmatter)
const postContentFiles = import.meta.glob("../../content/blog/*.md", {
  eager: true,
  as: "raw",
}) as Record<string, string>;

function getRawContentBySlug(slug: string): string | null {
  const entry = Object.entries(postContentFiles).find(([path]) =>
    path.endsWith(`/content/blog/${slug}.md`)
  );

  if (!entry) return null;
  return entry[1];
}

// Remove o bloco de frontmatter `--- ... ---` do início do markdown
function stripFrontmatter(raw: string): string {
  if (!raw.startsWith("---")) return raw;

  const lines = raw.split(/\r?\n/);

  // Procura a segunda linha com apenas '---'
  let endIndex = -1;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === "---") {
      endIndex = i;
      break;
    }
  }

  if (endIndex === -1) return raw;

  const contentLines = lines.slice(endIndex + 1);
  return contentLines.join("\n").trimStart();
}

export async function getAllPosts(): Promise<BlogPost[]> {
  // Lista usa apenas metadados; conteúdo completo é carregado em `getPostBySlug`
  return postsData.map(
    (post) =>
      ({
        ...post,
        content: "",
      } as BlogPost)
  );
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const meta = postsData.find((p) => p.slug === slug);
  if (!meta) return null;

  const raw = getRawContentBySlug(slug);
  const content = raw ? stripFrontmatter(raw) : "";

  return {
    ...(meta as Omit<BlogPost, "content">),
    content,
  } as BlogPost;
}

export async function getPostsByCategory(
  category: string
): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.category === category);
}

export async function getFeaturedPosts(): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.featured).slice(0, 3);
}

export function getCategories(): string[] {
  return [
    "Todos",
    "Automação",
    "IA",
    "Vendas",
    "Finanças",
    "WhatsApp",
    "Marketing",
    "Casos de Uso",
    "Produtividade",
  ];
}

