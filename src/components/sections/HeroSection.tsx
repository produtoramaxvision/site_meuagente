import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-background via-surface to-background overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800b_1px,transparent_1px),linear-gradient(to_bottom,#8080800b_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-72 h-72 glow-blur-soft rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 glow-blur-soft rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/80 backdrop-blur-sm border border-border/50 mt-6 sm:mt-8 mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
          </span>
          <span className="text-sm font-medium text-text-muted">
            Mais de 35 empresas economizam 40h/mês
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 pb-4 leading-normal animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <span className="text-gradient">Transforme Seu WhatsApp em Uma Equipe de{" "}</span>
          <span className="relative inline-block pb-2">
            <span className="relative z-10 text-gradient">Agentes de IA</span>
            <svg className="absolute -bottom-2 left-0 w-full z-0" height="12" viewBox="0 0 300 12" fill="none">
              <path d="M2 10C100 3 200 3 298 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-text/30" />
            </svg>
          </span>
          <span className="text-gradient">{" "}Trabalhando 24/7</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-text-muted max-w-3xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Reduza tempo operacional, eleve conversões e padronize processos com automação inteligente
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button 
            size="lg" 
            className="group relative overflow-hidden btn-primary-gradient shadow-xl-adaptive hover:shadow-2xl-adaptive w-full sm:w-[240px]"
            onClick={() => window.open("https://app.meuagente.api.br", "_blank")}
          >
            Começar Gratuitamente
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="group btn-secondary transition-all duration-300 w-full sm:w-[240px]"
          >
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Ver Como Funciona
          </Button>
        </div>

        {/* Video/Demo placeholder */}
        <div className="max-w-5xl mx-auto animate-scale-in" style={{ animationDelay: "0.4s" }}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl-adaptive border border-border/50 glass">
            <div className="aspect-video bg-gradient-to-br from-surface-2 to-surface-3 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full icon-bg-subtle flex items-center justify-center mx-auto mb-4">
                  <Play className="w-10 h-10 icon-accent" />
                </div>
                <p className="text-text-muted font-medium">Demo em Vídeo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
