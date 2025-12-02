import { Button } from "@/components/ui/button";
import { Menu, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { useTheme } from "next-themes";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

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
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-2">
              <img 
                src="/meuagente_logo_transparente-preto.png" 
                alt="Meu Agente" 
                className="h-16 sm:h-20 w-auto dark:hidden"
              />
              <img 
                src="/meuagente_logo_transparente-branco.png" 
                alt="Meu Agente" 
                className="h-16 sm:h-20 w-auto hidden dark:block"
              />
            </a>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
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
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
              aria-label="Alternar tema"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open("https://app.meuagente.api.br", "_blank")}
            >
              Entrar
            </Button>
            <Button
              size="sm"
              className="group relative overflow-hidden btn-primary-gradient shadow-xl-adaptive hover:shadow-2xl-adaptive"
              onClick={() => window.open("https://app.meuagente.api.br", "_blank")}
            >
              <span>Começar Grátis</span>
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700" />
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
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start gap-2"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="ml-4">{theme === "dark" ? "Modo Claro" : "Modo Escuro"}</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => window.open("https://app.meuagente.api.br", "_blank")}
              >
                Entrar
              </Button>
              <Button
                size="sm"
                className="group relative w-full overflow-hidden btn-primary-gradient shadow-xl-adaptive hover:shadow-2xl-adaptive"
                onClick={() => window.open("https://app.meuagente.api.br", "_blank")}
              >
                <span>Começar Grátis</span>
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700" />
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
