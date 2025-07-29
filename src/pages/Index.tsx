import { useState } from "react";
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
  );
};

export default Index;
