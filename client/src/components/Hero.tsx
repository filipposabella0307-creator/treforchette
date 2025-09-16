import { Button } from "@/components/ui/button";
// 🖼️ IMMAGINE HERO: Sostituisci questo percorso per cambiare l'immagine di sfondo
import heroImage from "@assets/generated_images/Italian_trattoria_interior_6c00755d.png";

export default function Hero() {
  // 🎯 FUNZIONE: Scrolla alle sezioni quando si cliccano i pulsanti
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    console.log(`Scrolling to ${sectionId}`);
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
      data-testid="hero-section"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* 📝 CONTENUTO PRINCIPALE HERO */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        {/* 🏷️ TITOLO PRINCIPALE: Cambia "Le Tre Forchette" per modificare il nome del ristorante */}
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-wide" data-testid="hero-title">
          Le Tre Forchette
        </h1>
        
        {/* 🏷️ SOTTOTITOLO: Cambia "Trattoria Tradizionale" per modificare il tipo di ristorante */}
        <p className="font-script text-xl md:text-2xl lg:text-3xl mb-4 text-cream opacity-90" data-testid="hero-subtitle">
          Trattoria Tradizionale
        </p>
        
        {/* 📝 DESCRIZIONE: Cambia questo testo per modificare la descrizione del ristorante */}
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90" data-testid="hero-description">
          Un luogo informale dove le uniche cose che contano sono il buon cibo e la buona compagnia. 
          Scopri i sapori autentici della tradizione marchigiana.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            className="bg-chart-2 hover:bg-chart-2/90 text-white font-semibold px-8 py-4 text-lg"
            onClick={() => scrollToSection("contatti")}
            data-testid="button-hero-prenota"
          >
            Prenota il tuo tavolo
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="border-white/60 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg"
            onClick={() => scrollToSection("menu")}
            data-testid="button-hero-menu"
          >
            Scopri il menù
          </Button>
        </div>
        
        {/* 📍 INFORMAZIONI RISTORANTE: Modifica indirizzo e orari qui */}
        <div className="mt-12 text-sm opacity-75" data-testid="hero-location">
          {/* 🏠 INDIRIZZO: Sostituisci con l'indirizzo del tuo ristorante */}
          <p>Via G. Galliano, 87 - Porto San Giorgio</p>
          {/* ⏰ ORARI: Modifica gli orari di apertura */}
          <p>Aperto tutti i giorni dalle 18:30 alle 23:00</p>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}