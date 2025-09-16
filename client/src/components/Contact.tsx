import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Facebook, Instagram, Mail } from "lucide-react";

export default function Contact() {
  // 📞 INFORMAZIONI CONTATTO: Modifica queste informazioni con i tuoi dati reali
  // 🔧 MODIFICA: Sostituisci tutti questi valori con le informazioni del tuo ristorante
  const contactInfo = {
    address: "Via G. Galliano, 87, 63822 Porto San Giorgio (FM)", // 🏠 INDIRIZZO: Il tuo indirizzo completo
    phone: "+39 346 611 7936",                                    // 📱 CELLULARE: Numero di cellulare principale
    altPhone: "+39 0734 015961",                                  // ☎️ FISSO: Numero di telefono fisso (opzionale)
    email: "letreforchettetrattoria@gmail.com",                   // 📧 EMAIL: Indirizzo email del ristorante
    facebook: "@letreforchette.trattoria",                        // 📘 FACEBOOK: Handle Facebook (con @)
    instagram: "@letreforchettetrattoria"                         // 📸 INSTAGRAM: Handle Instagram (con @)
  };

  // ⏰ ORARI DI APERTURA: Modifica questi orari con i tuoi orari reali
  // 🔧 MODIFICA: Cambia "day" per i giorni e "hours" per gli orari
  const openingHours = [
    { day: "Lunedì - Venerdì", hours: "18:30 - 23:00" }, // 📅 GIORNI FERIALI: Orari dei giorni lavorativi
    { day: "Sabato", hours: "19:30 - 23:00" },           // 📅 SABATO: Orari del sabato
    { day: "Domenica", hours: "18:30 - 23:00" }          // 📅 DOMENICA: Orari della domenica
  ];

  const handleCall = (phone: string) => {
    window.open(`tel:${phone}`, '_self');
    console.log(`Calling ${phone}`);
  };

  const handleEmail = () => {
    window.open(`mailto:${contactInfo.email}`, '_self');
    console.log(`Opening email to ${contactInfo.email}`);
  };

  const handleSocial = (platform: string, handle: string) => {
    let url = '';
    if (platform === 'facebook') {
      url = `https://facebook.com/${handle.replace('@', '')}`;
    } else if (platform === 'instagram') {
      url = `https://instagram.com/${handle.replace('@', '')}`;
    }
    window.open(url, '_blank');
    console.log(`Opening ${platform}: ${handle}`);
  };

  return (
    <section id="contatti" className="py-16 bg-background" data-testid="contact-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4" data-testid="contact-badge">
            Contatti
          </Badge>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6" data-testid="contact-title">
            Come Raggiungerci
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="contact-description">
            Siamo nel cuore di Porto San Giorgio, facilmente raggiungibili e pronti ad accogliervi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="hover-elevate transition-all duration-300" data-testid="contact-info">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <MapPin className="w-6 h-6" />
                  Dove Siamo
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {contactInfo.address}
                </p>
                <p className="text-sm text-muted-foreground">
                  A soli 187 metri dalla stazione Porto San Giorgio Fermo.
                  Parcheggio e trasporti pubblici nelle vicinanze.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`, '_blank')}
                  data-testid="button-directions"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Ottieni indicazioni
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300" data-testid="contact-phone">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <Phone className="w-6 h-6" />
                  Telefono
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Cellulare:</span>
                  <Button 
                    variant="ghost" 
                    className="font-semibold text-foreground hover:text-primary"
                    onClick={() => handleCall(contactInfo.phone)}
                    data-testid="button-call-mobile"
                  >
                    {contactInfo.phone}
                  </Button>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Fisso:</span>
                  <Button 
                    variant="ghost" 
                    className="font-semibold text-foreground hover:text-primary"
                    onClick={() => handleCall(contactInfo.altPhone)}
                    data-testid="button-call-landline"
                  >
                    {contactInfo.altPhone}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300" data-testid="contact-hours">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <Clock className="w-6 h-6" />
                  Orari di Apertura
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {openingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-muted-foreground font-medium">{schedule.day}</span>
                      <span className="font-semibold text-foreground">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4 italic">
                  * Si consiglia di chiamare per confermare gli orari nei giorni festivi
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300" data-testid="contact-social">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <Facebook className="w-6 h-6" />
                  Seguici Online
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Email</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    className="text-sm hover:text-primary"
                    onClick={handleEmail}
                    data-testid="button-email"
                  >
                    {contactInfo.email}
                  </Button>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Facebook className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Facebook</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    className="text-sm hover:text-primary"
                    onClick={() => handleSocial('facebook', contactInfo.facebook)}
                    data-testid="button-facebook"
                  >
                    {contactInfo.facebook}
                  </Button>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Instagram className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Instagram</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    className="text-sm hover:text-primary"
                    onClick={() => handleSocial('instagram', contactInfo.instagram)}
                    data-testid="button-instagram"
                  >
                    {contactInfo.instagram}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Google Maps */}
          <div className="lg:sticky lg:top-24">
            <Card className="overflow-hidden h-fit" data-testid="contact-map">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <MapPin className="w-6 h-6" />
                  La Nostra Posizione
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="aspect-[4/3] w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.8394374984446!2d13.791827776089378!3d43.17682637923967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f0f3fa3471d17%3A0xa98cb8e332988ad8!2sLe%20Tre%20Forchette!5e0!3m2!1sit!2sit!4v1695731234567!5m2!1sit!2sit"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Le Tre Forchette - Mappa"
                    data-testid="google-maps"
                  />
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-6 text-center">
              <Button 
                size="lg"
                className="bg-chart-2 hover:bg-chart-2/90 text-white font-semibold px-8 py-4 text-lg w-full"
                onClick={() => handleCall(contactInfo.phone)}
                data-testid="button-reserve-main"
              >
                <Phone className="w-5 h-5 mr-2" />
                Prenota il tuo tavolo
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                Chiamaci per prenotare il tuo tavolo e assicurarti un'esperienza indimenticabile
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}