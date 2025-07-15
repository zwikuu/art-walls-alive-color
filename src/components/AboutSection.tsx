
import { Award, Heart, Target, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Pasja",
      description: "Każdy projekt realizujemy z pełnym zaangażowaniem i miłością do sztuki"
    },
    {
      icon: Target,
      title: "Precyzja",
      description: "Dbamy o najdrobniejsze detale, aby efekt przekroczył Twoje oczekiwania"
    },
    {
      icon: Users,
      title: "Współpraca",
      description: "Słuchamy Twoich potrzeb i tworzymy dzieła zgodnie z Twoją wizją"
    },
    {
      icon: Award,
      title: "Jakość",
      description: "Używamy najlepszych materiałów i sprawdzonych technik malarskich"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-art-50 to-warm-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
              O <span className="text-gradient">Naszym Studio</span>
            </h2>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Studio Artystyczne to zespół pasjonatów sztuki z wieloletnim doświadczeniem 
                w dziedzinie malarstwa artystycznego i murali. Od ponad 8 lat tworzymy 
                unikalne dzieła, które przekształcają zwykłe przestrzenie w niezwykłe miejsca.
              </p>
              
              <p>
                Specjalizujemy się w malarstwie ściennym, muralach zewnętrznych oraz 
                projektach artystycznych na zamówienie. Nasz zespół składa się z wykwalifikowanych 
                artystów, którzy łączą tradycyjne techniki malarskie z nowoczesnymi rozwiązaniami.
              </p>
              
              <p>
                Każdy projekt traktujemy indywidualnie, dbając o to, aby końcowy efekt 
                odzwierciedlał charakter miejsca i spełniał oczekiwania klientów. 
                Współpracujemy z klientami prywatnymi, firmami oraz instytucjami publicznymi.
              </p>
            </div>

            {/* Statistics */}
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-art-600 mb-2">200+</div>
                <div className="text-gray-600">Projektów</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-art-600 mb-2">8+</div>
                <div className="text-gray-600">Lat doświadczenia</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image and Values */}
          <div className="space-y-8">
            {/* Artist Image Placeholder */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Nasz zespół przy pracy"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-art-500/20 to-warm-500/20 rounded-2xl"></div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <Card 
                  key={index}
                  className="bg-white/80 backdrop-blur-sm border-warm-200 hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-6 text-center">
                    <value.icon className="h-10 w-10 text-art-500 mx-auto mb-3" />
                    <h3 className="font-playfair font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-playfair font-bold text-gray-900 mb-12">
            Nasz Zespół
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Anna Kowalska",
                role: "Główny artysta",
                image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Marcin Nowak",
                role: "Specjalista murali",
                image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Katarzyna Wójcik",
                role: "Projektant graficzny",
                image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              }
            ].map((member, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="font-playfair font-semibold text-lg text-gray-900 mb-1">
                    {member.name}
                  </h4>
                  <p className="text-art-600">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
