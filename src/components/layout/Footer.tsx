import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone } from "lucide-react";
import NewsletterSignup from "@/components/NewsletterSignup";

const Footer = () => {
  const footerLinks = {
    produto: [
      { name: "Como Funciona", href: "/como-funciona" },
      { name: "Planos e Preços", href: "/planos" },
      { name: "Agentes de IA", href: "/como-funciona#agentes" },
      { name: "Integrações", href: "/como-funciona#integracoes" },
    ],
    recursos: [
      { name: "Blog", href: "/blog" },
      { name: "FAQ", href: "/faq" },
      { name: "Guia do Usuário", href: "/guia-do-usuario" },
      { name: "Status do Sistema", href: "/status-do-sistema" },
    ],
    empresa: [
      { name: "Sobre Nós", href: "/sobre-nos" },
      { name: "Contato", href: "/contato" },
      { name: "Trabalhe Conosco", href: "/trabalhe-conosco" },
      { name: "Parceiros", href: "#" },
    ],
    legal: [
      { name: "Termos de Uso", href: "/termos-de-uso" },
      { name: "Política de Privacidade", href: "/politica-de-privacidade" },
      { name: "LGPD", href: "/politica-de-privacidade#lgpd" },
      { name: "Cookies", href: "/politica-de-privacidade#cookies-e-tecnologias-semelhantes" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/meuagente", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/meu_agente", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/company/meuagente", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com/@meuagente", label: "YouTube" },
  ];

  return (
    <footer className="bg-surface-2 border-t border-border/50">
      {/* Newsletter section */}
      <div className="bg-section-dark py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              🚀 Fique Por Dentro das Novidades
            </h3>
            <p className="text-white/80">
              Receba dicas semanais de automação, IA e produtividade direto no seu email
            </p>
          </div>
          <div className="max-w-md mx-auto">
            <NewsletterSignup variant="compact" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="mb-12">
          {/* Logo centralizado em tablet/desktop e mobile */}
          <div className="flex justify-center mb-8">
            <img
              src="/logo-horizontal-preto.png"
              alt="Meu Agente"
              className="h-16 sm:h-20 w-auto dark:hidden"
            />
            <img
              src="/logo-horizontal-branco.png"
              alt="Meu Agente"
              className="h-16 sm:h-20 w-auto hidden dark:block"
            />
          </div>

          {/* Grid responsivo: texto/contato + menus alinhados na horizontal */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
            {/* Texto e contato */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left md:max-w-sm">
              <p className="text-sm text-text-muted mb-6">
                Transforme seu WhatsApp em uma equipe de Agentes de IA trabalhando 24/7 para automatizar seu negócio.
              </p>

              {/* Contact info */}
              <div className="space-y-2 mb-6">
                <a
                  href="mailto:contato@meuagente.api.br"
                  className="flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  contato@meuagente.api.br
                </a>
                <a
                  href="tel:+5511951182561"
                  className="flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (11) 95118-2561
                </a>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-3 justify-center md:justify-start">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:bg-surface hover:border-accent transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="w-4 h-4 text-text-muted" />
                  </a>
                ))}
              </div>
            </div>

            {/* Menus – alinhados à altura do texto em md+ */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
              <div>
                <h3 className="font-semibold text-text mb-4 text-sm">Produto</h3>
                <ul className="space-y-2">
                  {footerLinks.produto.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-text-muted hover:text-text transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-text mb-4 text-sm">Recursos</h3>
                <ul className="space-y-2">
                  {footerLinks.recursos.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-text-muted hover:text-text transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-text mb-4 text-sm">Empresa</h3>
                <ul className="space-y-2">
                  {footerLinks.empresa.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-text-muted hover:text-text transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-text mb-4 text-sm">Legal</h3>
                <ul className="space-y-2">
                  {footerLinks.legal.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-text-muted hover:text-text transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-text-muted">
              © 2025 Meu Agente. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm text-text-muted">
              <span>Made with ❤️ in Brasil</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
