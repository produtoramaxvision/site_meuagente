import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, CheckCircle } from "lucide-react";

interface NewsletterSignupProps {
  variant?: "default" | "compact" | "card";
  title?: string;
  description?: string;
}

const NewsletterSignup = ({ 
  variant = "default",
  title = "📬 Receba Dicas de Automação",
  description = "Aprenda a usar IA para economizar tempo e aumentar conversões. Sem spam, cancele quando quiser."
}: NewsletterSignupProps) => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Email inválido",
        description: "Por favor, digite um email válido.",
        variant: "destructive",
      });
      return;
    }

    // Simular envio
    console.log("Email cadastrado:", email);
    
    setIsSubscribed(true);
    toast({
      title: "Inscrição confirmada! 🎉",
      description: "Você receberá nossas dicas semanais em breve.",
    });
    
    setTimeout(() => {
      setEmail("");
      setIsSubscribed(false);
    }, 3000);
  };

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          placeholder="seu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isSubscribed}
          className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
        />
        <Button 
          type="submit" 
          disabled={isSubscribed}
          className="bg-white text-brand-900 hover:bg-white/90"
        >
          {isSubscribed ? <CheckCircle className="h-4 w-4" /> : <Mail className="h-4 w-4" />}
        </Button>
      </form>
    );
  }

  return (
    <div className={variant === "card" ? "p-6 bg-gradient-to-br from-brand-900/5 to-brand-700/5 border border-brand-900/20 rounded-xl" : ""}>
      <div className="text-center mb-4">
        <h3 className="text-lg font-bold text-text mb-2">{title}</h3>
        <p className="text-sm text-text-muted">{description}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          type="email"
          placeholder="seu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isSubscribed}
          className="w-full"
        />
        <Button 
          type="submit" 
          disabled={isSubscribed}
          className="w-full"
        >
          {isSubscribed ? (
            <>
              <CheckCircle className="mr-2 h-4 w-4" />
              Inscrito!
            </>
          ) : (
            <>
              <Mail className="mr-2 h-4 w-4" />
              Assinar Newsletter
            </>
          )}
        </Button>
        <p className="text-xs text-text-muted text-center">
          Sem spam. Cancele quando quiser.
        </p>
      </form>
    </div>
  );
};

export default NewsletterSignup;

