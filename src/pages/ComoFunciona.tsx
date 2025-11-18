import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  FileText,
  Repeat,
  PhoneCall,
  ArrowRight,
  Zap,
  BarChart,
  Target,
  ListChecks,
  Bell,
  Settings
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
        '"Qualifique este lead: Ana, 11 99999-9999, interessada em demo — me diga o fit e o próximo passo."',
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

  const sdrFlow = [
    { step: "1", title: "Lead chega no WhatsApp", description: "Contato inicial via campanha, indicação ou busca orgânica" },
    { step: "2", title: "Coleta rápida de informações", description: "Nome, telefone, empresa, interesse, urgência, orçamento" },
    { step: "3", title: "Qualificação automática", description: "Fit (alto/médio/baixo) e definição da próxima ação" },
    { step: "4", title: "Oferta de reunião ou orçamento", description: "Apresenta 2 opções de horário ou prepara orçamento resumido" },
    { step: "5", title: "Agendamento automático", description: "Cria evento no Google Calendar e envia link de acesso" },
    { step: "6", title: "Confirmação e lembrete", description: "Envia confirmação via WhatsApp e email, com lembrete 1h antes" },
  ];

  const appFeatures = [
    {
      icon: BarChart,
      name: "Dashboard",
      description: "Visão consolidada de receitas, despesas, saldo e gráficos de evolução diária por categoria.",
    },
    {
      icon: DollarSign,
      name: "Gestão de Contas",
      description: "12 categorias inteligentes, validação de duplicatas e marcação de pagamentos.",
    },
    {
      icon: Target,
      name: "Metas Financeiras",
      description: "Crie metas de economia, compra, viagem ou educação com acompanhamento visual de progresso.",
    },
    {
      icon: Calendar,
      name: "Agenda Completa",
      description: "6 visualizações (dia, semana, mês, lista, timeline, ano) com drag-and-drop de eventos.",
    },
    {
      icon: ListChecks,
      name: "Tarefas",
      description: "Organize tarefas com prioridades, prazos e drag-and-drop para reordenação.",
    },
    {
      icon: FileText,
      name: "Relatórios Avançados",
      description: "Filtros por período/categoria/tipo, gráficos interativos e exportação em múltiplos formatos.",
    },
    {
      icon: Bell,
      name: "Notificações Inteligentes",
      description: "Alertas de contas vencendo, metas próximas, saldo baixo e eventos importantes.",
    },
    {
      icon: Settings,
      name: "Configurações",
      description: "Dados pessoais, segurança, tema claro/escuro, notificações e backups.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero section */}
      <section className="py-20 bg-gradient-to-br from-surface via-background to-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4 px-4 py-1">
            Como Funciona
          </Badge>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gradient mb-6">
            Conheça Seus Agentes de IA
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Cada agente é especializado em uma área específica do seu negócio. Explore abaixo os detalhes, exemplos de uso e casos reais por setor.
          </p>
        </div>
      </section>

      {/* Agents detailed sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {agents.map((agent, index) => (
            <div key={agent.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <Card className={`overflow-hidden bg-gradient-to-br ${agent.color} border-border/50`}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-2xl bg-background/50 backdrop-blur-sm flex items-center justify-center`}>
                        <agent.icon className={`w-8 h-8 ${agent.iconColor}`} />
                      </div>
                      <div>
                        <CardTitle className="text-3xl mb-2">{agent.name}</CardTitle>
                        <Badge variant="secondary" className="text-xs">
                          {agent.tierBadge}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base text-text-muted">
                    {agent.tier}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-8">
                  {/* Description */}
                  <div className="prose prose-sm max-w-none">
                    {agent.description.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="text-text-muted leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Examples */}
                  <div>
                    <h4 className="text-lg font-semibold text-text mb-4">📝 Exemplos de Uso</h4>
                    <div className="space-y-3">
                      {agent.examples.map((example, idx) => (
                        <div key={idx} className="p-4 rounded-lg bg-background/50 border border-border/30">
                          <p className="text-sm text-text font-mono">
                            {example}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Use cases by sector */}
                  <div>
                    <h4 className="text-lg font-semibold text-text mb-4">🎯 Casos de Uso por Setor</h4>
                    <div className="grid gap-4 md:grid-cols-2">
                      {agent.useCases.map((useCase, idx) => (
                        <div key={idx} className="p-4 rounded-lg bg-background/30 border border-border/20">
                          <h5 className="font-semibold text-text text-sm mb-2">{useCase.sector}</h5>
                          <p className="text-xs text-text-muted">{useCase.use}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-border/30">
                    <Button size="lg" className="w-full sm:w-auto" onClick={() => window.open("https://app.meuagente.api.br", "_blank")}>
                      {agent.tierBadge === "FREE" ? "Experimentar Gratuitamente" : `Contratar Plano ${agent.tierBadge === "BUSINESS" ? "Business" : "Premium"}`}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* SDR Flow Diagram */}
      <section className="py-16 bg-surface/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">
              Fluxo Completo do Agente SDR
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Veja como o SDR conduz o lead desde o primeiro contato até a reunião agendada
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sdrFlow.map((item, index) => (
              <Card 
                key={index} 
                className="relative p-6 hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-brand-900 to-brand-700 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                  {item.step}
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-bold text-text mb-2">{item.title}</h3>
                  <p className="text-sm text-text-muted">{item.description}</p>
                </div>
                
                {index < sdrFlow.length - 1 && (
                  <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-brand-900/30" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">
              Recursos Completos do App Web
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Além dos agentes no WhatsApp, você tem acesso a um app web completo para gestão e visualização
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {appFeatures.map((feature, index) => (
              <Card 
                key={index}
                className="group p-6 hover:scale-105 hover:-translate-y-2 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-900/10 to-brand-700/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-brand-900" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-text mb-2">{feature.name}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-brand-900 to-brand-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para Começar?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Escolha seu plano e transforme seu WhatsApp em uma equipe de IA trabalhando 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-brand-900 hover:bg-white/90 shadow-2xl"
              onClick={() => window.location.href = "/planos"}
            >
              Ver Planos e Preços
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10"
              onClick={() => window.open("https://app.meuagente.api.br", "_blank")}
            >
              Começar Gratuitamente
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComoFunciona;

