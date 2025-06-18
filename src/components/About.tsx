import React from 'react';
import { Users, Target, Microscope, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="laboratorio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Conheça o Laboratório
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            O LABX é um centro de excelência em pesquisa e desenvolvimento tecnológico, 
            focado na criação de soluções inovadoras através da colaboração interdisciplinar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-black mb-6">
              Inovação que Transforma
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Nosso laboratório representa a convergência entre diferentes áreas do conhecimento, 
              onde pesquisadores, estudantes e profissionais trabalham juntos para desenvolver 
              tecnologias que impactam positivamente a sociedade.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Equipado com infraestrutura de ponta e metodologias avançadas, o LABX é um 
              ambiente propício para a experimentação, prototipagem e validação de ideias 
              revolucionárias.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-black text-white px-4 py-2 rounded-full text-sm">
                Inteligência Artificial
              </span>
              <span className="bg-black text-white px-4 py-2 rounded-full text-sm">
                IoT
              </span>
              <span className="bg-black text-white px-4 py-2 rounded-full text-sm">
                Biotecnologia
              </span>
              <span className="bg-black text-white px-4 py-2 rounded-full text-sm">
                Sustentabilidade
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <Users className="w-12 h-12 text-black mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-black mb-2">50+</h4>
              <p className="text-gray-600">Pesquisadores</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <Target className="w-12 h-12 text-black mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-black mb-2">100+</h4>
              <p className="text-gray-600">Projetos</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <Microscope className="w-12 h-12 text-black mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-black mb-2">25+</h4>
              <p className="text-gray-600">Publicações</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <Globe className="w-12 h-12 text-black mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-black mb-2">15+</h4>
              <p className="text-gray-600">Parcerias</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;