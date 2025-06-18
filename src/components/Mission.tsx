import React from 'react';
import { Eye, Heart, Star } from 'lucide-react';

const Mission = () => {
  return (
    <section id="missao" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Missão, Visão e Valores
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Os pilares que orientam nossa jornada em direção à excelência 
            em pesquisa e inovação tecnológica.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-6">Missão</h3>
            <p className="text-gray-300 leading-relaxed">
              Promover a pesquisa interdisciplinar de excelência, desenvolvendo 
              soluções tecnológicas inovadoras que contribuam para o avanço 
              científico e o bem-estar da sociedade, através da formação de 
              pesquisadores qualificados e da colaboração estratégica.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-6">Visão</h3>
            <p className="text-gray-300 leading-relaxed">
              Ser reconhecido como um centro de referência internacional em 
              pesquisa interdisciplinar e inovação tecnológica, liderando 
              transformações positivas na sociedade através do conhecimento 
              científico aplicado.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-6">Valores</h3>
            <div className="text-gray-300 leading-relaxed space-y-2">
              <p>• <strong>Excelência:</strong> Busca constante pela qualidade</p>
              <p>• <strong>Inovação:</strong> Criatividade e pensamento disruptivo</p>
              <p>• <strong>Colaboração:</strong> Trabalho em equipe interdisciplinar</p>
              <p>• <strong>Ética:</strong> Integridade em todas as ações</p>
              <p>• <strong>Sustentabilidade:</strong> Responsabilidade socioambiental</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;