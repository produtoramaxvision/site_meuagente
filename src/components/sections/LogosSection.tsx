import {
  Shield,
  Award,
  Zap,
  Cpu,
  HeartPulse,
  BookOpen,
  ShoppingBag,
  BarChart3,
  Handshake,
} from "lucide-react";
import { Link } from "react-router-dom";

const LogosSection = () => {
  const badges = [
    { icon: Shield, label: "LGPD Compliant", href: "/politica-de-privacidade" },
    { icon: Award, label: "Segurança Garantida", href: "/termos-de-uso" },
    { icon: Zap, label: "99.9% Uptime", href: "/status-do-sistema" },
  ];

  const sectors = [
    { label: "Tecnologia", icon: Cpu },
    { label: "Saúde", icon: HeartPulse },
    { label: "Educação", icon: BookOpen },
    { label: "Varejo", icon: ShoppingBag },
    { label: "Finanças", icon: BarChart3 },
    { label: "Consultoria", icon: Handshake },
  ];

  return (
    <section className="py-16 bg-surface/50 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          {badges.map((badge, index) => (
            <Link
              key={index}
              to={badge.href}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:border-accent transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <badge.icon className="w-5 h-5 icon-accent" />
              <span className="text-sm font-semibold text-text">{badge.label}</span>
            </Link>
          ))}
        </div>

        {/* Trusted by sectors */}
        <div className="text-center">
          <p className="text-sm text-text-muted mb-6 font-medium">
            Confiança de empresas dos setores:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <div
                  key={index}
                  className="group inline-flex items-center gap-3 rounded-full border border-border/60 bg-background/70 px-4 py-2 text-xs sm:text-sm text-text-muted shadow-sm transition-all duration-300 hover:border-accent hover:bg-surface/80 hover:text-text"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-surface/70 icon-accent group-hover:bg-text group-hover:text-background transition-colors duration-300">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="font-medium">{sector.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
