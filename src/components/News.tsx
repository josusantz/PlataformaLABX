import React from 'react';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

const News = () => {
  const news = [
    {
      title: "LABX recebe prêmio internacional de inovação em IA",
      excerpt: "Nosso projeto SmartCity AI Platform foi reconhecido como a melhor solução de inteligência artificial para cidades inteligentes.",
      date: "15 de Janeiro, 2024",
      category: "Prêmios",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true
    },
    {
      title: "Nova parceria com Google Research",
      excerpt: "Firmamos uma colaboração estratégica para desenvolvimento de algoritmos de machine learning aplicados à sustentabilidade.",
      date: "08 de Janeiro, 2024",
      category: "Parcerias",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Publicação na Nature Biotechnology",
      excerpt: "Artigo sobre biosensores IoT para monitoramento ambiental é aceito em uma das principais revistas científicas do mundo.",
      date: "03 de Janeiro, 2024",
      category: "Publicações",
      image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Inauguração do novo laboratório de cibersegurança",
      excerpt: "Espaço dedicado à pesquisa em segurança digital conta com infraestrutura de última geração.",
      date: "28 de Dezembro, 2023",
      category: "Infraestrutura",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Últimas Notícias
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Acompanhe as principais novidades, conquistas e desenvolvimentos do LABX.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured News */}
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-96 bg-cover bg-center" style={{ backgroundImage: `url(${news[0].image})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-medium">
                      {news[0].category}
                    </span>
                    <div className="flex items-center text-white/80 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {news[0].date}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {news[0].title}
                  </h3>
                  <p className="text-white/90 text-lg mb-6 leading-relaxed">
                    {news[0].excerpt}
                  </p>
                  <button className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors duration-200">
                    <span className="font-medium">Ler mais</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Other News */}
          <div className="space-y-6">
            {news.slice(1).map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }}>
                  <div className="h-full bg-black/40 flex items-end p-4">
                    <span className="bg-white text-black px-2 py-1 rounded text-xs font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {item.date}
                  </div>
                  
                  <h4 className="text-lg font-bold text-black mb-3 leading-tight">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {item.excerpt}
                  </p>
                  
                  <button className="flex items-center space-x-1 text-black hover:text-gray-600 transition-colors duration-200">
                    <span className="text-sm font-medium">Ler mais</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
            Ver Todas as Notícias
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;