import { useState } from "react";
import { Helmet } from "react-helmet";
import { HeroSection } from "@/components/HeroSection";
import { ProductShowcase } from "@/components/ProductShowcase";
import { BenefitsSection } from "@/components/BenefitsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { AffiliateManager } from "@/components/AffiliateManager";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

const Index = () => {
  const [showAffiliateManager, setShowAffiliateManager] = useState(false);
  const [affiliateLinks, setAffiliateLinks] = useState<Record<number, string>>({});

  const handleLinksUpdate = (links: Record<number, string>) => {
    setAffiliateLinks(links);
  };

  return (
    <>
      <Helmet>
        <title>Presentes para o Dia dos Pais | Ferramentas com Desconto</title>
        <meta name="description" content="Presentes úteis e acessíveis para o Dia dos Pais — com frete grátis e compra segura no Mercado Livre." />

        {/* Open Graph */}
        <meta property="og:title" content="Ofertas de Ferramentas para o Dia dos Pais" />
        <meta property="og:description" content="Parafusadeira, kits e chave de impacto com até 49% OFF. Envio garantido pelo Mercado Livre." />
        <meta property="og:image" content="/images/image1.png" />
        <meta property="og:url" content="https://seusite.com" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/images/image1.png" />
      </Helmet>

      <div className="min-h-screen">
        {/* Admin Button */}
        <div className="fixed top-4 right-4 z-50">
          <Button
            onClick={() => setShowAffiliateManager(!showAffiliateManager)}
            className="bg-primary hover:bg-primary/90 shadow-lg"
            size="sm"
          >
            <Settings className="w-4 h-4 mr-2" />
            {showAffiliateManager ? "Ver Landing Page" : "Gerenciar Links"}
          </Button>
        </div>

        {showAffiliateManager ? (
          <AffiliateManager onLinksUpdate={handleLinksUpdate} />
        ) : (
          <>
            <HeroSection />
            <div id="products">
              <ProductShowcase affiliateLinks={affiliateLinks} />
            </div>
            <BenefitsSection />
            <TestimonialsSection />
            <CTASection />
          </>
        )}
      </div>
    </>
  );
};

export default Index;
