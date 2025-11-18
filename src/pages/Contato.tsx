import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contato = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: ["contato@meuagente.com", "suporte@meuagente.com"],
    },
    {
      icon: Phone,
      title: "Telefone / WhatsApp",
      details: ["(11) 99999-9999"],
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

  return (
    <div className="min-h-screen bg-background">
      {/* Hero section */}
      <section className="py-20 bg-gradient-to-br from-surface via-background to-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gradient mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Estamos prontos para ajudar você a revolucionar sua operação
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Contact form */}
            <div className="lg:col-span-2">
              <Card className="p-8 bg-background/80 backdrop-blur-sm border-border/50">
                <h2 className="text-2xl font-bold text-text mb-6">
                  Envie sua Mensagem
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                        Nome *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Seu nome completo"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="seu@email.com"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">
                        Telefone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="type" className="block text-sm font-medium text-text mb-2">
                        Tipo de Solicitação *
                      </label>
                      <Select name="type" required>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Selecione..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="duvida">Dúvida</SelectItem>
                          <SelectItem value="orcamento">Orçamento</SelectItem>
                          <SelectItem value="suporte">Suporte Técnico</SelectItem>
                          <SelectItem value="parceria">Parceria</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                      Mensagem *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Conte-nos como podemos ajudar..."
                      className="w-full min-h-[150px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-brand-900 to-brand-700 hover:from-brand-800 hover:to-brand-600 text-white"
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="p-6 bg-background/80 backdrop-blur-sm border-border/50 hover:border-brand-900/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-900/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-brand-900" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text mb-2">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-sm text-text-muted">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}

              {/* WhatsApp CTA */}
              <Card className="p-6 bg-gradient-to-br from-success/10 to-emerald-500/10 border-success/20">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-8 h-8 text-success" />
                  </div>
                  <h3 className="font-bold text-text mb-2">Preferir WhatsApp?</h3>
                  <p className="text-sm text-text-muted mb-4">
                    Fale conosco diretamente pelo WhatsApp
                  </p>
                  <Button className="w-full bg-success hover:bg-success/90 text-white">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Abrir WhatsApp
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
