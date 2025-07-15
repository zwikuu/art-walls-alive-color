
import { Palette, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Palette className="h-8 w-8 text-art-400" />
              <span className="font-playfair font-bold text-2xl">Studio Artystyczne</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Profesjonalne usługi malarstwa artystycznego i murali. Tworzymy unikalne dzieła sztuki, 
              które przekształcają przestrzenie w inspirujące miejsca pełne charakteru.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-art-500 rounded-full flex items-center justify-center hover:bg-art-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-art-500 rounded-full flex items-center justify-center hover:bg-art-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@studio-artystyczne.pl"
                className="w-10 h-10 bg-art-500 rounded-full flex items-center justify-center hover:bg-art-600 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-6">Szybkie linki</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-art-400 transition-colors"
                >
                  Strona główna
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-art-400 transition-colors"
                >
                  Usługi
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-art-400 transition-colors"
                >
                  Galeria
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-art-400 transition-colors"
                >
                  O nas
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-art-400 transition-colors"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-6">Kontakt</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-art-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">ul. Artystyczna 15</p>
                  <p className="text-gray-300">00-001 Warszawa</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-art-400 flex-shrink-0" />
                <a
                  href="tel:+48123456789"
                  className="text-gray-300 hover:text-art-400 transition-colors"
                >
                  +48 123 456 789
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-art-400 flex-shrink-0" />
                <a
                  href="mailto:info@studio-artystyczne.pl"
                  className="text-gray-300 hover:text-art-400 transition-colors"
                >
                  info@studio-artystyczne.pl
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Studio Artystyczne. Wszystkie prawa zastrzeżone.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-art-400 text-sm transition-colors">
                Polityka prywatności
              </a>
              <a href="#" className="text-gray-400 hover:text-art-400 text-sm transition-colors">
                Regulamin
              </a>
              <a href="#" className="text-gray-400 hover:text-art-400 text-sm transition-colors">
                RODO
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
