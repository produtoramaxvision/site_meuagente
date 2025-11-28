import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ChatWidget from "./components/ChatWidget";
import GTM from "./components/GTM";
import Index from "./pages/Index";
import TrabalheConosco from "./pages/TrabalheConosco";
import TermosDeUso from "./pages/TermosDeUso";
import PoliticaDePrivacidade from "./pages/PoliticaDePrivacidade";
import Planos from "./pages/Planos";
import ComoFunciona from "./pages/ComoFunciona";
import Blog from "./pages/Blog";
import StatusDoSistema from "./pages/StatusDoSistema";
import BlogPost from "./pages/BlogPost";
import FAQ from "./pages/FAQ";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";
import SobreNos from "./pages/SobreNos";
import GuiaDoUsuario from "./pages/GuiaDoUsuario";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <GTM gtmId={import.meta.env.VITE_GTM_ID} />
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/termos-de-uso" element={<TermosDeUso />} />
              <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidade />} />
              <Route path="/planos" element={<Planos />} />
              <Route path="/como-funciona" element={<ComoFunciona />} />
              <Route path="/status-do-sistema" element={<StatusDoSistema />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/guia-do-usuario" element={<GuiaDoUsuario />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/sobre-nos" element={<SobreNos />} />
              <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
              <Route path="/contato" element={<Contato />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <ChatWidget />
        </div>
      </BrowserRouter>
    </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
