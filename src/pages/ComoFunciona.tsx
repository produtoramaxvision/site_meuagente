import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  DollarSign,
  Search,
  Database,
  UserCheck,
  TrendingUp,
  Calendar,
  Code,
  Video,
  CheckCircle,
  ArrowRight,
  Zap,
  BarChart,
  Target,
  ListChecks,
  Bell,
  Settings,
} from "lucide-react";

const ComoFunciona = () => {
  const agents = [
    {
      id: "financeiro",
      icon: DollarSign,
      name: "Agente Financeiro",
      tier: "Todos os planos",
      tierBadge: "FREE",
      color: "from-green-500/10 to-emerald-500/10",
      iconColor: "text-green-600",
      description: `O Agente Financeiro é a espinha dorsal do controle financeiro empresarial dentro do Meu Agente. Com ele, você registra entradas e saídas, categoriza transações (marketing, operação, impostos, etc.) e recebe alertas automáticos sobre contas vencendo ou saldo negativo.

Nos planos pagos, você pode exportar relatórios completos em CSV/PDF, aplicar filtros avançados por período e categoria, e ter validação automática de duplicatas para evitar lançamentos acidentais.

O agente processa linguagem natural, então você pode simplesmente enviar mensagens como falaria com um contador humano, e ele entende perfeitamente o contexto, valores, datas e categorias.`,
      examples: [
        '"Registra uma entrada de R$ 1.200,00 na categoria Assinaturas — Plano Business — com data 01/10/2025."',
        '"Quero registrar uma saída de R$ 320,00 em Marketing, descrição \'Impulsionamento Instagram\', hoje às 14:40."',
        '"Exporta um CSV do período de 01/09 a 30/09 somente com as categorias Marketing e Operação."'
      ],
      useCases: [
        { sector: "Tecnologia", use: "Controle de receitas recorrentes (MRR) e custos de cloud/servidores" },
        { sector: "Saúde", use: "Gestão de pagamentos de consultas e despesas com materiais médicos" },
        { sector: "Educação", use: "Mensalidades recebidas vs custos operacionais de escolas/cursos" },
        { sector: "Varejo", use: "Entradas de vendas diárias e saídas com fornecedores" },
      ]
    },
    {
      id: "web-search",
      icon: Search,
      name: "Agente Web Search",
      tier: "Todos os planos (avançado no Premium)",
      tierBadge: "FREE",
      color: "from-blue-500/10 to-cyan-500/10",
      iconColor: "text-blue-600",
      description: `O Agente Web Search realiza pesquisas avançadas na web com base em temas, fontes e localidades específicas. Ele não apenas busca informações, mas entrega resumos citados, links confiáveis e anexos quando apropriado.

No plano Premium, o agente opera com recursos aprofundados, maior cobertura de fontes e capacidade de análise comparativa entre concorrentes, tendências de mercado e oportunidades comerciais.

Ideal para prospecção, pesquisa de mercado, monitoramento de concorrência e descoberta de oportunidades de negócio.`,
      examples: [
        '"Busque 3 pousadas em Fortaleza com potencial de vendas para o meu produto e me envie nomes, sites e telefones."',
        '"Pesquise tendências de \'roupas fitness\' na região de SP nos últimos 90 dias e me entregue 5 insights com 3 links confiáveis."',
        '"Compare \'CRM para clínicas\' e \'ERP para clínicas\' focando em custo-benefício e me mande um resumo objetivo."'
      ],
      useCases: [
        { sector: "Tecnologia", use: "Pesquisa de concorrentes, tecnologias emergentes e cases de sucesso" },
        { sector: "Saúde", use: "Descoberta de fornecedores de equipamentos médicos e tendências em saúde preventiva" },
        { sector: "Educação", use: "Tendências pedagógicas, ferramentas educacionais e instituições parceiras" },
        { sector: "Varejo", use: "Análise de concorrência, tendências de consumo e novos nichos de mercado" },
      ]
    },
    {
      id: "scrape",
      icon: Database,
      name: "Agente de Scrape/Extract",
      tier: "Todos os planos (avançado no Premium)",
      tierBadge: "FREE",
      color: "from-purple-500/10 to-pink-500/10",
      iconColor: "text-purple-600",
      description: `O Agente de Scrape extrai dados estruturados de fontes permitidas, APIs oficiais e portais de dados abertos. Ele gera relatórios em CSV/JSON com campos personalizados e filtros avançados.

IMPORTANTE: Trabalhamos apenas com fontes que autorizam extração de dados nos termos de uso ou via APIs oficiais. Respeitamos totalmente a propriedade intelectual e políticas de privacidade.

No Premium, a capacidade de extração é ampliada com suporte a mais formatos, maior volume de dados e processamento paralelo.`,
      examples: [
        '"Faça o scrape do site exemplo.com e me envie os contatos comerciais (nome, e-mail e telefone) em CSV."',
        '"Busque no portal de dados abertos de Curitiba o dataset de aluguel residencial de 2024 e me mande um CSV filtrado por bairro."',
        '"Use a API \'imoveis_publicos\' e traga título, preço e bairro (até 200 itens) em JSON."'
      ],
      useCases: [
        { sector: "Tecnologia", use: "Extração de dados de APIs públicas para integração com sistemas internos" },
        { sector: "Saúde", use: "Coleta de dados públicos de saúde para pesquisas e análises epidemiológicas" },
        { sector: "Educação", use: "Extração de datasets educacionais para análises de desempenho acadêmico" },
        { sector: "Varejo", use: "Monitoramento de preços de concorrentes (APIs permitidas) e análise de mercado" },
      ]
    },
    {
      id: "sdr",
      icon: UserCheck,
      name: "Agente SDR",
      tier: "Business/Premium",
      tierBadge: "BUSINESS",
      color: "from-orange-500/10 to-red-500/10",
      iconColor: "text-orange-600",
      description: `O Agente SDR (Sales Development Representative) é o vendedor virtual da sua empresa. Ele qualifica leads automaticamente, conduz conversas humanizadas, coleta informações de perfil (nome, telefone, empresa, interesse, urgência, orçamento) e marca reuniões no Google Calendar com confirmação automática.

O fluxo completo do SDR inclui: recepção do lead → qualificação (fit alto/médio/baixo) → oferta de reunião ou orçamento → agendamento → confirmação e lembrete via WhatsApp e email.

Com o SDR, sua equipe de vendas foca apenas em fechar negócios, enquanto o agente cuida de toda a qualificação e agendamento inicial.`,
      examples: [
        '"Qualifique este lead: Ana, 11 95118-2561, interessada em demo — me diga o fit e o próximo passo."',
        '"Ofereça dois horários (qui 10:30 ou sex 14:00) e, se ela aceitar, marque a reunião e envie confirmação."',
        '"Com base na conversa, monte um orçamento enxuto e me envie para revisão."'
      ],
      useCases: [
        { sector: "Tecnologia", use: "Qualificação de leads para SaaS, agendamento de demos e follow-ups automáticos" },
        { sector: "Saúde", use: "Triagem de pacientes, agendamento de consultas e confirmação de presença" },
        { sector: "Educação", use: "Qualificação de interessados em cursos e agendamento de aulas experimentais" },
        { sector: "Varejo", use: "Atendimento pré-venda, agendamento de visitas e orçamentos personalizados" },
      ]
    },
    {
      id: "marketing",
      icon: TrendingUp,
      name: "Agente de Marketing",
      tier: "Business/Premium",
      tierBadge: "BUSINESS",
      color: "from-pink-500/10 to-rose-500/10",
      iconColor: "text-pink-600",
      description: `O Agente de Marketing foca em análise e otimização de campanhas do Google Ads. Ele monitora performance, identifica termos negativos para adicionar, sugere ajustes de lance e orçamento, e envia alertas quando detecta quedas bruscas de CTR ou estouros de gasto diário.

Receba relatórios comparativos entre períodos, insights acionáveis e recomendações baseadas em dados reais das suas campanhas, tudo via WhatsApp em linguagem simples e objetiva.

Elimine a necessidade de ficar entrando no painel do Google Ads diariamente — o agente te avisa sobre qualquer anomalia e oportunidade de otimização.`,
      examples: [
        '"Analise minha campanha de Google Ads \'Tráfego – Outubro\' e me diga 3 termos negativos para adicionar."',
        '"Porque meu gasto diário está estourando na metade do dia?"',
        '"Compare a última semana com a anterior e me envie 5 insights rápidos com links dos relatórios."'
      ],
      useCases: [
        { sector: "Tecnologia", use: "Otimização de campanhas SaaS, análise de CAC e sugestões de keywords" },
        { sector: "Saúde", use: "Monitoramento de campanhas de clínicas e ajustes de segmentação por região" },
        { sector: "Educação", use: "Otimização de anúncios de cursos, análise de conversão por turma" },
        { sector: "Varejo", use: "Ajustes de campanhas sazonais, Black Friday, e identificação de produtos com baixo ROI" },
      ]
    },
    {
      id: "agendamento",
      icon: Calendar,
      name: "Agente de Agendamento",
      tier: "Business/Premium",
      tierBadge: "BUSINESS",
      color: "from-indigo-500/10 to-blue-500/10",
      iconColor: "text-indigo-600",
      description: `O Agente de Agendamento integra-se ao Google Calendar, Drive e Tasks para gerenciar compromissos, arquivos e tarefas direto do WhatsApp. Crie eventos, anexe documentos, configure lembretes e sincronize tudo com a equipe sem abrir nenhum app.

Ele também cria tarefas no Google Tasks com prazos definidos e envia lembretes automáticos no WhatsApp. Perfeito para equipes remotas que vivem no WhatsApp e precisam centralizar agenda e documentos.

Todos os eventos e tarefas criados ficam sincronizados com o Google Workspace, mantendo compatibilidade total com ferramentas corporativas.`,
      examples: [
        '"Marque uma reunião com o João amanhã às 15:00 no Google Meet e envie o link para ele e para mim."',
        '"Crie uma tarefa no Google Tasks: \'Enviar proposta para Maria\' com prazo sexta às 17:00."',
        '"Anexe o arquivo \'Proposta_v3.pdf\' do Drive na reunião de segunda às 10:00."'
      ],
      useCases: [
        { sector: "Tecnologia", use: "Agendamento de sprints, reuniões de alinhamento e prazos de entrega" },
        { sector: "Saúde", use: "Marcação de consultas, lembretes de exames e agendamento de cirurgias" },
        { sector: "Educação", use: "Agendamento de aulas, reuniões com pais e eventos escolares" },
        { sector: "Varejo", use: "Visitas a fornecedores, reuniões com representantes e prazos de pedidos" },
      ]
    },
    {
      id: "dev",
      icon: Code,
      name: "Agente de Dev",
      tier: "Business/Premium",
      tierBadge: "BUSINESS",
      color: "from-gray-500/10 to-slate-500/10",
      iconColor: "text-gray-600",
      description: `O Agente de Dev é um assistente técnico especializado em múltiplas linguagens de programação. Ele faz debugging de código, sugere otimizações, cria testes unitários e oferece suporte técnico instantâneo via WhatsApp.

Suporta JavaScript, TypeScript, Python, Go, PHP, Java e muitas outras linguagens. Respeita limites de confidencialidade e não armazena código sensível — apenas processa e responde com sugestões.

Ideal para desenvolvedores que precisam de um "pair programmer" disponível 24/7 sem custo adicional por uso.`,
      examples: [
        '"Revise meu endpoint `/api/checkout`; estou recebendo erro 500 quando envio `customerId` vazio."',
        '"Otimize esta query Postgres que ficou lenta ao filtrar por `created_at` no último mês."',
        '"Sugira testes unitários para o módulo de cobrança e me mostre exemplos de casos de borda."'
      ],
      useCases: [
        { sector: "Tecnologia", use: "Debugging de APIs, otimização de queries e code reviews automáticos" },
        { sector: "Saúde", use: "Desenvolvimento de sistemas internos de gestão clínica e integrações HL7" },
        { sector: "Educação", use: "Criação de plataformas de ensino e sistemas de gestão acadêmica" },
        { sector: "Varejo", use: "Desenvolvimento de e-commerce, integrações com ERPs e automação de estoque" },
      ]
    },
    {
      id: "video",
      icon: Video,
      name: "Agente de Vídeo – Google Veo 3",
      tier: "Business/Premium (cota maior no Premium)",
      tierBadge: "BUSINESS",
      color: "from-violet-500/10 to-purple-500/10",
      iconColor: "text-violet-600",
      description: `O Agente de Vídeo usa a tecnologia Google Veo 3 para criar vídeos profissionais a partir de prompts e roteiros. Gere clipes curtos para stories, anúncios, apresentações de produtos ou conteúdo de marketing em minutos.

Você define o roteiro, formato (1080x1920 para stories, 1920x1080 para YouTube), duração e estilo visual. O agente pode gerar múltiplas variações para você escolher a melhor.

No plano Premium, você tem cota maior de minutos de geração, permitindo escalar a produção de vídeos sem preocupação.`,
      examples: [
        '"Crie um vídeo de 30s em 1080x1920 com o roteiro: \'Bem-vindo ao Meu Agente...\' e me envie duas variações."',
        '"Adapte este roteiro para clínicas odontológicas e gere um vídeo curto para stories."',
        '"Monte um storyboard com 6 cenas e legendas e depois exporte o MP4 final."'
      ],
      useCases: [
        { sector: "Tecnologia", use: "Vídeos de produto, demos animados e conteúdo para redes sociais" },
        { sector: "Saúde", use: "Vídeos educativos sobre procedimentos e campanhas de conscientização" },
        { sector: "Educação", use: "Videoaulas curtas, apresentações animadas e conteúdo para EAD" },
        { sector: "Varejo", use: "Anúncios de produtos, vídeos de unboxing e campanhas promocionais" },
      ]
    },
    {
      id: "premium",
      icon: Zap,
      name: "Agentes Premium Exclusivos",
      tier: "Apenas Premium",
      tierBadge: "PREMIUM",
      color: "from-amber-500/10 to-yellow-500/10",
      iconColor: "text-amber-600",
      description: `Os Agentes Premium são exclusivos do plano mais avançado e incluem 4 especializações adicionais:

**Agente de Confirmação:** entra em contato diariamente com leads agendados para confirmar presença, reduzindo no-show. Também faz varredura diária no Google Tasks e lembra tarefas pendentes.

**Agente de Resumo de Grupos:** monitora grupos do WhatsApp escolhidos e envia resumo diário dos pontos mais relevantes das últimas 24h (requer consentimento e observância das regras do grupo).

**Agente de Remarketing:** identifica contatos inativos no histórico do WhatsApp e dispara campanhas de reengajamento com base em funil pré-definido (usa templates aprovados fora da janela de 24h, requer opt-in).

**Agente de Follow-up:** localiza contatos inativos por período configurável (dias, semanas, meses) e aciona lembretes automáticos conforme regra estabelecida.`,
      examples: [
        '"Confirme todas as reuniões agendadas para hoje e me avise quem confirmou."',
        '"Me envie o resumo do grupo \'Equipe Comercial\' das últimas 24h."',
        '"Dispare campanha de remarketing para leads inativos há mais de 30 dias com o template aprovado XYZ."',
        '"Configure follow-up automático para contatos inativos há 7 dias oferecendo desconto de 15%."'
      ],
      useCases: [
        { sector: "Tecnologia", use: "Redução de churn, reengajamento de trials inativos e follow-ups pós-demo" },
        { sector: "Saúde", use: "Confirmação de consultas, lembretes de retorno e campanhas de check-up preventivo" },
        { sector: "Educação", use: "Redução de evasão, follow-up de matrículas e reengajamento de alunos inativos" },
        { sector: "Varejo", use: "Recuperação de carrinhos abandonados, campanhas de pós-venda e recompra" },
      ]
    },
  ];

  const overviewSteps = [
    {
      step: "1",
      title: "Seu cliente fala com você no WhatsApp",
      description:
        "Ele envia mensagens normalmente, como já está acostumado — sem baixar app, sem login, sem fricção.",
    },
    {
      step: "2",
      title: "Os Agentes de IA entendem, classificam e executam",
      description:
        "Cada agente é especialista em uma parte do seu negócio: financeiro, SDR, marketing, agenda, dev e muito mais.",
    },
    {
      step: "3",
      title: "Você acompanha tudo em um app web completo",
      description:
        "Dashboards, relatórios, agenda e tarefas em um painel moderno para você ter visão de dono em tempo real.",
    },
  ];

  const sdrFlow = [
    {
      step: "1",
      title: "Lead chega no WhatsApp",
      description: "Contato inicial via campanha, indicação ou busca orgânica.",
    },
    {
      step: "2",
      title: "Coleta rápida de informações",
      description: "Nome, telefone, empresa, interesse, urgência, orçamento.",
    },
    {
      step: "3",
      title: "Qualificação automática",
      description: "Fit (alto/médio/baixo) e definição da próxima ação.",
    },
    {
      step: "4",
      title: "Oferta de reunião ou orçamento",
      description: "Apresenta 2 opções de horário ou prepara orçamento resumido.",
    },
    {
      step: "5",
      title: "Agendamento automático",
      description: "Cria evento no Google Calendar e envia link de acesso.",
    },
    {
      step: "6",
      title: "Confirmação e lembrete",
      description: "Envia confirmação via WhatsApp e email, com lembrete 1h antes.",
    },
  ];

  const appFeatures = [
    {
      icon: BarChart,
      name: "Dashboard em tempo real",
      description:
        "Visão consolidada de receitas, despesas, saldo e gráficos de evolução diária por categoria.",
    },
    {
      icon: DollarSign,
      name: "Gestão financeira inteligente",
      description: "Categorias inteligentes, validação de duplicatas e acompanhamento de caixa.",
    },
    {
      icon: Target,
      name: "Metas e previsões",
      description:
        "Crie metas de economia, compra ou crescimento com acompanhamento visual de progresso.",
    },
    {
      icon: Calendar,
      name: "Agenda completa",
      description:
        "Calendário integrado com Google Calendar para organizar reuniões, compromissos e lembretes.",
    },
    {
      icon: ListChecks,
      name: "Tarefas e rotinas",
      description: "Organize tarefas recorrentes, priorize o que importa e delegue para os agentes.",
    },
    {
      icon: Bell,
      name: "Alertas inteligentes",
      description:
        "Notificações de contas vencendo, metas próximas, saldo baixo e oportunidades de otimização.",
    },
    {
      icon: Settings,
      name: "Configurações avançadas",
      description:
        "Personalize integrações, segurança, times e fluxos de atendimento em poucos cliques.",
    },
    {
      icon: Zap,
      name: "Orquestração de agentes",
      description: "Controle quais agentes atuam em cada jornada e quais regras eles devem seguir.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-brand-950 via-background to-background">
        <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800b_1px,transparent_1px),linear-gradient(to_bottom,#8080800b_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25)_0,_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(244,244,245,0.1)_0,_transparent_55%)] h-full w-full" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-12 px-4 pb-20 pt-24 sm:px-6 lg:flex-row lg:items-center lg:px-8 lg:pb-28 lg:pt-28">
          <div className="max-w-xl space-y-6">
            <Badge variant="outline" className="border-brand-500/40 bg-background/80 px-4 py-1 text-xs font-medium uppercase tracking-wide text-brand-500">
              Como Funciona na Prática
            </Badge>

            <h1 className="text-balance text-4xl font-semibold tracking-tight leading-normal pb-2 text-gradient sm:text-5xl lg:text-6xl">
              Do WhatsApp ao resultado,
              <span className="block">em uma orquestra de Agentes de IA.</span>
            </h1>

            <p className="text-lg text-text-muted sm:text-xl">
              O Meu Agente conecta conversas do WhatsApp com agentes especializados e um app web poderoso.
              Em poucos minutos, você tem uma equipe completa de IA trabalhando 24/7 para o seu negócio.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => (window.location.href = "/planos")}
              >
                Ver planos e começar hoje
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-border/60 bg-background/70 backdrop-blur sm:w-auto"
                onClick={() => window.open("https://app.meuagente.api.br", "_blank")}
              >
                Assistir demo em 3 minutos
              </Button>
            </div>

            <div className="grid gap-4 pt-4 text-sm text-text-muted sm:grid-cols-3">
              <div className="rounded-xl border border-border/60 bg-background/60 p-4">
                <p className="text-xs uppercase tracking-wide text-text-muted/80">Tempo médio de ativação</p>
                <p className="mt-2 text-2xl font-semibold text-text">menos de 1 dia</p>
              </div>
              <div className="rounded-xl border border-border/60 bg-background/60 p-4">
                <p className="text-xs uppercase tracking-wide text-text-muted/80">Canais</p>
                <p className="mt-2 text-2xl font-semibold text-text">WhatsApp + Web</p>
              </div>
              <div className="rounded-xl border border-border/60 bg-background/60 p-4">
                <p className="text-xs uppercase tracking-wide text-text-muted/80">Equipe de IA</p>
                <p className="mt-2 text-2xl font-semibold text-text">8+ agentes prontos</p>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-xl self-stretch lg:self-auto">
            <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] border border-brand-500/20 bg-gradient-to-br from-brand-500/10 via-transparent to-brand-900/30 shadow-[0_0_60px_rgba(15,23,42,0.8)]" />
            <Card className="relative h-full min-h-[320px] overflow-hidden rounded-[2.25rem] border-border/60 bg-background/80 shadow-2xl backdrop-blur">
              <CardHeader className="border-b border-border/40 pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-base font-semibold text-text">
                      Jornada em tempo real
                    </CardTitle>
                    <CardDescription className="text-xs text-text-muted">
                      Como os agentes atuam na conversa do seu cliente.
                    </CardDescription>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="space-y-3 text-sm">
                  {overviewSteps.map((item) => (
                    <div key={item.step} className="flex gap-3 rounded-xl border border-border/50 bg-surface/60 p-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500/10 text-xs font-semibold text-brand-500">
                        {item.step}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-text">{item.title}</p>
                        <p className="text-xs text-text-muted">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-2 flex flex-wrap items-center gap-3 border-t border-border/40 pt-4 text-xs text-text-muted">
                  <div className="inline-flex items-center gap-2 rounded-full bg-surface/60 px-3 py-1">
                    <CheckCircle className="h-3.5 w-3.5 text-emerald-500" />
                    <span>Sem código, sem complexidade técnica</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-surface/60 px-3 py-1">
                    <Zap className="h-3.5 w-3.5 text-amber-400" />
                    <span>Ativo 24/7 em todos os planos</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* VISÃO EM CAMADAS */}
      <section className="border-b bg-surface/40 py-16 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:px-8">
          <div className="max-w-xl space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-text sm:text-4xl">
              Uma arquitetura pensada para escalar junto com seu time.
            </h2>
            <p className="text-base text-text-muted sm:text-lg">
              O Meu Agente conecta seus canais, orquestra os agentes de IA e ainda oferece um app web
              completo para gestão. Tudo isso com segurança, alta disponibilidade e foco em resultado.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-text-muted">
              <li className="flex gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                <span>Integração nativa com WhatsApp Business.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                <span>Agentes especialistas para cada área do seu negócio.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                <span>App web para gestão, relatórios e visão estratégica.</span>
              </li>
            </ul>
          </div>

          <div className="grid flex-1 gap-4 sm:grid-cols-2">
            <Card className="relative overflow-hidden border-border/70 bg-gradient-to-br from-brand-500/10 via-background to-surface">
              <CardHeader className="pb-3">
                <Badge variant="secondary" className="mb-2 rounded-full bg-emerald-500/10 text-xs font-semibold text-emerald-500">
                  Camada 1
                </Badge>
                <CardTitle className="text-lg">Conversas no WhatsApp</CardTitle>
                <CardDescription className="text-xs text-text-muted">
                  Clientes falando com sua marca no canal que eles já usam todos os dias.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-xs text-text-muted">
                <p>Entrada única para suporte, vendas, financeiro, agendamentos e muito mais.</p>
                <p>Sem mudança de comportamento para o seu cliente final.</p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-border/70 bg-gradient-to-br from-amber-500/10 via-background to-surface">
              <CardHeader className="pb-3">
                <Badge variant="secondary" className="mb-2 rounded-full bg-amber-500/10 text-xs font-semibold text-amber-400">
                  Camada 2
                </Badge>
                <CardTitle className="text-lg">Agentes de IA especializados</CardTitle>
                <CardDescription className="text-xs text-text-muted">
                  Cada agente cuida de uma parte específica da operação, sem você precisar gerenciar tudo.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-xs text-text-muted">
                <p>Financeiro, SDR, marketing, agenda, dev, vídeo e agentes premium.</p>
                <p>Orquestrados por regras inteligentes para garantir consistência e escala.</p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-border/70 bg-gradient-to-br from-sky-500/10 via-background to-surface sm:col-span-2">
              <CardHeader className="pb-3">
                <Badge variant="secondary" className="mb-2 rounded-full bg-sky-500/10 text-xs font-semibold text-sky-400">
                  Camada 3
                </Badge>
                <CardTitle className="text-lg">App web e visão de dono</CardTitle>
                <CardDescription className="text-xs text-text-muted">
                  Um painel completo para você acompanhar tudo o que os agentes estão fazendo.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 text-xs text-text-muted md:grid-cols-3">
                <div>
                  <p className="font-medium text-text">Indicadores</p>
                  <p className="mt-1 text-text-muted">MRR, funil, taxa de resposta, agendamentos e muito mais.</p>
                </div>
                <div>
                  <p className="font-medium text-text">Operação</p>
                  <p className="mt-1 text-text-muted">Contas, tarefas, agenda, campanhas e fluxos ativos.</p>
                </div>
                <div>
                  <p className="font-medium text-text">Configuração</p>
                  <p className="mt-1 text-text-muted">
                    Times, permissões, regras dos agentes e integrações em um só lugar.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AGENTES EM TABS */}
      <section className="border-b bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 sm:items-center sm:text-center">
            <Badge variant="outline" className="border-border/70 bg-surface/60 px-3 py-1 text-xs font-medium uppercase tracking-wide">
              Orquestração de Agentes
            </Badge>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-text sm:text-4xl">
              Todos os agentes que compõem a sua equipe de IA.
            </h2>
            <p className="max-w-3xl text-sm text-text-muted sm:text-base">
              Em vez de um chatbot genérico, você terá agentes especialistas conversando com seus clientes,
              monitorando campanhas, cuidando do caixa e organizando sua agenda automaticamente.
            </p>
          </div>

          <Tabs defaultValue="financeiro" className="space-y-8">
            <ScrollArea className="-mx-4 w-[calc(100%+2rem)] sm:mx-0 sm:w-full">
              <TabsList className="mx-4 inline-flex h-auto flex-nowrap gap-2 rounded-full border border-border/60 bg-surface/80/80 p-1 shadow-sm backdrop-blur-sm sm:mx-0 sm:flex-wrap">
                {agents.map((agent) => (
                  <TabsTrigger
                    key={agent.id}
                    value={agent.id}
                    className="group relative flex items-center gap-2 rounded-full border border-transparent px-4 py-2 text-xs sm:text-sm font-medium text-text-muted transition-colors data-[state=active]:border-border data-[state=active]:bg-background data-[state=active]:text-text data-[state=active]:shadow-sm hover:bg-surface-2 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-900/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <agent.icon className={`h-4 w-4 ${agent.iconColor}`} />
                    <span>{agent.name}</span>
                    <Badge
                      variant="secondary"
                      className="ml-1 hidden rounded-full px-2 py-0.5 text-[10px] uppercase tracking-wide sm:inline-flex"
                    >
                      {agent.tierBadge}
                    </Badge>
                  </TabsTrigger>
                ))}
              </TabsList>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>

            {agents.map((agent) => (
              <TabsContent key={agent.id} value={agent.id} className="mt-0">
                <Card className={`overflow-hidden border-border/70 bg-gradient-to-br ${agent.color}`}>
                  <div className="grid gap-8 p-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:p-8">
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-background/80 backdrop-blur">
                          <agent.icon className={`h-7 w-7 ${agent.iconColor}`} />
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <CardTitle className="text-2xl">{agent.name}</CardTitle>
                            <Badge variant="secondary" className="text-[10px] uppercase tracking-wide">
                              {agent.tierBadge}
                            </Badge>
                          </div>
                          <CardDescription className="mt-1 text-xs text-text-muted">
                            {agent.tier}
                          </CardDescription>
                        </div>
                      </div>

                      <div className="space-y-3 text-sm text-text-muted">
                        {agent.description.split("\n\n").map((paragraph, idx) => (
                          <p key={idx} className="leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-3 pt-2 text-xs text-text-muted">
                        <div className="inline-flex items-center gap-1 rounded-full bg-background/70 px-3 py-1">
                          <CheckCircle className="h-3.5 w-3.5 text-emerald-500" />
                          <span>Operando 24/7 junto com o seu time.</span>
                        </div>
                        <div className="inline-flex items-center gap-1 rounded-full bg-background/70 px-3 py-1">
                          <Zap className="h-3.5 w-3.5 text-amber-400" />
                          <span>Configurável por regras, sem código.</span>
                        </div>
                      </div>

                      <div className="pt-3">
                        <Button
                          size="sm"
                          className="rounded-full"
                          onClick={() => window.open("https://app.meuagente.api.br", "_blank")}
                        >
                          {agent.tierBadge === "FREE"
                            ? "Testar este agente agora"
                            : `Liberar no meu plano ${agent.tierBadge === "BUSINESS" ? "Business" : "Premium"}`}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-6 rounded-3xl border border-border/60 bg-background/80 p-4 text-xs text-text-muted backdrop-blur">
                      <div>
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-text-muted/80">
                          Exemplos de prompts reais
                        </p>
                        <div className="space-y-2">
                          {agent.examples.map((example, idx) => (
                            <div key={idx} className="rounded-xl border border-border/40 bg-surface/70 p-3">
                              <p className="font-mono text-[11px] leading-relaxed">{example}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="border-t border-border/60 pt-4">
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-text-muted/80">
                          Casos de uso em diferentes setores
                        </p>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {agent.useCases.map((useCase, idx) => (
                            <div key={idx} className="rounded-xl border border-border/40 bg-surface/60 p-3">
                              <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-text">
                                {useCase.sector}
                              </p>
                              <p className="text-[11px] leading-relaxed text-text-muted">{useCase.use}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* SDR FLOW – TIMELINE */}
      <section className="border-b bg-surface/40 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <Badge variant="outline" className="border-border/70 bg-background/60 px-3 py-1 text-xs uppercase tracking-wide">
              Fluxo SDR Automatizado
            </Badge>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-text sm:text-4xl">
              Como o Agente SDR leva cada lead até a reunião marcada.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-text-muted sm:text-base">
              Veja a jornada completa, passo a passo, desde o primeiro contato até a confirmação da
              reunião — tudo automatizado, mas com tom humano.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {sdrFlow.map((item, index) => (
              <Card
                key={item.step}
                className="relative flex-1 border-border/70 bg-background/80 p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute -top-4 left-4 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-900 to-brand-700 text-xs font-semibold text-white shadow-lg">
                  {item.step}
                </div>
                {index < sdrFlow.length - 1 && (
                  <div className="pointer-events-none absolute right-[-18px] top-1/2 hidden h-[1px] w-10 -translate-y-1/2 bg-gradient-to-r from-brand-900/40 to-transparent md:block" />
                )}
                <div className="mt-4 space-y-2">
                  <h3 className="text-sm font-semibold text-text">{item.title}</h3>
                  <p className="text-xs text-text-muted">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-text-muted sm:flex-row">
            <div className="inline-flex items-center gap-2 rounded-full bg-background/70 px-4 py-2">
              <CheckCircle className="h-3.5 w-3.5 text-emerald-500" />
              <span>
                O SDR virtual faz a triagem completa e só entrega para o humano quando o lead está pronto para
                fechar.
              </span>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="border-border/70 bg-background/70"
              onClick={() => window.open("https://app.meuagente.api.br", "_blank")}
            >
              Ver o SDR funcionando na prática
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* APP WEB */}
      <section className="border-b bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center">
            <div className="space-y-4">
              <Badge variant="outline" className="border-border/70 bg-surface/60 px-3 py-1 text-xs uppercase tracking-wide">
                App web do Meu Agente
              </Badge>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-text sm:text-4xl">
                Painel moderno para enxergar tudo que seus agentes estão fazendo.
              </h2>
              <p className="text-sm text-text-muted sm:text-base">
                Enquanto os agentes atuam nas conversas, o app web reúne indicadores, tarefas, agenda e
                relatórios em um único lugar. É aqui que você toma decisões rápidas e enxergam o impacto real
                da IA no seu negócio.
              </p>
              <ul className="mt-4 grid gap-3 text-sm text-text-muted sm:grid-cols-2">
                <li className="flex gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                  <span>Visualize a operação em tempo real, sem abrir mil abas.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                  <span>Identifique gargalos e oportunidades de otimização em minutos.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                  <span>Crie metas e acompanhe resultados por time, campanha ou canal.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                  <span>Pensado para ser perfeito tanto em desktop quanto em notebook.</span>
                </li>
              </ul>
            </div>

            <Card className="relative overflow-hidden rounded-3xl border-border/70 bg-gradient-to-b from-surface/80 to-background shadow-xl">
              <CardHeader className="flex flex-row items-center justify-between border-b border-border/60 pb-3">
                <div>
                  <CardTitle className="text-sm">Visão do app web</CardTitle>
                  <CardDescription className="text-xs text-text-muted">
                    Representação ilustrativa do painel Meu Agente.
                  </CardDescription>
                </div>
                <div className="flex gap-1.5">
                  <span className="h-1.5 w-6 rounded-full bg-emerald-500/80" />
                  <span className="h-1.5 w-6 rounded-full bg-amber-400/80" />
                  <span className="h-1.5 w-6 rounded-full bg-sky-400/80" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="grid gap-3 text-xs text-text-muted sm:grid-cols-[1.2fr_1fr]">
                  <div className="space-y-3 rounded-2xl border border-border/60 bg-surface/80 p-3">
                    <div className="flex items-center justify-between text-[11px] text-text-muted">
                      <span>Resumo financeiro</span>
                      <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-500">
                        +18% mês
                      </span>
                    </div>
                    <div className="flex items-end gap-1">
                      <div className="h-16 flex-1 rounded-full bg-emerald-500/20" />
                      <div className="h-10 flex-1 rounded-full bg-emerald-500/30" />
                      <div className="h-20 flex-1 rounded-full bg-emerald-500/40" />
                      <div className="h-12 flex-1 rounded-full bg-emerald-500/25" />
                      <div className="h-24 flex-1 rounded-full bg-emerald-500/60" />
                    </div>
                  </div>
                  <div className="space-y-2 rounded-2xl border border-border/60 bg-surface/80 p-3">
                    <p className="text-[11px] font-medium text-text">Agendamentos do dia</p>
                    <ul className="space-y-1.5 text-[11px]">
                      <li className="flex justify-between">
                        <span>Demo SaaS • João</span>
                        <span className="text-text-muted">10:30</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Onboarding • Clínica Vida</span>
                        <span className="text-text-muted">14:00</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Reunião comercial • Loja Fit</span>
                        <span className="text-text-muted">16:15</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid gap-3 text-xs text-text-muted sm:grid-cols-3">
                  {appFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex gap-2 rounded-2xl border border-border/60 bg-surface/80 p-3"
                    >
                      <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-500/10">
                        <feature.icon className="h-4 w-4 text-brand-700" />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-text">{feature.name}</p>
                        <p className="text-[11px] leading-snug text-text-muted">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Pronto para ver esses agentes trabalhando pelo seu negócio?
          </h2>
          <p className="mt-4 text-balance text-sm text-white/80 sm:text-base">
            Escolha seu plano, conecte seu WhatsApp e ative os agentes mais relevantes para a sua operação.
            Em menos de 24h, você já pode ter uma equipe completa de IA rodando na sua empresa.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="w-full bg-white text-brand-950 hover:bg-white/90 sm:w-auto"
              onClick={() => (window.location.href = "/planos")}
            >
              Ver planos e preços
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full border-2 border-white/40 bg-transparent text-white hover:bg-white/10 sm:w-auto"
              onClick={() => window.open("https://app.meuagente.api.br", "_blank")}
            >
              Começar gratuitamente agora
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComoFunciona;

