import { Shield, Award, Zap } from "lucide-react";

const LogosSection = () => {
  const badges = [
    { icon: Shield, label: "LGPD Compliant" },
    { icon: Award, label: "Segurança Garantida" },
    { icon: Zap, label: "99.9% Uptime" },
  ];

  const sectors = [
    "Tecnologia",
    "Saúde",
    "Educação",
    "Varejo",
    "Finanças",
    "Consultoria",
  ];

  return (
    <section className="py-16 bg-surface/50 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:border-brand-900/30 transition-all duration-300 hover:scale-105"
            >
              <badge.icon className="w-5 h-5 text-brand-900" />
              <span className="text-sm font-semibold text-text">{badge.label}</span>
            </div>
          ))}
        </div>

        {/* Trusted by sectors */}
        <div className="text-center">
          <p className="text-sm text-text-muted mb-6 font-medium">
            Confiança de empresas dos setores:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="px-6 py-2 text-text-muted hover:text-text transition-colors duration-300"
              >
                <span className="font-medium">{sector}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
