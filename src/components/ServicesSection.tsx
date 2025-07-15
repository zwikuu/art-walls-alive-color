
import { Paintbrush, Building, Home, Brush, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Building,
      title: "Murale zewnętrzne",
      description: "Spektakularne murale na fasadach budynków, które przyciągają wzrok i nadają charakteru architekturze",
      features: [
        "Farby odporne na warunki atmosferyczne",
        "Projekty dopasowane do architektury",
        "Pełna dokumentacja realizacji",
        "Gwarancja trwałości kolorów"
      ]
    },
    {
      icon: Home,
      title: "Malarstwo ścienne",
      description: "Artystyczne malowanie ścian w pomieszczeniach mieszkalnych i komercyjnych",
      features: [
        "Ekologiczne farby bezpieczne dla zdrowia",
        "Indywidualne projekty graficzne",
        "Różnorodne techniki malarskie",
        "Konsultacja w doborze kolorów"
      ]
    },
    {
      icon: Paintbrush,
      title: "Projekty artystyczne",
      description: "Unikalne dzieła sztuki na zamówienie - od szkiców po pełne realizacje",
      features: [
        "Autorskie projekty graficzne",
        "Konsultacje artystyczne",
        "Różne style i techniki",
        "Portfolio prac referencyjnych"
      ]
    },
    {
      icon: Brush,
      title: "Renowacja murali",
      description: "Profesjonalna renowacja i odświeżanie istniejących dzieł sztuki",
      features: [
        "Ocena stanu technicznego",
        "Dobór odpowiednich materiałów",
        "Zachowanie oryginalnego charakteru",
        "Przedłużenie żywotności dzieła"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-warm-50 to-art-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
            Nasze <span className="text-gradient">Usługi</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferujemy kompleksowe usługi malarstwa artystycznego, od projektowania po realizację, 
            dbając o najwyższą jakość i satysfakcję klientów
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm border-warm-200"
            >
              <CardHeader className="text-center pb-4">
                <service.icon className="h-16 w-16 text-art-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-2xl font-playfair text-gray-900 group-hover:text-art-600 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-lg">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-art-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">
              Proces realizacji projektu
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-art-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                  1
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Konsultacja</h4>
                <p className="text-gray-600 text-sm">Omawiamy Twoje potrzeby i wizję</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-art-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                  2
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Projekt</h4>
                <p className="text-gray-600 text-sm">Tworzymy indywidualny projekt</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-art-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                  3
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Realizacja</h4>
                <p className="text-gray-600 text-sm">Profesjonalne wykonanie dzieła</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-art-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                  4
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Finalizacja</h4>
                <p className="text-gray-600 text-sm">Ostatnie szlify i przekazanie</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
