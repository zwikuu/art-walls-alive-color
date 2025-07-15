
import { useState } from 'react';
import { Menu, X, Palette, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-warm-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Palette className="h-8 w-8 text-art-500" />
            <span className="font-playfair font-bold text-xl text-gray-900">
              Studio Artystyczne
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-art-500 transition-colors duration-200"
            >
              Strona główna
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-art-500 transition-colors duration-200"
            >
              Usługi
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-gray-700 hover:text-art-500 transition-colors duration-200"
            >
              Galeria
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-art-500 transition-colors duration-200"
            >
              O nas
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-art-500 transition-colors duration-200"
            >
              Kontakt
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+48123456789"
              className="text-gray-600 hover:text-art-500 transition-colors"
            >
              <Phone className="h-5 w-5" />
            </a>
            <a
              href="mailto:info@studio-artystyczne.pl"
              className="text-gray-600 hover:text-art-500 transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
            <Button
              onClick={() => scrollToSection('contact')}
              className="gradient-art text-white hover:opacity-90 transition-opacity"
            >
              Wycena projektu
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-art-500"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-warm-200 shadow-lg">
            <nav className="px-4 py-4 space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left text-gray-700 hover:text-art-500 transition-colors"
              >
                Strona główna
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-gray-700 hover:text-art-500 transition-colors"
              >
                Usługi
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="block w-full text-left text-gray-700 hover:text-art-500 transition-colors"
              >
                Galeria
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-gray-700 hover:text-art-500 transition-colors"
              >
                O nas
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-gray-700 hover:text-art-500 transition-colors"
              >
                Kontakt
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="w-full gradient-art text-white"
              >
                Wycena projektu
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
