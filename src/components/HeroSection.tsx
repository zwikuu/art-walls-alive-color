
import { ArrowRight, Palette, Brush, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-warm opacity-50"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-art-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-warm-300 rounded-full opacity-30 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-art-300 rounded-full opacity-25 animate-float" style={{animationDelay: '2s'}}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-gray-900 mb-6">
            Malarstwo{' '}
            <span className="text-gradient">Artystyczne</span>
            <br />& Murale
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Tworzymy unikalne dzieła sztuki, które przekształcają przestrzenie w wyjątkowe miejsca pełne charakteru i inspiracji
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={() => scrollToSection('gallery')}
              size="lg"
              className="gradient-art text-white hover:opacity-90 transition-opacity group px-8 py-3"
            >
              Zobacz nasze prace
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="lg"
              className="border-art-500 text-art-600 hover:bg-art-50 px-8 py-3"
            >
              Bezpłatna wycena
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Brush className="h-12 w-12 text-art-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">200+</div>
              <div className="text-gray-600">Zrealizowanych projektów</div>
            </div>
            
            <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Users className="h-12 w-12 text-art-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
              <div className="text-gray-600">Zadowolonych klientów</div>
            </div>
            
            <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Palette className="h-12 w-12 text-art-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">8+</div>
              <div className="text-gray-600">Lat doświadczenia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
