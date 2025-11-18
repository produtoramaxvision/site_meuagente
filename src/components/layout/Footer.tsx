import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone } from "lucide-react";

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
      { name: "Guia do Usuário", href: "/faq" },
      { name: "Status do Sistema", href: "#" },
    ],
    empresa: [
      { name: "Sobre Nós", href: "#" },
      { name: "Contato", href: "/contato" },
      { name: "Trabalhe Conosco", href: "#" },
      { name: "Parceiros", href: "#" },
    ],
    legal: [
      { name: "Termos de Uso", href: "#" },
      { name: "Política de Privacidade", href: "#" },
      { name: "LGPD", href: "#" },
      { name: "Cookies", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-surface-2 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-900 to-brand-700 flex items-center justify-center">
                <span className="text-white font-bold text-sm">MA</span>
              </div>
              <span className="text-xl font-bold text-gradient">Meu Agente</span>
            </div>
            <p className="text-sm text-text-muted mb-6 max-w-xs">
              Transforme seu WhatsApp em uma equipe de Agentes de IA trabalhando 24/7 para automatizar seu negócio.
            </p>
            
            {/* Contact info */}
            <div className="space-y-2 mb-6">
              <a href="mailto:contato@meuagente.com" className="flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors">
                <Mail className="w-4 h-4" />
                contato@meuagente.com
              </a>
              <a href="tel:+5511999999999" className="flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors">
                <Phone className="w-4 h-4" />
                (11) 99999-9999
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:bg-surface hover:border-brand-900/30 transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-4 h-4 text-text-muted" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div>
            <h3 className="font-semibold text-text mb-4 text-sm">Produto</h3>
            <ul className="space-y-2">
              {footerLinks.produto.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-text-muted hover:text-text transition-colors">
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
                  <a href={link.href} className="text-sm text-text-muted hover:text-text transition-colors">
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
                  <a href={link.href} className="text-sm text-text-muted hover:text-text transition-colors">
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
                  <a href={link.href} className="text-sm text-text-muted hover:text-text transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-text-muted">
              © 2025 Meu Agente. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm text-text-muted">
              <span>CNPJ: 00.000.000/0001-00</span>
              <span>•</span>
              <span>Made with ❤️ in Brasil</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
