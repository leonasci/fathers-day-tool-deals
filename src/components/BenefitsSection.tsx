import { Card, CardContent } from "@/components/ui/card";
import { Shield, TrendingUp, Zap, ExternalLink, Star, CheckCircle } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "100% Seguro",
    description: "Redirecionamento direto para o Mercado Livre oficial. Suas informações e pagamentos estão protegidos."
  },
  {
    icon: TrendingUp,
    title: "Melhores Preços",
    description: "Ofertas verificadas e atualizadas diariamente. Só divulgamos promoções realmente vantajosas."
  },
  {
    icon: Zap,
    title: "Rápido e Fácil",
    description: "Um clique para acessar as melhores ofertas. Interface simples e navegação intuitiva."
  },
  {
    icon: ExternalLink,
    title: "Compra Direta",
    description: "Todas as transações são feitas diretamente com o Mercado Livre, garantindo total confiabilidade."
  },
  {
    icon: Star,
    title: "Produtos Verificados",
    description: "Apenas produtos com excelentes avaliações e vendedores confiáveis são divulgados."
  },
  {
    icon: CheckCircle,
    title: "Curadoria Especializada",
    description: "Equipe dedicada seleciona as melhores ofertas para você economizar tempo e dinheiro."
  }
];

export const BenefitsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Por Que Confiar no <span className="text-accent">Hub da Promo</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Seu portal seguro e confiável para as melhores ofertas do Mercado Livre
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-16 p-8 bg-accent/5 rounded-lg border border-accent/10">
          <blockquote className="text-2xl font-medium text-foreground mb-4">
            "A confiança é fundamental nas compras online. 
            Hub da Promo conecta você às melhores ofertas com total segurança."
          </blockquote>
          <cite className="text-muted-foreground">— Especialistas em E-commerce</cite>
        </div>
      </div>
    </section>
  );
};