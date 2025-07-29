import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, ExternalLink, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AffiliateLink {
  id: number;
  productName: string;
  originalLink: string;
  customName?: string;
  notes?: string;
  createdAt: string;
}

interface AffiliateManagerProps {
  onLinksUpdate?: (links: Record<number, string>) => void;
}

export const AffiliateManager = ({ onLinksUpdate }: AffiliateManagerProps) => {
  const [links, setLinks] = useState<AffiliateLink[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    productName: "",
    originalLink: "",
    customName: "",
    notes: ""
  });
  const { toast } = useToast();

  const resetForm = () => {
    setFormData({
      productName: "",
      originalLink: "",
      customName: "",
      notes: ""
    });
    setIsAdding(false);
    setEditingId(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.productName || !formData.originalLink) {
      toast({
        title: "Erro",
        description: "Nome do produto e link são obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    if (editingId) {
      // Editing existing link
      const updatedLinks = links.map(link => 
        link.id === editingId 
          ? { 
              ...link, 
              ...formData,
              customName: formData.customName || undefined,
              notes: formData.notes || undefined
            }
          : link
      );
      setLinks(updatedLinks);
      toast({
        title: "Sucesso",
        description: "Link atualizado com sucesso!"
      });
    } else {
      // Adding new link
      const newLink: AffiliateLink = {
        id: Date.now(),
        productName: formData.productName,
        originalLink: formData.originalLink,
        customName: formData.customName || undefined,
        notes: formData.notes || undefined,
        createdAt: new Date().toISOString()
      };
      
      const updatedLinks = [...links, newLink];
      setLinks(updatedLinks);
      
      toast({
        title: "Sucesso",
        description: "Link adicionado com sucesso!"
      });
    }

    // Update parent component with new links mapping
    const linksMapping = links.reduce((acc, link) => {
      acc[link.id] = link.originalLink;
      return acc;
    }, {} as Record<number, string>);
    
    onLinksUpdate?.(linksMapping);
    resetForm();
  };

  const handleEdit = (link: AffiliateLink) => {
    setFormData({
      productName: link.productName,
      originalLink: link.originalLink,
      customName: link.customName || "",
      notes: link.notes || ""
    });
    setEditingId(link.id);
    setIsAdding(true);
  };

  const handleDelete = (id: number) => {
    const updatedLinks = links.filter(link => link.id !== id);
    setLinks(updatedLinks);
    
    const linksMapping = updatedLinks.reduce((acc, link) => {
      acc[link.id] = link.originalLink;
      return acc;
    }, {} as Record<number, string>);
    
    onLinksUpdate?.(linksMapping);
    
    toast({
      title: "Sucesso",
      description: "Link removido com sucesso!"
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copiado!",
      description: "Link copiado para a área de transferência."
    });
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Gerenciar Links de Afiliado
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Adicione e gerencie seus links de afiliado do Mercado Livre para maximizar suas conversões.
            </p>
          </div>

          {/* Add Link Button */}
          {!isAdding && (
            <div className="text-center mb-8">
              <Button onClick={() => setIsAdding(true)} className="bg-primary hover:bg-primary/90">
                <Plus className="w-4 h-4 mr-2" />
                Adicionar Novo Link
              </Button>
            </div>
          )}

          {/* Add/Edit Form */}
          {isAdding && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>
                  {editingId ? "Editar Link de Afiliado" : "Adicionar Novo Link de Afiliado"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="productName">Nome do Produto *</Label>
                      <Input
                        id="productName"
                        value={formData.productName}
                        onChange={(e) => setFormData(prev => ({ ...prev, productName: e.target.value }))}
                        placeholder="Ex: Parafusadeira TB-21PX"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="customName">Nome Personalizado</Label>
                      <Input
                        id="customName"
                        value={formData.customName}
                        onChange={(e) => setFormData(prev => ({ ...prev, customName: e.target.value }))}
                        placeholder="Ex: Oferta Especial Dia dos Pais"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="originalLink">Link de Afiliado *</Label>
                    <Input
                      id="originalLink"
                      value={formData.originalLink}
                      onChange={(e) => setFormData(prev => ({ ...prev, originalLink: e.target.value }))}
                      placeholder="https://mercadolivre.com/sec/25r7fXA"
                      required
                      type="url"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Cole aqui o link de afiliado fornecido pelo Mercado Livre
                    </p>
                  </div>
                  
                  <div>
                    <Label htmlFor="notes">Observações</Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                      placeholder="Adicione observações sobre este link..."
                      rows={3}
                    />
                  </div>
                  
                  <div className="flex gap-4">
                    <Button type="submit" className="bg-success hover:bg-success/90">
                      {editingId ? "Atualizar Link" : "Adicionar Link"}
                    </Button>
                    <Button type="button" variant="outline" onClick={resetForm}>
                      Cancelar
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Links List */}
          {links.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Links Cadastrados ({links.length})
              </h3>
              
              {links.map((link) => (
                <Card key={link.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold text-foreground">
                            {link.customName || link.productName}
                          </h4>
                          <Badge variant="secondary" className="text-xs">
                            {new Date(link.createdAt).toLocaleDateString('pt-BR')}
                          </Badge>
                        </div>
                        
                        {link.customName && (
                          <p className="text-sm text-muted-foreground mb-1">
                            Produto: {link.productName}
                          </p>
                        )}
                        
                        <div className="flex items-center gap-2 mb-2">
                          <p className="text-sm text-muted-foreground break-all">
                            {link.originalLink}
                          </p>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => copyToClipboard(link.originalLink)}
                            className="h-6 w-6 p-0"
                          >
                            <Copy className="w-3 h-3" />
                          </Button>
                        </div>
                        
                        {link.notes && (
                          <p className="text-sm text-muted-foreground italic">
                            {link.notes}
                          </p>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => window.open(link.originalLink, '_blank')}
                          className="h-8 w-8 p-0"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleEdit(link)}
                          className="h-8 w-8 p-0"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleDelete(link.id)}
                          className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {links.length === 0 && !isAdding && (
            <Card className="text-center py-12">
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Nenhum link de afiliado cadastrado ainda.
                </p>
                <Button onClick={() => setIsAdding(true)} className="bg-primary hover:bg-primary/90">
                  <Plus className="w-4 h-4 mr-2" />
                  Adicionar Primeiro Link
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};