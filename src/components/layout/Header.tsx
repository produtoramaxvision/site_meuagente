import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Início", href: "/" },
    { name: "Como Funciona", href: "/como-funciona" },
    { name: "Planos", href: "/planos" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contato", href: "/contato" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-900 to-brand-700 flex items-center justify-center">
                <span className="text-white font-bold text-sm">MA</span>
              </div>
              <span className="text-xl font-bold text-gradient">Meu Agente</span>
            </a>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-text-muted hover:text-text transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Entrar
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-brand-900 to-brand-700 hover:from-brand-800 hover:to-brand-600 text-white">
              Começar Grátis
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-surface-2 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6 text-text" />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 py-4 space-y-2 animate-fade-in">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-text-muted hover:text-text hover:bg-surface-2 rounded-lg transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="px-4 pt-4 space-y-2">
              <Button variant="outline" size="sm" className="w-full">
                Entrar
              </Button>
              <Button size="sm" className="w-full bg-gradient-to-r from-brand-900 to-brand-700 text-white">
                Começar Grátis
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
