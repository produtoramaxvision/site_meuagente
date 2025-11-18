import { Card } from "@/components/ui/card";
import { Shield, Lock, Database, FileCheck } from "lucide-react";

const SecuritySection = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "LGPD Compliant",
      description: "Conformidade total com a Lei Geral de Proteção de Dados. Canal do DPO disponível e direitos do titular garantidos.",
      color: "from-green-500/10 to-emerald-500/10",
      iconColor: "text-green-600",
    },
    {
      icon: Lock,
      title: "Criptografia de Ponta a Ponta",
      description: "Todos os dados são protegidos com criptografia de nível empresarial, tanto em trânsito quanto em repouso.",
      color: "from-blue-500/10 to-cyan-500/10",
      iconColor: "text-blue-600",
    },
    {
      icon: Database,
      title: "Backups Seguros",
      description: "Política 3-2-1 com testes periódicos de restauração. Backups diários off-site no plano Premium.",
      color: "from-purple-500/10 to-pink-500/10",
      iconColor: "text-purple-600",
    },
    {
      icon: FileCheck,
      title: "Opt-out Fácil",
      description: "Palavra de parada \"SAIR\" ou \"pare\" para cancelar notificações a qualquer momento. Controle total sobre seus dados.",
      color: "from-orange-500/10 to-red-500/10",
      iconColor: "text-orange-600",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gradient mb-4">
            Segurança e Conformidade
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Seus dados protegidos com os mais altos padrões de segurança
          </p>
        </div>

        {/* Security features grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {securityFeatures.map((feature, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden p-8 bg-gradient-to-br ${feature.color} border-border/50 hover:border-brand-900/30 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl`}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-background/50 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-text mb-3">{feature.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{feature.description}</p>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Card>
          ))}
        </div>

        {/* Additional security info */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl glass border border-border/50">
            <h3 className="text-2xl font-bold text-text mb-6 text-center">
              Compromisso com a Privacidade
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-text mb-2">✅ Garantimos:</h4>
                <ul className="space-y-2 text-sm text-text-muted">
                  <li>• Seus dados nunca são compartilhados com terceiros</li>
                  <li>• Transparência total sobre uso e armazenamento</li>
                  <li>• Direito de portabilidade e exclusão a qualquer momento</li>
                  <li>• Auditoria regular de segurança</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-text mb-2">🔒 Certificações:</h4>
                <ul className="space-y-2 text-sm text-text-muted">
                  <li>• ISO 27001 em processo</li>
                  <li>• Compliance LGPD completo</li>
                  <li>• Infraestrutura em data centers seguros</li>
                  <li>• Monitoramento 24/7</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
