import { Shield, Mail, ExternalLink } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="sobre" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/f7cc05a4-5306-4868-8918-fe7525db9254.png" 
                alt="Hub da Promo" 
                className="h-8 w-auto"
              />
              <h3 className="text-xl font-bold">hubdapromo.com.br</h3>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Seu portal de confiança para as melhores ofertas do Mercado Livre. 
              Conectamos você às promoções mais vantajosas com total segurança.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Shield className="w-4 h-4 text-accent" />
              <span>Redirecionamentos 100% seguros</span>
            </div>
          </div>

          {/* Links Importantes */}
          <div>
            <h4 className="font-semibold mb-4">Links Importantes</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#produtos" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Ofertas
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a 
                  href="https://mercadolivre.com.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-accent transition-colors flex items-center gap-1"
                >
                  Mercado Livre
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80">contato@hubdapromo.com.br</span>
              </div>
            </div>
          </div>
        </div>

        {/* Linha de separação */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/60">
              © 2025 Hub da Promo. Todos os direitos reservados.
            </div>
            <div className="text-sm text-primary-foreground/60">
              Desenvolvido com ❤️ para conectar você às melhores ofertas
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-primary-foreground/10 rounded-lg">
          <p className="text-xs text-primary-foreground/70 text-center">
            <strong>Disclaimer:</strong> O Hub da Promo é um portal de divulgação de ofertas afiliadas. 
            Ao clicar nos produtos, você será redirecionado para o site oficial do Mercado Livre. 
            Todas as transações são realizadas diretamente com o Mercado Livre, garantindo total segurança na sua compra.
          </p>
        </div>
      </div>
    </footer>
  );
};