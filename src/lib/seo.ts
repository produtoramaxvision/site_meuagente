export const createSoftwareApplicationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Meu Agente",
  "description": "Equipe de Agentes de IA no WhatsApp para automação de negócios",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web, WhatsApp",
  "offers": [
    {
      "@type": "Offer",
      "name": "Plano Free",
      "price": "0",
      "priceCurrency": "BRL",
      "description": "Explore sem custo com acesso ao app em nuvem",
    },
    {
      "@type": "Offer",
      "name": "Plano Básico",
      "price": "497",
      "priceCurrency": "BRL",
      "description": "Para profissionais e pequenas equipes com exportação CSV/PDF",
    },
    {
      "@type": "Offer",
      "name": "Plano Business",
      "price": "997",
      "priceCurrency": "BRL",
      "description": "Para empresas com número dedicado, implantação e suporte 24/7",
    },
    {
      "@type": "Offer",
      "name": "Plano Premium",
      "price": "1497",
      "priceCurrency": "BRL",
      "description": "Tudo do Business + agentes exclusivos e backups diários",
    },
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "523",
  },
});

export const createFAQPageSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
    },
  })),
});

export const createArticleSchema = (article: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified: string;
  image: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "author": {
    "@type": "Organization",
    "name": article.author,
  },
  "publisher": {
    "@type": "Organization",
    "name": "Meu Agente",
    "logo": {
      "@type": "ImageObject",
      "url": "https://site.meuagente.api.br/logo-horizontal-preto.png",
    },
  },
  "datePublished": article.datePublished,
  "dateModified": article.dateModified,
  "image": article.image,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": article.url,
  },
});

export const createOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Meu Agente",
  "description": "Agentes de IA no WhatsApp para automação de negócios",
  "url": "https://site.meuagente.api.br",
  "logo": "https://site.meuagente.api.br/logo-horizontal-preto.png",
  "contactPoint": {
    "@type": "ContactPoint",
  "telephone": "+55-11-95118-2561",
    "contactType": "customer service",
    "areaServed": "BR",
    "availableLanguage": ["pt-BR"],
  },
  "sameAs": [
    "https://facebook.com/meuagente",
    "https://www.instagram.com/meu_agente",
    "https://linkedin.com/company/meuagente",
    "https://youtube.com/@meuagente",
  ],
});

