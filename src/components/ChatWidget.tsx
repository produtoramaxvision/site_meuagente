import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, X, Send } from "lucide-react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre o Meu Agente.", "_blank");
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-brand-900 to-brand-700 text-white shadow-2xl hover:shadow-brand-900/50 hover:scale-110 transition-all duration-300 flex items-center justify-center group animate-float hover:animate-none"
        aria-label="Abrir chat"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
        )}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-white animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] opacity-75"></span>
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-white"></span>
      </button>

      {/* Chat card */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 animate-scale-in">
          <Card className="shadow-2xl border-brand-900/20">
            <CardHeader className="bg-gradient-to-br from-brand-900 to-brand-700 text-white rounded-t-xl">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Fale Conosco</CardTitle>
                  <CardDescription className="text-white/80 text-sm">
                    Estamos online! 🟢
                  </CardDescription>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white/20 rounded-full p-1 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-3">
                <div className="bg-surface-2 rounded-lg p-4 rounded-tl-none">
                  <p className="text-sm text-text-muted">
                    👋 Olá! Como podemos ajudar você hoje?
                  </p>
                </div>
                <div className="bg-surface-2 rounded-lg p-4 rounded-tl-none">
                  <p className="text-sm text-text-muted mb-3">
                    Escolha uma opção ou envie sua dúvida:
                  </p>
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start text-xs"
                      onClick={handleWhatsAppClick}
                    >
                      💰 Quero saber sobre planos
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start text-xs"
                      onClick={handleWhatsAppClick}
                    >
                      🤖 Como funcionam os agentes?
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start text-xs"
                      onClick={handleWhatsAppClick}
                    >
                      📅 Agendar demonstração
                    </Button>
                  </div>
                </div>
              </div>

              <Button
                className="w-full bg-success hover:bg-success/90 text-white"
                onClick={handleWhatsAppClick}
              >
                <Send className="mr-2 h-4 w-4" />
                Continuar no WhatsApp
              </Button>

              <p className="text-xs text-text-muted text-center">
                Respondemos em menos de 2 minutos
              </p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/20 z-40 animate-fade-in"
        ></div>
      )}
    </>
  );
};

export default ChatWidget;

