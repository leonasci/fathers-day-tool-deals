import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Star } from "lucide-react";
import heroImage from "@/assets/hero-tools.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
            <Heart className="w-4 h-4" />
            Dia dos Pais 2025
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            O Presente que Ele
            <span className="block text-accent"> Sempre Quis</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl">
            Ferramentas profissionais da <strong>The Black Tools</strong> para o pai que merece o melhor. 
            Potência, qualidade e o melhor custo-benefício do mercado.
          </p>
          
          {/* Social Proof */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-primary-foreground/80">+10.000 pais satisfeitos</span>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold group">
              Ver Ofertas Especiais
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Assistir Vídeo
            </Button>
          </div>
          
          {/* Urgency */}
          <div className="mt-6 p-4 bg-warning/20 border border-warning rounded-lg backdrop-blur-sm">
            <p className="text-primary-foreground font-medium">
              🔥 <strong>Oferta Limitada:</strong> Apenas até o Dia dos Pais - Frete GRÁTIS + Desconto Especial
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};