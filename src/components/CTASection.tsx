import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Gift, Truck } from "lucide-react";

export const CTASection = () => {
  const scrollToProducts = () => {
    const productsSection = document.querySelector('#products');
    productsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary via-primary to-primary/90 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-primary-foreground rounded-full"></div>
        <div className="absolute top-40 right-20 w-32 h-32 border border-primary-foreground rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-primary-foreground rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Não Deixe Para Amanhã
          </h2>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            O Dia dos Pais está chegando! Garante já o presente perfeito com 
            <strong className="text-accent"> desconto especial</strong> e 
            <strong className="text-accent"> frete grátis</strong>.
          </p>

          {/* Urgency Elements */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full">
              <Clock className="w-5 h-5 text-accent" />
              <span className="text-primary-foreground font-medium">Ofertas por tempo limitado</span>
            </div>
            <div className="flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full">
              <Truck className="w-5 h-5 text-accent" />
              <span className="text-primary-foreground font-medium">Entrega garantida</span>
            </div>
            <div className="flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full">
              <Gift className="w-5 h-5 text-accent" />
              <span className="text-primary-foreground font-medium">Embalagem especial</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              onClick={scrollToProducts}
              className="text-xl px-12 py-6 bg-accent hover:bg-accent/90 text-accent-foreground font-bold group shadow-lg"
            >
              Escolher Presente Agora
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Countdown or Urgency */}
          <div className="bg-warning/20 border border-warning rounded-lg p-6 max-w-2xl mx-auto">
            <div className="text-primary-foreground">
              <h3 className="text-2xl font-bold mb-2">⏰ Últimas Horas!</h3>
              <p className="text-lg">
                Aproveite os <strong>descontos exclusivos</strong> e o <strong>frete grátis</strong> 
                antes que a promoção acabe. Seu pai merece o melhor!
              </p>
            </div>
          </div>

          {/* Security/Trust Elements */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🔒</span>
              </div>
              <h4 className="font-semibold text-primary-foreground mb-1">Compra Segura</h4>
              <p className="text-sm text-primary-foreground/80">Mercado Livre Oficial</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">✅</span>
              </div>
              <h4 className="font-semibold text-primary-foreground mb-1">Garantia Total</h4>
              <p className="text-sm text-primary-foreground/80">Satisfação garantida</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🚚</span>
              </div>
              <h4 className="font-semibold text-primary-foreground mb-1">Entrega Rápida</h4>
              <p className="text-sm text-primary-foreground/80">Chega antes do Dia dos Pais</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};