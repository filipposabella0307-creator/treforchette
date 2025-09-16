import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Users, Award } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Heart,
      title: "Tradizione Familiare",
      description: "Un ambiente informale dove le uniche cose che contano sono il buon cibo e la buona compagnia"
    },
    {
      icon: Award,
      title: "Cucina Marchigiana",
      description: "Specialità regionali preparate con ingredienti freschi e di alta qualità del territorio"
    },
    {
      icon: Users,
      title: "Atmosfera Accogliente",
      description: "Locale rinnovato e accogliente, perfetto per cene in famiglia e tra amici"
    },
    {
      icon: Star,
      title: "Porzioni Generose",
      description: "Riconosciuti per le nostre porzioni abbondanti e la qualità dei nostri piatti"
    }
  ];

  return (
    <section id="chi-siamo" className="py-16 bg-accent/30" data-testid="about-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4" data-testid="about-badge">
            Chi siamo
          </Badge>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6" data-testid="about-title">
            La Nostra Storia
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="about-description">
            La Trattoria "Le Tre Forchette" è l'idea di un luogo informale dove 
            le uniche cose che contano sono il buon cibo e la buona compagnia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6" data-testid="about-content">
            <h3 className="font-serif text-2xl font-semibold text-primary">
              Un'Eredità di Sapori
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              L'attività sostituisce la vecchia Trattoria Galliano, non snaturandone i contenuti 
              ma arricchendola con un locale rinnovato e accogliente. Manteniamo viva la tradizione 
              culinaria marchigiana offrendo ai nostri ospiti un'esperienza autentica.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Siamo specializzati in tagli di carne pregiati, in particolare il rinomato taglio 
              iberico e la Chianina, preparati con maestria e serviti in porzioni generose che 
              soddisfano anche i palati più esigenti.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <div className="text-center">
                <div className="font-bold text-2xl text-primary">2.350+</div>
                <div className="text-sm text-muted-foreground">Fan su Facebook</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-primary">4.5</div>
                <div className="text-sm text-muted-foreground">Rating Google</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Anni di esperienza</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`about-feature-${index}`}>
                  <CardContent className="p-6 text-center">
                    <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="bg-card rounded-lg p-8 border border-card-border" data-testid="about-highlights">
          <h3 className="font-serif text-xl font-semibold text-primary mb-4 text-center">
            Le Nostre Specialità
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <h4 className="font-semibold text-foreground">Taglio Iberico</h4>
              <p className="text-sm text-muted-foreground">Carne di alta qualità</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Chianina</h4>
              <p className="text-sm text-muted-foreground">Tradizione toscana</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Antipasti</h4>
              <p className="text-sm text-muted-foreground">Selezione completa</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Primi Piatti</h4>
              <p className="text-sm text-muted-foreground">Pasta fresca</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}