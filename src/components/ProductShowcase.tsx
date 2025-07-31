import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Zap, Award, Truck, ArrowRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: 'Parafusadeira e Furadeira de Impacto 3/8" WAP K21 ID02 2000 mAh',
    originalPrice: 'R$ 398,47',
    salePrice: 'R$ 199,40',
    discount: '49% OFF',
    rating: 4.7,
    reviews: 20328,
    features: ['Impacto 3/8"', 'Bateria 2000 mAh', 'Muito vendida', 'Excelente avaliação'],
    image: '/images/image1.png',
    badge: 'Mais Vendido',
    affiliateLink: 'https://mercadolivre.com/sec/25r7fXA'
  },
  {
    id: 2,
    name: 'Parafusadeira Impacto 21 V WAP K21 + Kit 300 Peças',
    originalPrice: 'R$ 535,39',
    salePrice: 'R$ 348,00',
    discount: '35% OFF',
    rating: 4.9,
    reviews: 218,
    features: ['21 V sem fio', 'Kit 300 peças incluso', '10x sem juros', 'Ideal manutenção doméstica'],
    image: '/images/image2.png',
    badge: 'Kit Completo',
    affiliateLink: 'https://mercadolivre.com/sec/1T2n2QP'
  },
  {
    id: 3,
    name: 'Chave de Impacto a Bateria 1/2" Motor Brushless CH3500 OZ',
    originalPrice: 'R$ 535,39',
    salePrice: 'R$ 319,90',
    discount: '40% OFF',
    rating: 4.7,
    reviews: 156,
    features: ['Motor Brushless', '1/2 polegada', '24x sem juros', 'Alta potência'],
    image: '/images/image3.png',
    badge: 'Profissional',
    affiliateLink: 'https://mercadolivre.com/sec/1KJEzHZ'
  }
];

interface ProductShowcaseProps {
  affiliateLinks?: Record<number, string>;
}

export const ProductShowcase = ({ affiliateLinks = {} }: ProductShowcaseProps) => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Presentes que Fazem a <span className="text-primary">Diferença</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Escolha entre os produtos mais desejados pelos pais brasileiros. 
            Qualidade profissional com o melhor custo-benefício.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
              {/* Badge */}
              <div className="absolute top-4 left-4 z-10">
                <Badge variant="secondary" className="bg-accent text-accent-foreground font-semibold">
                  {product.badge}
                </Badge>
              </div>

              {/* Discount */}
              <div className="absolute top-4 right-4 z-10">
                <Badge className="bg-destructive text-destructive-foreground font-bold">
                  {product.discount}
                </Badge>
              </div>

              <CardHeader className="p-0">
                <div className="h-64 bg-muted flex items-center justify-center relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">
                  {product.name}
                </CardTitle>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-muted-foreground'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} avaliações)
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Zap className="w-4 h-4 text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                    <Badge variant="destructive" className="text-xs">
                      {product.discount}
                    </Badge>
                  </div>
                  <div className="text-3xl font-bold text-primary">
                    {product.salePrice}
                  </div>
                  <div className="text-sm text-success">
                    ou 12x sem juros no cartão
                  </div>
                </div>

                {/* Benefits */}
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <Truck className="w-4 h-4" />
                    Frete GRÁTIS
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="w-4 h-4" />
                    Garantia
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={product.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Você será redirecionado ao site oficial do Mercado Livre"
                  className="block"
                  onClick={() => {
                    if (typeof window !== 'undefined' && typeof gtag !== 'undefined') {
                      gtag('event', 'click_affiliate_product', {
                        event_category: 'Afiliado',
                        event_label: product.name,
                        value: parseFloat(product.salePrice.replace('R$', '').replace(',', '.'))
                      });
                    }
                  }}
                >
                  <Button 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold group transition-transform hover:scale-105"
                    size="lg"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Comprar Agora
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>

                {/* Selo de segurança */}
                <div className="mt-2 text-xs text-muted-foreground text-center">
                  Compra 100% segura no <strong>Mercado Livre</strong>
                  <img src="/images/logo-mercado-livre.png" alt="Mercado Livre" className="inline-block h-5 ml-1" />
                </div>
                <div className="mt-1 text-center text-xs text-muted-foreground">
                  🔒 Redirecionamento seguro para o site oficial do Mercado Livre
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-warning/20 text-warning px-4 py-2 rounded-full text-sm font-medium mb-4">
            🔥 Ofertas válidas apenas até o Dia dos Pais
          </div>
          <p className="text-muted-foreground">
            Não perca tempo! Estas ofertas especiais são limitadas.
          </p>
        </div>
      </div>
    </section>
  );
};
