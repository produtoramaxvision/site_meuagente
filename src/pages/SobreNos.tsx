import SEO from "@/components/SEO";
import { createOrganizationSchema } from "@/lib/seo";
import { AboutHero } from "@/components/about/AboutHero";
import { CompanyTimeline } from "@/components/about/CompanyTimeline";
import { ValuesBento } from "@/components/about/ValuesBento";
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
        <ValuesBento />
        <CompanyTimeline />
        <TeamGrid />
      </div>
    </>
  );
};

export default SobreNos;
