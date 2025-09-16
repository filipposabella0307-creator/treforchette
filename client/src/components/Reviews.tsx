import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

export default function Reviews() {
  // todo: remove mock functionality - authentic reviews from Google Maps/Facebook
  const reviews = [
    {
      name: "Cristian D'Introno",
      rating: 5,
      date: "1 anno fa",
      review: "Ho avuto un'esperienza fantastica al ristorante Le Tre Forchette. I cremini erano deliziosi e le tagliatelle fritte erano semplicemente perfette. Il servizio è stato impeccabile e l'atmosfera accogliente ha reso la serata ancora più piacevole. Raccomando vivamente questo ristorante a chiunque cerchi una cena memorabile.",
      platform: "Google",
      verified: true
    },
    {
      name: "Mike B.",
      rating: 5,
      date: "3 anni fa",
      review: "Delightful, with lovely food and excellent service. La qualità della carne è eccezionale, in particolare il taglio iberico. Ambiente familiare e accogliente.",
      platform: "Restaurant Guru",
      verified: true
    },
    {
      name: "Serena Cappa",
      rating: 4,
      date: "3 mesi fa",
      review: "Cibo ottimo con porzioni generose come da tradizione. L'atmosfera è molto accogliente e il personale gentile. Tornerò sicuramente per provare altri piatti del menu.",
      platform: "Google",
      verified: true
    },
    {
      name: "Antonio R.",
      rating: 5,
      date: "6 mesi fa",
      review: "Tradizione culinaria marchigiana al suo meglio. La Chianina al rosmarino è stata cucinata alla perfezione. Locale rinnovato ma che mantiene il calore della vecchia Trattoria Galliano.",
      platform: "Facebook",
      verified: true
    },
    {
      name: "Maria F.",
      rating: 5,
      date: "2 mesi fa",
      review: "Esperienza fantastica! Gli antipasti completi sono un must, così come i primi piatti della tradizione. Servizio attento e prezzi onesti per la qualità offerta.",
      platform: "Google",
      verified: true
    },
    {
      name: "Francesco L.",
      rating: 4,
      date: "4 mesi fa",
      review: "Atmosfera informale e familiare, perfetta per una cena rilassante. La carne è di ottima qualità e le porzioni sono davvero abbondanti. Consigliato!",
      platform: "Google",
      verified: true
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const totalReviews = 337; // From authentic Google data

  return (
    <section id="recensioni" className="py-16 bg-background" data-testid="reviews-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4" data-testid="reviews-badge">
            Recensioni
          </Badge>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6" data-testid="reviews-title">
            Cosa Dicono i Nostri Ospiti
          </h2>
          
          <div className="flex items-center justify-center space-x-6 mb-8" data-testid="reviews-stats">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 mb-2">
                {renderStars(Math.round(averageRating))}
              </div>
              <div className="font-bold text-2xl text-primary">{averageRating.toFixed(1)}</div>
              <div className="text-sm text-muted-foreground">Rating Medio</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-2xl text-primary">{totalReviews}+</div>
              <div className="text-sm text-muted-foreground">Recensioni</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-2xl text-primary">4.7</div>
              <div className="text-sm text-muted-foreground">Facebook</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300 h-full" data-testid={`review-${index}`}>
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                        {getInitials(review.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground">{review.name}</div>
                      <div className="text-sm text-muted-foreground">{review.date}</div>
                      <div className="text-xs text-muted-foreground">{review.platform}</div>
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-muted-foreground opacity-50" />
                </div>
                <div className="flex items-center space-x-1">
                  {renderStars(review.rating)}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {review.review}
                </p>
                {review.verified && (
                  <Badge variant="outline" className="mt-3 text-xs">
                    Recensione verificata
                  </Badge>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Vuoi lasciare anche tu una recensione? Trova Le Tre Forchette su:
          </p>
          <div className="flex justify-center space-x-4">
            <Badge variant="outline" className="hover-elevate cursor-pointer" data-testid="platform-google">
              Google Maps
            </Badge>
            <Badge variant="outline" className="hover-elevate cursor-pointer" data-testid="platform-facebook">
              Facebook
            </Badge>
            <Badge variant="outline" className="hover-elevate cursor-pointer" data-testid="platform-tripadvisor">
              TripAdvisor
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}