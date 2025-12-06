import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type AnimatedTestimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  className,
}: {
  testimonials: AnimatedTestimonial[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  // OTIMIZAÇÃO: Memoizar rotações para evitar recálculo em cada render
  // Especialmente importante em desktop onde há mais espaço e animações maiores
  const rotations = useMemo(
    () => testimonials.map(() => Math.floor(Math.random() * 21) - 10),
    [testimonials.length]
  );

  return (
    <div
      className={cn(
        "max-w-sm md:max-w-4xl mx-auto px-4 md:px-8 lg:px-12 py-10 md:py-20",
        className,
      )}
    >
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div>
          <div className="relative h-64 md:h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.name}-${index}`}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    rotate: rotations[index],
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.6,
                    scale: isActive(index) ? 1 : 0.96,
                    rotate: isActive(index) ? 0 : rotations[index],
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -30, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    rotate: rotations[index],
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  style={{ willChange: 'transform, opacity' }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center shadow-xl-adaptive"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold text-foreground">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {testimonials[active].designation}
            </p>
            <motion.p 
              className="text-lg text-muted-foreground mt-6 md:mt-8 leading-relaxed"
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              style={{ willChange: 'transform, opacity' }}
            >
              {testimonials[active].quote}
            </motion.p>
          </motion.div>

          <div className="flex gap-4 pt-10 md:pt-12">
            <button
              onClick={handlePrev}
              className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center group/button hover:bg-secondary/80 transition-colors"
              aria-label="Depoimento anterior"
            >
              <ArrowLeft className="h-5 w-5 text-foreground group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center group/button hover:bg-secondary/80 transition-colors"
              aria-label="Próximo depoimento"
            >
              <ArrowRight className="h-5 w-5 text-foreground group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

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

  const animatedTestimonials: AnimatedTestimonial[] = testimonials.map(
    (testimonial) => ({
      quote: testimonial.quote,
      name: testimonial.author,
      designation: `${testimonial.role} • ${testimonial.company}`,
      src: "/placeholder.svg",
    }),
  );

  return (
    <section className="py-24 bg-surface/30 section-texture-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gradient mb-4 pb-2 leading-normal">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Resultados reais de empresas que transformaram suas operações
          </p>
        </div>

        <AnimatedTestimonials
          testimonials={animatedTestimonials}
          autoplay
          className="mt-4 sm:mt-8"
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
