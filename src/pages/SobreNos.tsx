import SEO from "@/components/SEO";
import { createOrganizationSchema } from "@/lib/seo";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutProduct } from "@/components/about/AboutProduct";
import { CompanyTimeline } from "@/components/about/CompanyTimeline";
import { ValuesBento } from "@/components/about/ValuesBento";
import { ResponsibleAI } from "@/components/about/ResponsibleAI";
import { WhatsappExamples } from "@/components/about/WhatsappExamples";
import { TeamGrid } from "@/components/about/TeamGrid";

const SobreNos = () => {
  return (
    <>
      <SEO
        title="Sobre Nós – Meu Agente | Nossa Missão e Equipe"
        description="Conheça a história do Meu Agente, nossa missão de transformar negócios com IA no WhatsApp e a equipe por trás da inovação."
        keywords={[
          "sobre meu agente",
          "história meu agente",
          "missão ia",
          "equipe ia",
          "visão ia",
        ]}
        canonicalUrl="/sobre-nos"
        structuredData={createOrganizationSchema()}
      />
      
      <div className="min-h-screen bg-background flex flex-col">
        <AboutHero />
        <AboutProduct />
        <ValuesBento />
        <CompanyTimeline />
        <ResponsibleAI />
        <WhatsappExamples />
        <TeamGrid />
      </div>
    </>
  );
};

export default SobreNos;
