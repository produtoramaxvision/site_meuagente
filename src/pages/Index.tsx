import HeroSection from "@/components/sections/HeroSection";
import LogosSection from "@/components/sections/LogosSection";
import WhySection from "@/components/sections/WhySection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import AgentsSection from "@/components/sections/AgentsSection";
import ExamplesSection from "@/components/sections/ExamplesSection";
import PricingSection from "@/components/sections/PricingSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import IntegrationsSection from "@/components/sections/IntegrationsSection";
import SecuritySection from "@/components/sections/SecuritySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FaqSection from "@/components/sections/FaqSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import SEO from "@/components/SEO";
import { createSoftwareApplicationSchema, createOrganizationSchema } from "@/lib/seo";

const Index = () => {
  return (
    <>
      <SEO
        title="Meu Agente – Agentes de IA no WhatsApp para Automatizar Seu Negócio"
        description="Transforme seu WhatsApp em uma equipe de Agentes de IA trabalhando 24/7. Atendimento automatizado, SDR virtual, gestão financeira, relatórios e muito mais. Comece grátis!"
        keywords={["agentes de ia", "automação whatsapp", "chatbot whatsapp", "ia para empresas", "sdr virtual", "atendimento automatizado", "whatsapp business", "automação de vendas"]}
        canonicalUrl="/"
        structuredData={{
          "@context": "https://schema.org",
          "@graph": [
            createSoftwareApplicationSchema(),
            createOrganizationSchema(),
          ],
        }}
      />
      <main className="relative">
        <HeroSection />
        <LogosSection />
        <WhySection />
        <HowItWorksSection />
        <AgentsSection />
        <ExamplesSection />
        <PricingSection />
        <FeaturesSection />
        <IntegrationsSection />
        <SecuritySection />
        <TestimonialsSection />
        <FaqSection />
        <FinalCTASection />
      </main>
    </>
  );
};

export default Index;
