import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-brand-900 to-brand-700 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      {/* Floating elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
          Pronto para Revolucionar Sua Operação?
        </h2>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
          Comece grátis agora e veja como Agentes de IA podem transformar seu negócio
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            size="lg" 
            className="group relative overflow-hidden bg-white text-brand-900 hover:bg-white/90 shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105 text-lg px-8 py-6"
          >
            Criar Conta Gratuita
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-900/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="group border-2 border-white/30 hover:border-white/50 hover:bg-white/10 text-white transition-all duration-300 text-lg px-8 py-6"
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Falar com Especialista
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-white/70 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Sem cartão de crédito</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Configuração em minutos</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Suporte em português</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
