import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChefHat, Beef, Salad, Wine } from "lucide-react";
// 🖼️ IMMAGINI PIATTI: Sostituisci questi percorsi per cambiare le immagini del menu
import steakImage from "@assets/generated_images/Chianina_beef_steak_dish_7018e85f.png";
import antipastiImage from "@assets/generated_images/Italian_antipasti_platter_3bf945d9.png";

export default function Menu() {
  // 📝 STRUTTURA MENU: Queste interfacce definiscono la struttura dei piatti
  interface MenuItem {
    name: string;          // 🏷️ Nome del piatto
    description: string;   // 📝 Descrizione del piatto
    price: string;         // 💰 Prezzo del piatto (es: "€25")
    image?: string;        // 🖼️ Immagine del piatto (opzionale)
    featured?: boolean;    // ⭐ Piatto speciale/in evidenza (opzionale)
  }

  interface MenuCategory {
    icon: any;            // 🎨 Icona della categoria (da lucide-react)
    title: string;        // 🏷️ Nome della categoria
    description: string;  // 📝 Descrizione della categoria
    items: MenuItem[];    // 📋 Lista dei piatti della categoria
  }

  // 🍽️ CATEGORIE MENU: Modifica queste categorie per personalizzare il tuo menu
  // 🔧 MODIFICA: Per ogni categoria puoi cambiare:
  //   - icon: Icona da lucide-react (Salad, ChefHat, Beef, Wine, etc.)
  //   - title: Nome della categoria
  //   - description: Descrizione della categoria
  //   - items: Array dei piatti (vedi sotto)
  const menuCategories: Record<string, MenuCategory> = {
    antipasti: {
      icon: Salad,        // 🥗 ICONA: Cambia per rappresentare la categoria
      title: "Antipasti", // 🏷️ NOME CATEGORIA: Modifica il nome
      description: "Selezione di antipasti della tradizione marchigiana", // 📝 DESCRIZIONE: Descrivi la categoria
      items: [
        {
          name: "Antipasto Completo",
          description: "Selezione completa di salumi, formaggi, bruschette, verdure sott'olio e altre specialità locali",
          price: "€48"
        },
        {
          name: "Tagliere di Salumi e Formaggi",
          description: "Salumi tradizionali marchigiani e formaggi locali con miele e marmellate",
          price: "€28"
        },
        {
          name: "Bruschette Miste",
          description: "Selezione di bruschette con pomodoro, olive, funghi e verdure di stagione",
          price: "€16"
        },
        {
          name: "Cremini ai Porcini",
          description: "Specialità della casa - cremini freschi con porcini e erbe aromatiche",
          price: "€18"
        }
      ]
    },
    primi: {
      icon: ChefHat,
      title: "Primi Piatti",
      description: "Pasta fresca e primi piatti della tradizione",
      items: [
        {
          name: "Pappardelle al Ragù",
          description: "Pasta fresca all'uovo con ragù di carne preparato secondo la ricetta tradizionale",
          price: "€16"
        },
        {
          name: "Tagliatelle Fritte",
          description: "Specialità unica - tagliatelle fritte croccanti, un piatto che conquista tutti",
          price: "€14",
          featured: true
        },
        {
          name: "Gnocchi con Zucchine",
          description: "Gnocchi di patate fatti in casa con zucchine fresche e parmigiano",
          price: "€15"
        },
        {
          name: "Tortellini in Brodo",
          description: "Tortellini della tradizione in brodo di cappone fatto in casa",
          price: "€17"
        }
      ]
    },
    secondi: {
      icon: Beef,
      title: "Secondi Piatti",
      description: "Specialità di carne - i nostri tagli pregiati",
      items: [
        {
          name: "Taglio Iberico",
          description: "Il nostro fiore all'occhiello - carne iberica di altissima qualità, cotta alla perfezione",
          price: "€45"
        },
        {
          name: "Chianina al Rosmarino",
          description: "Bistecca di Chianina con rosmarino fresco e olio extravergine toscano",
          price: "€42",
          featured: true
        },
        {
          name: "Tagliata di Manzo",
          description: "Tagliata di manzo con rucola, pomodorini e scaglie di grana padano",
          price: "€28"
        },
        {
          name: "Pollo Ruspante",
          description: "Pollo ruspante locale cotto al forno con patate e erbe aromatiche",
          price: "€22"
        }
      ]
    },
    vini: {
      icon: Wine,
      title: "Vini & Bevande",
      description: "Selezione di vini locali delle Marche",
      items: [
        {
          name: "Rosso Piceno DOC",
          description: "Vino rosso delle Marche, perfetto con i nostri secondi di carne",
          price: "€25"
        },
        {
          name: "Verdicchio di Jesi",
          description: "Vino bianco tradizionale marchigiano, ideale con antipasti e pesce",
          price: "€22"
        },
        {
          name: "Sangiovese delle Marche",
          description: "Vino rosso corposo della tradizione locale",
          price: "€28"
        },
        {
          name: "Selezione di Birre",
          description: "Birre artigianali italiane e internazionali",
          price: "€6-8"
        }
      ]
    }
  };

  return (
    <section id="menu" className="py-16 bg-accent/30" data-testid="menu-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4" data-testid="menu-badge">
            Menù
          </Badge>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6" data-testid="menu-title">
            La Nostra Cucina
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="menu-description">
            Scopri i sapori autentici della tradizione marchigiana. 
            Ogni piatto è preparato con ingredienti freschi e di alta qualità.
          </p>
        </div>

        <Tabs defaultValue="antipasti" className="w-full" data-testid="menu-tabs">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            {Object.entries(menuCategories).map(([key, category]) => {
              const Icon = category.icon;
              return (
                <TabsTrigger key={key} value={key} className="flex items-center gap-2" data-testid={`tab-${key}`}>
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{category.title}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {Object.entries(menuCategories).map(([key, category]) => (
            <TabsContent key={key} value={key} className="space-y-6" data-testid={`tab-content-${key}`}>
              <div className="text-center mb-8">
                <h3 className="font-serif text-2xl font-semibold text-primary mb-2">
                  {category.title}
                </h3>
                <p className="text-muted-foreground">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item, index) => (
                  <Card 
                    key={index} 
                    className={`hover-elevate transition-all duration-300 ${item.featured ? 'ring-2 ring-primary/20' : ''}`}
                    data-testid={`menu-item-${key}-${index}`}
                  >
                    {item.image && (
                      <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
                          {item.name}
                          {item.featured && (
                            <Badge variant="secondary" className="text-xs">
                              Specialità
                            </Badge>
                          )}
                        </CardTitle>
                        <span className="text-xl font-bold text-primary">{item.price}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 text-center bg-card rounded-lg p-8 border border-card-border" data-testid="menu-notes">
          <h3 className="font-serif text-xl font-semibold text-primary mb-4">
            Note Importanti
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Ingredienti Freschi</h4>
              <p>Utilizziamo solo ingredienti freschi e di stagione, provenienti dai migliori fornitori locali</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Porzioni Abbondanti</h4>
              <p>Tutti i nostri piatti sono serviti in porzioni generose, nel rispetto della tradizione</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Allergeni</h4>
              <p>Informare il personale di eventuali allergie o intolleranze alimentari</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Prenotazioni</h4>
              <p>Si consiglia la prenotazione, specialmente nei weekend e giorni festivi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}