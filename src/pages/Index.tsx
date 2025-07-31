import { useState } from "react";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProductShowcase } from "@/components/ProductShowcase";
import { BenefitsSection } from "@/components/BenefitsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
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
        <title>Hub da Promo - As Melhores Ofertas do Mercado Livre | Clique com Confiança</title>
        <meta name="description" content="Portal de ofertas confiáveis do Mercado Livre. Clique com confiança. Compre com vantagem. As melhores promoções em um só lugar." />

        {/* Open Graph */}
        <meta property="og:title" content="Hub da Promo - As Melhores Ofertas do Mercado Livre" />
        <meta property="og:description" content="Clique com confiança. Compre com vantagem. Seu portal de ofertas confiáveis do Mercado Livre." />
        <meta property="og:image" content="/lovable-uploads/f7cc05a4-5306-4868-8918-fe7525db9254.png" />
        <meta property="og:url" content="https://hubdapromo.com.br" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hub da Promo - As Melhores Ofertas do Mercado Livre" />
        <meta name="twitter:description" content="Clique com confiança. Compre com vantagem." />
        <meta name="twitter:image" content="/lovable-uploads/f7cc05a4-5306-4868-8918-fe7525db9254.png" />
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
            <Header />
            <HeroSection />
            <div id="products">
              <ProductShowcase affiliateLinks={affiliateLinks} />
            </div>
            <BenefitsSection />
            <TestimonialsSection />
            <CTASection />
            <Footer />
          </>
        )}
      </div>
    </>
  );
};

export default Index;
