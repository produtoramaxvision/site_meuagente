import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Economizamos 40h/mês em tarefas operacionais e aumentamos nossa conversão em 35%. O Agente SDR é simplesmente incrível.",
      author: "Carlos Silva",
      role: "CEO",
      company: "TechStart Innovations",
      initials: "CS",
      color: "from-blue-500 to-cyan-500",
    },
    {
      quote: "O Agente SDR qualifica e agenda reuniões sozinho. Nossa equipe agora foca só em fechar vendas. Game changer!",
      author: "Ana Paula",
      role: "Gerente Comercial",
      company: "Clínica DentalCare",
      initials: "AP",
      color: "from-green-500 to-emerald-500",
    },
    {
      quote: "Nunca imaginei gerenciar finanças pelo WhatsApp. É rápido, prático e os relatórios são perfeitos para meu contador.",
      author: "Roberto Lima",
      role: "Empreendedor Individual",
      company: "Consultoria RL",
      initials: "RL",
      color: "from-purple-500 to-pink-500",
    },
    {
      quote: "A automação de follow-up recuperou leads que considerávamos perdidos. Nosso ROI aumentou 120% em 3 meses.",
      author: "Mariana Costa",
      role: "Head de Marketing",
      company: "EduTech Brasil",
      initials: "MC",
      color: "from-orange-500 to-red-500",
    },
    {
      quote: "O Agente de Vídeo revolucionou nossa produção de conteúdo. Criamos material profissional em minutos, não em dias.",
      author: "Felipe Santos",
      role: "Diretor Criativo",
      company: "Agência Pixel",
      initials: "FS",
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section className="py-24 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gradient mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Resultados reais de empresas que transformaram suas operações
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card
              key={index}
              className="group relative p-8 bg-background/80 backdrop-blur-sm border-border/50 hover:border-brand-900/30 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-brand-900" />
              </div>

              {/* Content */}
              <div className="relative">
                <p className="text-text-muted mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className={`bg-gradient-to-br ${testimonial.color} text-white font-bold`}>
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-text">{testimonial.author}</p>
                    <p className="text-sm text-text-muted">
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-900/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>
            </Card>
          ))}
        </div>

        {/* Additional testimonials row */}
        <div className="grid gap-8 md:grid-cols-2 mt-8 max-w-4xl mx-auto">
          {testimonials.slice(3).map((testimonial, index) => (
            <Card
              key={index}
              className="group relative p-8 bg-background/80 backdrop-blur-sm border-border/50 hover:border-brand-900/30 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-brand-900" />
              </div>

              {/* Content */}
              <div className="relative">
                <p className="text-text-muted mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className={`bg-gradient-to-br ${testimonial.color} text-white font-bold`}>
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-text">{testimonial.author}</p>
                    <p className="text-sm text-text-muted">
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-900/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
