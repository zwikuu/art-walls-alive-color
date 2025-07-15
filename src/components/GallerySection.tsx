
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Wszystkie' },
    { id: 'murals', name: 'Murale' },
    { id: 'interior', name: 'Wnętrza' },
    { id: 'portraits', name: 'Portrety' },
    { id: 'abstract', name: 'Abstrakcja' }
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Mural miejski - Natura w mieście",
      category: "murals",
      image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Spektakularny mural na fasadzie budynku mieszkalnego"
    },
    {
      id: 2,
      title: "Malarstwo ścienne w salonie",
      category: "interior",
      image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Artystyczne malowanie ściany w przestrzeni mieszkalnej"
    },
    {
      id: 3,
      title: "Portret artystyczny",
      category: "portraits",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Realistyczny portret wykonany na zamówienie"
    },
    {
      id: 4,
      title: "Mural na budynku biurowym",
      category: "murals",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Nowoczesny mural w centrum biznesowym"
    },
    {
      id: 5,
      title: "Abstrakcyjne malarstwo",
      category: "abstract",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Kolorowe dzieło abstrakcyjne w technice mieszanej"
    },
    {
      id: 6,
      title: "Dekoracja ściany w restauracji",
      category: "interior",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Artystyczna dekoracja przestrzeni gastronomicznej"
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
            Nasza <span className="text-gradient">Galeria</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Odkryj nasze najnowsze realizacje i poczuj inspirację. Każde dzieło to unikalna historia i indywidualne podejście do sztuki.
          </p>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`px-6 py-2 transition-all duration-300 ${
                  activeCategory === category.id
                    ? "gradient-art text-white"
                    : "border-art-300 text-art-600 hover:bg-art-50"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Card 
              key={item.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <h3 className="font-playfair font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-playfair font-semibold text-xl text-gray-900 mb-2 group-hover:text-art-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline"
            size="lg"
            className="border-art-500 text-art-600 hover:bg-art-50 px-8 py-3"
          >
            Zobacz więcej prac
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
