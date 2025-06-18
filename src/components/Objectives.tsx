import React from 'react';
import { Rocket, Brain, Network, Award } from 'lucide-react';

const Objectives = () => {
  const objectives = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Fomentar a Inovação",
      description: "Desenvolver soluções tecnológicas disruptivas que atendam às demandas da sociedade contemporânea."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Pesquisa Interdisciplinar",
      description: "Promover a integração entre diferentes áreas do conhecimento para gerar insights únicos."
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Colaboração Estratégica",
      description: "Estabelecer parcerias com instituições e empresas para maximizar o impacto das pesquisas."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excelência Acadêmica",
      description: "Formar pesquisadores de alto nível e contribuir para o avanço científico nacional e internacional."
    }
  ];

  return (
    <section id="objetivos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Nossos Objetivos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Direcionamos nossos esforços para alcançar metas ambiciosas que 
            impulsionam a inovação e o desenvolvimento tecnológico.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-black mb-6">
                {objective.icon}
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                {objective.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {objective.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;