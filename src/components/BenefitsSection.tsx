import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Heart, DollarSign, Truck, Shield, Clock } from "lucide-react";

const benefits = [
  {
    icon: Wrench,
    title: "Autonomia Total",
    description: "Seu pai poderá resolver qualquer reparo sem depender de terceiros. Praticidade e independência em suas mãos."
  },
  {
    icon: Heart,
    title: "Presente Emocional",
    description: "Demonstre o quanto você se importa com um presente útil e duradouro que ele usará com orgulho."
  },
  {
    icon: DollarSign,
    title: "Economia a Longo Prazo",
    description: "Evite gastos com serviços externos. Um investimento que se paga ao longo do tempo."
  },
  {
    icon: Truck,
    title: "Frete Grátis",
    description: "Entrega gratuita em todo o Brasil. Receba em casa sem custos adicionais."
  },
  {
    icon: Shield,
    title: "Garantia Estendida",
    description: "Produtos com garantia do fabricante. Qualidade e confiabilidade garantidas."
  },
  {
    icon: Clock,
    title: "Entrega Rápida",
    description: "Chegue a tempo para o Dia dos Pais. Processamento prioritário para datas comemorativas."
  }
];

export const BenefitsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Por Que Escolher <span className="text-primary">The Black Tools</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais que ferramentas, você está presenteando com autonomia, qualidade e momentos especiais.
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
        <div className="text-center mt-16 p-8 bg-primary/5 rounded-lg border border-primary/10">
          <blockquote className="text-2xl font-medium text-foreground mb-4">
            "O melhor presente é aquele que demonstra cuidado e utilidade. 
            Ferramentas de qualidade são um investimento no bem-estar do seu pai."
          </blockquote>
          <cite className="text-muted-foreground">— Especialistas em Dia dos Pais</cite>
        </div>
      </div>
    </section>
  );
};