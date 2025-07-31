import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/f7cc05a4-5306-4868-8918-fe7525db9254.png" 
              alt="Hub da Promo" 
              className="h-8 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-primary">hubdapromo.com.br</h1>
              <p className="text-xs text-muted-foreground">Clique com confiança. Compre com vantagem.</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={scrollToProducts}
              className="text-foreground hover:text-accent transition-colors"
            >
              Ofertas
            </button>
            <a href="#depoimentos" className="text-foreground hover:text-accent transition-colors">
              Depoimentos
            </a>
            <a href="#sobre" className="text-foreground hover:text-accent transition-colors">
              Sobre
            </a>
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <Button 
              onClick={scrollToProducts}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Ver Ofertas
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <button 
                onClick={scrollToProducts}
                className="text-left text-foreground hover:text-accent transition-colors"
              >
                Ofertas
              </button>
              <a href="#depoimentos" className="text-foreground hover:text-accent transition-colors">
                Depoimentos
              </a>
              <a href="#sobre" className="text-foreground hover:text-accent transition-colors">
                Sobre
              </a>
              <Button 
                onClick={scrollToProducts}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold w-full mt-2"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Ver Ofertas
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};