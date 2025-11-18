import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { MessageSquare } from "lucide-react";

const ExamplesSection = () => {
  const examples = [
    {
      category: "Financeiro",
      color: "from-green-500/10 to-emerald-500/10",
      examples: [
        {
          message: '"Registra uma entrada de R$ 1.200,00 na categoria Assinaturas — Plano Business — com data 01/10/2025."',
          response: "✅ Entrada registrada com sucesso!"
        },
        {
          message: '"Exporta um CSV do período de 01/09 a 30/09 com as categorias Marketing e Operação."',
          response: "📊 Relatório gerado e exportado!"
        }
      ]
    },
    {
      category: "Web Search",
      color: "from-blue-500/10 to-cyan-500/10",
      examples: [
        {
          message: '"Busque 3 pousadas em Fortaleza com potencial de vendas para o meu produto e me envie nomes, sites e telefones."',
          response: "🔍 Pesquisa concluída com 3 resultados qualificados!"
        },
        {
          message: '"Pesquise tendências de \'roupas fitness\' na região de SP e me entregue 5 insights com 3 links confiáveis."',
          response: "📈 Análise de tendências pronta!"
        }
      ]
    },
    {
      category: "SDR",
      color: "from-orange-500/10 to-red-500/10",
      examples: [
        {
          message: '"Qualifique este lead: Ana, interessada em demo — me diga o fit e o próximo passo."',
          response: "✅ Lead qualificado como High-Fit! Próximo: agendar demo."
        },
        {
          message: '"Ofereça dois horários (qui 10:30 ou sex 14:00) e, se ela aceitar, marque a reunião e envie confirmação."',
          response: "📅 Reunião agendada e confirmação enviada!"
        }
      ]
    },
    {
      category: "Marketing",
      color: "from-pink-500/10 to-rose-500/10",
      examples: [
        {
          message: '"Analise minha campanha de Google Ads \'Tráfego – Outubro\' e me diga 3 termos negativos para adicionar."',
          response: "📊 Análise concluída com 3 recomendações!"
        },
        {
          message: '"Compare a última semana com a anterior e me envie 5 insights rápidos."',
          response: "📈 Comparativo pronto com insights acionáveis!"
        }
      ]
    },
    {
      category: "Agendamento",
      color: "from-indigo-500/10 to-blue-500/10",
      examples: [
        {
          message: '"Marque uma reunião com o João amanhã às 15:00 no Google Meet e envie o link."',
          response: "📅 Reunião criada e link enviado!"
        },
        {
          message: '"Crie uma tarefa no Google Tasks: \'Enviar proposta para Maria\' com prazo sexta às 17:00."',
          response: "✅ Tarefa criada e lembrete configurado!"
        }
      ]
    },
    {
      category: "Dev",
      color: "from-gray-500/10 to-slate-500/10",
      examples: [
        {
          message: '"Revise meu endpoint `/api/checkout`; estou recebendo erro 500 quando envio `customerId` vazio."',
          response: "🐛 Problema identificado! Adicione validação no customerId."
        },
        {
          message: '"Otimize esta query Postgres que ficou lenta ao filtrar por `created_at` no último mês."',
          response: "⚡ Sugestão: adicione índice em created_at + EXPLAIN ANALYZE."
        }
      ]
    },
    {
      category: "Vídeo",
      color: "from-violet-500/10 to-purple-500/10",
      examples: [
        {
          message: '"Crie um vídeo de 30s em 1080x1920 com o roteiro: \'Bem-vindo ao Meu Agente...\' e me envie duas variações."',
          response: "🎬 2 variações de vídeo renderizadas!"
        },
        {
          message: '"Monte um storyboard com 6 cenas e legendas e depois exporte o MP4 final."',
          response: "🎥 Storyboard aprovado e MP4 exportado!"
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gradient mb-4">
            Exemplos Reais de Uso
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Veja como é fácil conversar com seus Agentes de IA
          </p>
        </div>

        {/* Examples tabs */}
        <Tabs defaultValue={examples[0].category} className="w-full">
          <TabsList className="grid grid-cols-3 lg:grid-cols-7 gap-2 h-auto p-2 bg-background/80 backdrop-blur-sm mb-8">
            {examples.map((item, index) => (
              <TabsTrigger 
                key={index} 
                value={item.category}
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-brand-900 data-[state=active]:to-brand-700 data-[state=active]:text-white transition-all duration-300"
              >
                {item.category}
              </TabsTrigger>
            ))}
          </TabsList>

          {examples.map((item, index) => (
            <TabsContent key={index} value={item.category} className="mt-0">
              <div className="grid gap-6 md:grid-cols-2">
                {item.examples.map((example, exIdx) => (
                  <Card
                    key={exIdx}
                    className={`p-6 bg-gradient-to-br ${item.color} border-border/50 hover:border-brand-900/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
                  >
                    <div className="space-y-4">
                      {/* User message */}
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-brand-900/10 flex items-center justify-center flex-shrink-0">
                          <MessageSquare className="w-4 h-4 text-brand-900" />
                        </div>
                        <div className="flex-1">
                          <Badge variant="secondary" className="mb-2 text-xs">
                            Você
                          </Badge>
                          <p className="text-sm text-text leading-relaxed">
                            {example.message}
                          </p>
                        </div>
                      </div>

                      {/* Agent response */}
                      <div className="flex items-start gap-3 pl-11">
                        <div className="flex-1 p-3 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50">
                          <Badge className="mb-2 text-xs bg-success">
                            Agente
                          </Badge>
                          <p className="text-sm text-text-muted">
                            {example.response}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ExamplesSection;
