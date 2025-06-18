import React from 'react';
import { Building2, CaseSensitive as University, Globe2, Handshake } from 'lucide-react';

const Partnerships = () => {
  const partnershipTypes = [
    {
      icon: <University className="w-12 h-12" />,
      title: "Universidades",
      description: "Colaborações acadêmicas com instituições nacionais e internacionais",
      partners: ["USP", "UNICAMP", "MIT", "Stanford"]
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Empresas",
      description: "Parcerias estratégicas com líderes da indústria tecnológica",
      partners: ["Google", "Microsoft", "IBM", "Amazon"]
    },
    {
      icon: <Globe2 className="w-12 h-12" />,
      title: "Organizações",
      description: "Cooperação com órgãos governamentais e ONGs",
      partners: ["CNPq", "FAPESP", "UNESCO", "ONU"]
    },
    {
      icon: <Handshake className="w-12 h-12" />,
      title: "Startups",
      description: "Incubação e mentoria para empresas nascentes",
      partners: ["TechStart", "InnovaLab", "FutureTech", "NextGen"]
    }
  ];

  return (
    <section id="parcerias" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Nossas Parcerias
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Construímos uma rede sólida de colaborações que amplifica 
            nosso impacto e acelera a inovação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {partnershipTypes.map((type, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-black mb-6 flex justify-center">
                {type.icon}
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                {type.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {type.description}
              </p>
              <div className="space-y-2">
                {type.partners.map((partner, idx) => (
                  <div
                    key={idx}
                    className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border"
                  >
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-black text-white p-12 rounded-2xl text-center">
          <h3 className="text-3xl font-bold mb-6">
            Interessado em uma Parceria?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Estamos sempre abertos a novas colaborações que possam 
            gerar impacto positivo através da inovação.
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            Entre em Contato
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;