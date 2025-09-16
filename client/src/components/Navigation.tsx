import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/424674859_1148634889826884_8224997341038095058_n_1758028283916.jpg";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
    console.log(`Navigating to ${sectionId}`);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "chi-siamo", label: "Chi siamo" },
    { id: "recensioni", label: "Recensioni" },
    { id: "menu", label: "Menù" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
      data-testid="nav-main"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer hover-elevate rounded-lg p-2" 
            onClick={() => scrollToSection("home")}
            data-testid="logo-home"
          >
            <img 
              src={logoImage} 
              alt="Le Tre Forchette Logo" 
              className="h-12 w-12 rounded-full mr-3 object-cover" 
            />
            <div className="hidden sm:block">
              <h1 className="font-serif font-bold text-lg text-primary">Le Tre Forchette</h1>
              <p className="text-xs text-muted-foreground italic font-script">Trattoria</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium hover-elevate px-3 py-2 rounded"
                data-testid={`nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            <Button 
              className="bg-chart-2 hover:bg-chart-2/90 text-white font-semibold px-6 py-2"
              onClick={() => scrollToSection("contatti")}
              data-testid="button-prenota-desktop"
            >
              Prenota ora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover-elevate rounded"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-foreground block h-0.5 w-6 rounded-sm transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-foreground block h-0.5 w-6 rounded-sm my-0.5 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-foreground block h-0.5 w-6 rounded-sm transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-sm rounded-lg shadow-lg p-4 mb-4" data-testid="nav-mobile-menu">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-left hover-elevate px-3 py-2 rounded"
                  data-testid={`nav-mobile-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                className="bg-chart-2 hover:bg-chart-2/90 text-white font-semibold w-full"
                onClick={() => scrollToSection("contatti")}
                data-testid="button-prenota-mobile"
              >
                Prenota ora
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}