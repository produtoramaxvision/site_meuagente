import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Sparkles,
  ShieldCheck,
  Clock3,
  CheckCircle2,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().optional(),
  type: z.enum(["duvida", "orcamento", "suporte", "parceria"], {
    required_error: "Selecione o tipo de solicitação",
  }),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contato = () => {
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log("Formulário enviado:", data);

    // Simula envio real do formulário
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Mensagem enviada!",
      description: "Recebemos seu contato e retornaremos em breve pelo canal informado.",
    });

    reset();
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: ["contato@meuagente.api.br", "suporte@meuagente.api.br"],
    },
    {
      icon: Phone,
      title: "Telefone / WhatsApp",
      details: ["(11) 95118-2561"],
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      details: ["Segunda a Sexta: 8h-18h", "Sábado: 9h-13h"],
    },
    {
      icon: MapPin,
      title: "Localização",
      details: ["São Paulo, Brasil"],
    },
  ];

  const supportHighlights = [
    {
      icon: Clock3,
      title: "< 24h úteis",
      description: "Tempo médio de resposta para novos contatos comerciais.",
    },
    {
      icon: ShieldCheck,
      title: "Suporte humano + IA",
      description: "Você fala com especialistas, apoiados por agentes de IA.",
    },
    {
      icon: CheckCircle2,
      title: "Onboarding guiado",
      description: "Acompanhamos a implementação até o primeiro resultado.",
    },
  ];

  const contactFaqs = [
    {
      question: "Qual o melhor canal para falar sobre planos e preços?",
      answer:
        "Para dúvidas comerciais e planos, use o formulário ao lado selecionando \"Orçamento\" ou fale direto no WhatsApp. Assim direcionamos seu contato para o time certo mais rápido.",
    },
    {
      question: "Como funciona o suporte técnico após contratar?",
      answer:
        "Clientes dos planos Business e Premium contam com suporte prioritário via WhatsApp, email e dentro do app, com SLAs específicos. Nos demais planos, o suporte é assíncrono via email e central de ajuda.",
    },
    {
      question: "Posso agendar uma demo guiada?",
      answer:
        "Sim. Basta selecionar o tipo de solicitação \"Orçamento\" ou \"Parceria\" e indicar no campo de mensagem os melhores horários. Nosso time de SDR usa os próprios agentes para marcar a reunião com você.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-surface/40 to-background relative overflow-hidden">
      {/* Background decorativo */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-brand-900/10 blur-3xl" />
        <div className="absolute top-1/3 -right-40 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-brand-700/10 blur-3xl" />
      </div>

      <main className="relative z-10">
        {/* HERO + resumo */}
        <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-brand-950 via-background to-background py-20 sm:py-24">
          <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800b_1px,transparent_1px),linear-gradient(to_bottom,#8080800b_1px,transparent_1px)] bg-[size:14px_24px]" />
          <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-start lg:px-8">
            <div className="max-w-xl">
              <Badge className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border-emerald-500/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide mb-3">
                <Sparkles className="h-3.5 w-3.5" />
                Fale com quem constrói o Meu Agente
              </Badge>

              <h1 className="text-balance text-4xl font-semibold tracking-tight leading-normal pb-2 text-gradient sm:text-5xl lg:text-6xl">
                Vamos desenhar o próximo passo da sua operação com IA.
              </h1>
              <p className="mt-4 text-base text-text-muted sm:text-lg">
                Use esta página para falar com nosso time sobre planos, parcerias, suporte técnico ou dúvidas
                estratégicas sobre como os Agentes de IA podem funcionar no seu negócio.
              </p>

              <div className="mt-6 grid gap-4 text-sm text-text-muted sm:grid-cols-3">
                <Card className="border-border/60 bg-background/80 p-4">
                  <p className="text-xs uppercase tracking-wide text-text-muted/80">Ponto de partida</p>
                  <p className="mt-2 text-sm font-semibold text-text">
                    Entendemos seu contexto antes de propor qualquer solução.
                  </p>
                </Card>
                <Card className="border-border/60 bg-background/80 p-4">
                  <p className="text-xs uppercase tracking-wide text-text-muted/80">Formato</p>
                  <p className="mt-2 text-sm font-semibold text-text">
                    Conversa humana, apoiada por exemplos práticos dos agentes.
                  </p>
                </Card>
                <Card className="border-border/60 bg-background/80 p-4">
                  <p className="text-xs uppercase tracking-wide text-text-muted/80">Resultado</p>
                  <p className="mt-2 text-sm font-semibold text-text">
                    Próximos passos claros para você testar ou implantar o Meu Agente.
                  </p>
                </Card>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-text-muted">
                <span className="rounded-full bg-surface/60 px-3 py-1">
                  Mais de 8 agentes de IA prontos para o seu WhatsApp.
                </span>
                <span className="rounded-full bg-surface/60 px-3 py-1">
                  Ideal para quem quer tirar o projeto do papel em poucos dias.
                </span>
              </div>
            </div>

            {/* Card de contato principal */}
            <div className="w-full max-w-xl lg:ml-auto">
              <Card className="relative overflow-hidden border-border/70 bg-background/90 shadow-2xl backdrop-blur">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 via-transparent to-emerald-500/10 pointer-events-none" />

                <div className="relative px-6 pt-6 pb-4 border-b border-border/60">
                  <p className="text-xs font-semibold uppercase tracking-wide text-text-muted/80 mb-1">
                    Passos para falar com a gente
                  </p>
                  <div className="flex flex-wrap gap-2 text-[11px]">
                    <span className="rounded-full bg-surface/80 px-3 py-1 text-text-muted">
                      1. Conte quem você é
                    </span>
                    <span className="rounded-full bg-surface/80 px-3 py-1 text-text-muted">
                      2. Diga como podemos ajudar
                    </span>
                    <span className="rounded-full bg-surface/80 px-3 py-1 text-text-muted">
                      3. Escolha o tipo de solicitação
                    </span>
                  </div>
                </div>

                <div className="relative px-6 pb-6 pt-4">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Bloco: seus dados */}
                    <div className="space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-text-muted/80">
                        Seus dados
                      </p>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <Label htmlFor="name" className="text-xs font-medium text-text mb-1.5 block">
                            Nome *
                          </Label>
                          <Input
                            id="name"
                            {...register("name")}
                            placeholder="Seu nome completo"
                            className={`w-full ${errors.name ? "border-error animate-shake" : ""}`}
                          />
                          {errors.name && (
                            <p className="text-[11px] text-error mt-1">{errors.name.message}</p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-xs font-medium text-text mb-1.5 block">
                            Email *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            {...register("email")}
                            placeholder="voce@empresa.com"
                            className={`w-full ${errors.email ? "border-error animate-shake" : ""}`}
                          />
                          {errors.email && (
                            <p className="text-[11px] text-error mt-1">{errors.email.message}</p>
                          )}
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-xs font-medium text-text mb-1.5 block">
                          Telefone / WhatsApp (opcional)
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          {...register("phone")}
                          placeholder="(11) 95118-2561"
                          className="w-full"
                        />
                      </div>
                    </div>

                    {/* Bloco: sobre sua necessidade */}
                    <div className="space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-text-muted/80">
                        Sobre o que você quer falar?
                      </p>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <Label htmlFor="type" className="text-xs font-medium text-text mb-1.5 block">
                            Tipo de solicitação *
                          </Label>
                          <Select onValueChange={(value) => setValue("type", value as any)}>
                            <SelectTrigger
                              className={`w-full text-sm ${errors.type ? "border-error animate-shake" : ""}`}
                            >
                              <SelectValue placeholder="Selecione..." />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="duvida">Dúvida geral</SelectItem>
                              <SelectItem value="orcamento">Orçamento / planos</SelectItem>
                              <SelectItem value="suporte">Suporte técnico</SelectItem>
                              <SelectItem value="parceria">Parcerias e integrações</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.type && (
                            <p className="text-[11px] text-error mt-1">{errors.type.message}</p>
                          )}
                        </div>
                        <div className="text-[11px] text-text-muted bg-surface/70 border border-border/60 rounded-xl p-3">
                          <p className="font-semibold text-text mb-1">Dica rápida</p>
                          <p>
                            Quanto mais contexto você trouxer (segmento, tamanho da operação, canais), mais
                            personalizada será nossa resposta.
                          </p>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="message" className="text-xs font-medium text-text mb-1.5 block">
                          Mensagem *
                        </Label>
                        <Textarea
                          id="message"
                          {...register("message")}
                          placeholder="Conte em poucas linhas o cenário atual e o que você espera dos Agentes de IA..."
                          className={`w-full min-h-[140px] text-sm ${
                            errors.message ? "border-error animate-shake" : ""
                          }`}
                        />
                        {errors.message && (
                          <p className="text-[11px] text-error mt-1">{errors.message.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-3 pt-2">
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full"
                      >
                        {isSubmitting ? (
                          "Enviando..."
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            Enviar mensagem para o time
                          </>
                        )}
                      </Button>
                      <p className="text-[11px] text-text-muted text-center">
                        Usamos seus dados apenas para retornar o contato e nunca compartilhamos suas informações com
                        terceiros sem autorização.
                      </p>
                    </div>
                  </form>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Canais de atendimento + WhatsApp CTA + redes */}
        <section className="border-b border-border/60 bg-surface/40 py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-2 max-w-xl">
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text">
                  Canais de atendimento e tempo de resposta.
                </h2>
                <p className="text-sm text-text-muted">
                  Escolha o canal que faz mais sentido para você agora. Nosso time combina automação com atendimento
                  humano para garantir que nada fique sem resposta.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 text-xs text-text-muted">
                {supportHighlights.map((item, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center gap-2 rounded-full bg-background/80 border border-border/60 px-3 py-1"
                  >
                    <item.icon className="h-3.5 w-3.5 text-brand-700" />
                    <span className="font-medium text-text">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1.1fr)]">
              {/* Cards de contato */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="p-5 bg-background/90 backdrop-blur-sm border-border/60 hover:border-brand-900/40 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-xl bg-brand-900/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-5 w-5 text-brand-900" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-text-muted/80">
                          {info.title}
                        </p>
                        <div className="mt-1 space-y-0.5">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-sm text-text">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* WhatsApp + redes sociais */}
              <div className="space-y-4">
                <Card className="p-5 bg-gradient-to-br from-emerald-500/10 via-background to-emerald-500/10 border-emerald-500/30">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="flex items-center gap-3">
                      <div className="h-11 w-11 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <MessageSquare className="h-6 w-6 text-emerald-500" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-text">Prefere resolver tudo pelo WhatsApp?</p>
                        <p className="text-xs text-text-muted">
                          Fale com nosso time agora mesmo em uma conversa guiada pelos próprios Agentes de IA.
                        </p>
                      </div>
                    </div>
                    <Button
                      className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white"
                      onClick={() => window.open("https://wa.me/5511951182561", "_blank")}
                    >
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Abrir WhatsApp
                    </Button>
                  </div>
                </Card>

                <Card className="p-5 bg-background/90 border-border/60">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-text">Acompanhe novidades e bastidores</p>
                      <p className="text-xs text-text-muted">
                        Conteúdo sobre IA aplicada a negócios, tutoriais e lançamentos de novos agentes.
                      </p>
                    </div>
                    <div className="grid grid-cols-4 gap-2 sm:gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-10 w-10 sm:h-11 sm:w-11 hover:scale-110 hover:border-brand-900/50 transition-all"
                        onClick={() => window.open("https://facebook.com/meuagente", "_blank")}
                      >
                        <Facebook className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-10 w-10 sm:h-11 sm:w-11 hover:scale-110 hover:border-brand-900/50 transition-all"
                        onClick={() => window.open("https://www.instagram.com/meu_agente", "_blank")}
                      >
                        <Instagram className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-10 w-10 sm:h-11 sm:w-11 hover:scale-110 hover:border-brand-900/50 transition-all"
                        onClick={() => window.open("https://linkedin.com/company/meuagente", "_blank")}
                      >
                        <Linkedin className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-10 w-10 sm:h-11 sm:w-11 hover:scale-110 hover:border-brand-900/50 transition-all"
                        onClick={() => window.open("https://youtube.com/@meuagente", "_blank")}
                      >
                        <Youtube className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ focado em contato */}
        <section className="bg-background py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text mb-3">
                Antes de falar com a gente, talvez sua dúvida já esteja respondida.
              </h2>
              <p className="text-sm sm:text-base text-text-muted">
                Selecionamos algumas perguntas frequentes específicas sobre contato, suporte e implantação do Meu
                Agente.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              {contactFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="border border-border/60 rounded-xl bg-background/90 px-4 sm:px-5"
                >
                  <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-text hover:text-brand-900">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-text-muted leading-relaxed pt-1">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-8 sm:mt-10 text-center text-xs text-text-muted">
              <p>
                Precisa de algo mais específico? Envie sua mensagem pelo formulário acima ou fale direto com nosso time
                no WhatsApp. Estamos prontos para ajudar.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contato;
