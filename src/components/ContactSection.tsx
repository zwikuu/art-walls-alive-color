
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Wiadomość wysłana!",
        description: "Skontaktujemy się z Tobą w ciągu 24 godzin.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adres",
      details: ["ul. Artystyczna 15", "00-001 Warszawa"]
    },
    {
      icon: Phone,
      title: "Telefon",
      details: ["+48 123 456 789", "+48 987 654 321"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@studio-artystyczne.pl", "zamowienia@studio-artystyczne.pl"]
    },
    {
      icon: Clock,
      title: "Godziny pracy",
      details: ["Pon-Pt: 9:00 - 18:00", "Sob: 10:00 - 14:00"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-warm-50 to-art-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
            Skontaktuj się <span className="text-gradient">z nami</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gotowi do rozpoczęcia współpracy? Skontaktuj się z nami, aby omówić swój projekt i otrzymać bezpłatną wycenę.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-2xl border-warm-200">
            <CardHeader>
              <CardTitle className="text-2xl font-playfair text-gray-900">
                Napisz do nas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Imię i nazwisko *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-warm-300 focus:border-art-500 focus:ring-art-500"
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-warm-300 focus:border-art-500 focus:ring-art-500"
                      placeholder="+48 123 456 789"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border-warm-300 focus:border-art-500 focus:ring-art-500"
                    placeholder="jan@przykład.pl"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Temat
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="border-warm-300 focus:border-art-500 focus:ring-art-500"
                    placeholder="Mural na budynku mieszkalnym"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Wiadomość *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border-warm-300 focus:border-art-500 focus:ring-art-500"
                    placeholder="Opisz swój projekt, lokalizację i oczekiwania..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-art text-white hover:opacity-90 transition-opacity py-3"
                >
                  {isSubmitting ? (
                    "Wysyłanie..."
                  ) : (
                    <>
                      Wyślij wiadomość
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-warm-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
                  Informacje kontaktowe
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <info.icon className="h-6 w-6 text-art-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105 border-warm-200">
                <CardContent className="p-6 text-center">
                  <Phone className="h-10 w-10 text-art-500 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Zadzwoń</h4>
                  <p className="text-sm text-gray-600 mb-3">Porozmawiajmy o Twoim projekcie</p>
                  <Button variant="outline" size="sm" className="border-art-500 text-art-600 hover:bg-art-50">
                    +48 123 456 789
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105 border-warm-200">
                <CardContent className="p-6 text-center">
                  <Mail className="h-10 w-10 text-art-500 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Napisz email</h4>
                  <p className="text-sm text-gray-600 mb-3">Otrzymasz odpowiedź w 24h</p>
                  <Button variant="outline" size="sm" className="border-art-500 text-art-600 hover:bg-art-50">
                    info@studio.pl
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Map placeholder */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-warm-200">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-art-100 to-warm-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-art-500 mx-auto mb-3" />
                    <p className="text-gray-600">Mapa lokalizacji</p>
                    <p className="text-sm text-gray-500">ul. Artystyczna 15, Warszawa</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
