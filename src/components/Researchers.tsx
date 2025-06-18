import React from 'react';
import { Mail, Linkedin, GraduationCap, Award } from 'lucide-react';

const Researchers = () => {
  const researchers = [
    {
      name: "Dr. Ana Silva",
      position: "Coordenadora Geral",
      specialization: "Inteligência Artificial",
      education: "PhD em Ciência da Computação - MIT",
      publications: 45,
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Dr. Carlos Santos",
      position: "Pesquisador Sênior",
      specialization: "Internet das Coisas",
      education: "PhD em Engenharia Elétrica - Stanford",
      publications: 38,
      image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Dra. Maria Oliveira",
      position: "Pesquisadora Principal",
      specialization: "Biotecnologia",
      education: "PhD em Biotecnologia - Harvard",
      publications: 52,
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Dr. João Costa",
      position: "Pesquisador Sênior",
      specialization: "Energia Renovável",
      education: "PhD em Engenharia Ambiental - Cambridge",
      publications: 41,
      image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Dra. Lucia Ferreira",
      position: "Pesquisadora",
      specialization: "Cibersegurança",
      education: "PhD em Segurança da Informação - ETH Zurich",
      publications: 29,
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Dr. Pedro Rodrigues",
      position: "Pesquisador",
      specialization: "Sustentabilidade",
      education: "PhD em Ciências Ambientais - Oxford",
      publications: 33,
      image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const teamStats = [
    { label: "Pesquisadores Doutores", value: "25" },
    { label: "Pós-Doutorandos", value: "12" },
    { label: "Doutorandos", value: "18" },
    { label: "Mestrandos", value: "35" }
  ];

  return (
    <section id="pesquisadores" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Nossa Equipe
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça os pesquisadores que lideram a inovação e fazem a diferença 
            no cenário científico nacional e internacional.
          </p>
        </div>

        {/* Team Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {teamStats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl text-center"
            >
              <div className="text-3xl font-bold text-black mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Researchers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {researchers.map((researcher, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${researcher.image})` }}>
                <div className="h-full bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-1">{researcher.name}</h3>
                    <p className="text-gray-200 text-sm">{researcher.position}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <span className="bg-black text-white px-3 py-1 rounded-full text-sm">
                    {researcher.specialization}
                  </span>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start space-x-2">
                    <GraduationCap className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{researcher.education}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600 text-sm">{researcher.publications} publicações</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <button className="flex items-center space-x-1 text-gray-600 hover:text-black transition-colors duration-200">
                    <Mail className="w-4 h-4" />
                  </button>
                  <button className="flex items-center space-x-1 text-gray-600 hover:text-black transition-colors duration-200">
                    <Linkedin className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-black text-white p-12 rounded-2xl text-center">
          <h3 className="text-3xl font-bold mb-6">
            Junte-se à Nossa Equipe
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Estamos sempre em busca de talentos excepcionais para fortalecer 
            nossa equipe de pesquisa e inovação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Oportunidades de Pesquisa
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
              Programas de Pós-Graduação
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Researchers;