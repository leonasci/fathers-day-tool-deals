import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ana Carolina",
    location: "São Paulo, SP",
    rating: 5,
    text: "Encontrei ofertas incríveis no Hub da Promo! As promoções são reais e a compra foi super segura pelo Mercado Livre.",
    product: "Smartphone Samsung"
  },
  {
    name: "Roberto Mendes",
    location: "Rio de Janeiro, RJ", 
    rating: 5,
    text: "Site confiável e ofertas verificadas. Economizei muito na compra das ferramentas. Recomendo demais!",
    product: "Kit de Ferramentas"
  },
  {
    name: "Juliana Costa",
    location: "Belo Horizonte, MG",
    rating: 5,
    text: "Navegação simples e ofertas atualizadas. Já comprei várias vezes através dos links do Hub da Promo.",
    product: "Notebook Gamer"
  },
  {
    name: "Carlos Lima",
    location: "Porto Alegre, RS",
    rating: 5,
    text: "Portal muito confiável! Sempre que preciso de algo, consulto primeiro o Hub da Promo. As ofertas são legítimas.",
    product: "Smart TV"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            O Que Os <span className="text-primary">Pais Dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Depoimentos reais de pais que receberam ferramentas The Black Tools como presente.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-12 h-12 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-foreground leading-relaxed mb-6 relative z-10">
                  "{testimonial.text}"
                </blockquote>

                {/* Product Badge */}
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {testimonial.product}
                </div>

                {/* Author Info */}
                <div className="border-t pt-4">
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="text-center mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Pais Satisfeitos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">+10k</div>
              <div className="text-sm text-muted-foreground">Produtos Vendidos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.9★</div>
              <div className="text-sm text-muted-foreground">Avaliação Média</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Recomendariam</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};