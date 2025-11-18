import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
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
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    
    reset();
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

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-text mb-2">
                        Nome *
                      </Label>
                      <Input
                        id="name"
                        {...register("name")}
                        placeholder="Seu nome completo"
                        className={`w-full ${errors.name ? "border-error animate-shake" : ""}`}
                      />
                      {errors.name && (
                        <p className="text-xs text-error mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-text mb-2">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="seu@email.com"
                        className={`w-full ${errors.email ? "border-error animate-shake" : ""}`}
                      />
                      {errors.email && (
                        <p className="text-xs text-error mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-text mb-2">
                        Telefone (opcional)
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        {...register("phone")}
                        placeholder="(11) 99999-9999"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Label htmlFor="type" className="text-sm font-medium text-text mb-2">
                        Tipo de Solicitação *
                      </Label>
                      <Select onValueChange={(value) => setValue("type", value as any)}>
                        <SelectTrigger className={`w-full ${errors.type ? "border-error animate-shake" : ""}`}>
                          <SelectValue placeholder="Selecione..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="duvida">Dúvida</SelectItem>
                          <SelectItem value="orcamento">Orçamento</SelectItem>
                          <SelectItem value="suporte">Suporte Técnico</SelectItem>
                          <SelectItem value="parceria">Parceria</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.type && (
                        <p className="text-xs text-error mt-1">{errors.type.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-text mb-2">
                      Mensagem *
                    </Label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      placeholder="Conte-nos como podemos ajudar..."
                      className={`w-full min-h-[150px] ${errors.message ? "border-error animate-shake" : ""}`}
                    />
                    {errors.message && (
                      <p className="text-xs text-error mt-1">{errors.message.message}</p>
                    )}
                  </div>

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
                  <h3 className="font-bold text-text mb-2">Prefere WhatsApp?</h3>
                  <p className="text-sm text-text-muted mb-4">
                    Fale conosco diretamente pelo WhatsApp
                  </p>
                  <Button 
                    className="w-full bg-success hover:bg-success/90 text-white"
                    onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Abrir WhatsApp
                  </Button>
                </div>
              </Card>

              {/* Redes sociais */}
              <Card className="p-6 bg-background/80 backdrop-blur-sm border-border/50">
                <h3 className="font-semibold text-text mb-4 text-center">Siga-nos</h3>
                <div className="grid grid-cols-4 gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-full h-12 hover:scale-110 hover:border-brand-900/50 transition-all"
                    onClick={() => window.open("https://facebook.com/meuagente", "_blank")}
                  >
                    <Facebook className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-full h-12 hover:scale-110 hover:border-brand-900/50 transition-all"
                    onClick={() => window.open("https://instagram.com/meuagente", "_blank")}
                  >
                    <Instagram className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-full h-12 hover:scale-110 hover:border-brand-900/50 transition-all"
                    onClick={() => window.open("https://linkedin.com/company/meuagente", "_blank")}
                  >
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-full h-12 hover:scale-110 hover:border-brand-900/50 transition-all"
                    onClick={() => window.open("https://youtube.com/@meuagente", "_blank")}
                  >
                    <Youtube className="w-5 h-5" />
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
