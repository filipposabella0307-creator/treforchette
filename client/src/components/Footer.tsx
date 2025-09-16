import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";
import logoImage from "@assets/424674859_1148634889826884_8224997341038095058_n_1758028283916.jpg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log('Scrolling to top');
  };

  const handleSocial = (platform: string, url: string) => {
    window.open(url, '_blank');
    console.log(`Opening ${platform}`);
  };

  const handleCall = (phone: string) => {
    window.open(`tel:${phone}`, '_self');
    console.log(`Calling ${phone}`);
  };

  const handleEmail = () => {
    window.open('mailto:letreforchettetrattoria@gmail.com', '_self');
    console.log('Opening email');
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12" data-testid="footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2" data-testid="footer-brand">
            <div className="flex items-center mb-4">
              <img 
                src={logoImage} 
                alt="Le Tre Forchette Logo" 
                className="h-16 w-16 rounded-full mr-4 object-cover" 
              />
              <div>
                <h3 className="font-serif text-xl font-bold mb-1">Le Tre Forchette</h3>
                <p className="font-script text-sm opacity-90">Trattoria Tradizionale</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed mb-4">
              La Trattoria "Le Tre Forchette" è l'idea di un luogo informale dove 
              le uniche cose che contano sono il buon cibo e la buona compagnia. 
              Tradizione marchigiana dal cuore di Porto San Giorgio.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => handleSocial('Facebook', 'https://facebook.com/letreforchette.trattoria')}
                className="hover-elevate p-2 rounded transition-colors"
                data-testid="footer-facebook"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleSocial('Instagram', 'https://instagram.com/letreforchettetrattoria')}
                className="hover-elevate p-2 rounded transition-colors"
                data-testid="footer-instagram"
              >
                <Instagram className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div data-testid="footer-contact">
            <h4 className="font-serif text-lg font-semibold mb-4">Contatti</h4>
            <div className="space-y-3 text-sm">
              <button
                onClick={() => window.open('https://maps.google.com/?q=Via G. Galliano, 87, 63822 Porto San Giorgio', '_blank')}
                className="flex items-start gap-2 hover-elevate p-1 rounded transition-colors text-left w-full"
                data-testid="footer-address"
              >
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="opacity-90 leading-relaxed">
                  Via G. Galliano, 87<br />
                  63822 Porto San Giorgio (FM)
                </span>
              </button>
              <button
                onClick={() => handleCall('+39 346 611 7936')}
                className="flex items-center gap-2 hover-elevate p-1 rounded transition-colors"
                data-testid="footer-phone"
              >
                <Phone className="w-4 h-4" />
                <span className="opacity-90">+39 346 611 7936</span>
              </button>
              <button
                onClick={handleEmail}
                className="flex items-center gap-2 hover-elevate p-1 rounded transition-colors text-left"
                data-testid="footer-email"
              >
                <Mail className="w-4 h-4" />
                <span className="opacity-90 text-xs break-all">
                  letreforchettetrattoria@gmail.com
                </span>
              </button>
            </div>
          </div>

          {/* Opening Hours */}
          <div data-testid="footer-hours">
            <h4 className="font-serif text-lg font-semibold mb-4">Orari</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="opacity-90">Lun-Ven:</span>
                <span className="font-medium">18:30-23:00</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-90">Sabato:</span>
                <span className="font-medium">19:30-23:00</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-90">Domenica:</span>
                <span className="font-medium">18:30-23:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center" data-testid="footer-bottom">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-75">
              © {currentYear} Le Tre Forchette. Tutti i diritti riservati.
            </p>
            <button
              onClick={scrollToTop}
              className="text-sm hover-elevate px-3 py-1 rounded transition-colors opacity-75 hover:opacity-100"
              data-testid="footer-scroll-top"
            >
              Torna su ↑
            </button>
          </div>
          <p className="text-xs opacity-60 mt-2">
            Trattoria tradizionale - Cucina marchigiana - Porto San Giorgio (FM)
          </p>
        </div>
      </div>
    </footer>
  );
}