import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart, Star, TrendingUp, Shield, Zap } from "lucide-react";

export const HeroSection = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-accent/5 via-background to-primary/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
            <TrendingUp className="w-4 h-4" />
            Portal de Ofertas Confiáveis
          </div>
          
          {/* Main Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/f7cc05a4-5306-4868-8918-fe7525db9254.png" 
              alt="Hub da Promo" 
              className="h-20 w-auto"
            />
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
            As Melhores
            <span className="block text-accent"> Ofertas do Mercado Livre</span>
            <span className="block text-primary text-3xl md:text-4xl lg:text-5xl mt-2">em um só lugar</span>
          </h1>
          
          {/* Slogan */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto font-medium">
            <span className="text-accent font-semibold">Clique com confiança.</span>{" "}
            <span className="text-primary font-semibold">Compre com vantagem.</span>
          </p>
          
          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-muted-foreground font-medium">
                4.9/5 em confiabilidade
              </span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border"></div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-5 h-5 text-success" />
              <span className="font-medium">+50.000 cliques seguros</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={scrollToProducts}
              size="lg" 
              className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold group shadow-lg hover:shadow-xl transition-all"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Ver Ofertas Agora
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Zap className="w-5 h-5 mr-2" />
              Como Funciona
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-4 bg-card rounded-lg border border-border/50 shadow-sm">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-3">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">100% Seguro</h3>
              <p className="text-sm text-muted-foreground text-center">Redirecionamento direto para o Mercado Livre oficial</p>
            </div>
            
            <div className="flex flex-col items-center p-4 bg-card rounded-lg border border-border/50 shadow-sm">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mb-3">
                <TrendingUp className="w-6 h-6 text-success" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Melhores Preços</h3>
              <p className="text-sm text-muted-foreground text-center">Ofertas verificadas e atualizadas diariamente</p>
            </div>
            
            <div className="flex flex-col items-center p-4 bg-card rounded-lg border border-border/50 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Fácil e Rápido</h3>
              <p className="text-sm text-muted-foreground text-center">Um clique para acessar as melhores promoções</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};