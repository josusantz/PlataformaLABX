import React from 'react';
import { Cpu, Dna, Leaf, Shield, Smartphone, Zap } from 'lucide-react';

const Research = () => {
  const researchLines = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Inteligência Artificial",
      description: "Desenvolvimento de algoritmos avançados de machine learning e deep learning para aplicações diversas.",
      projects: 15,
      color: "bg-blue-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Internet das Coisas",
      description: "Criação de sistemas IoT inteligentes para cidades inteligentes e automação industrial.",
      projects: 12,
      color: "bg-green-500"
    },
    {
      icon: <Dna className="w-8 h-8" />,
      title: "Biotecnologia",
      description: "Aplicação de tecnologias computacionais em biologia molecular e medicina personalizada.",
      projects: 8,
      color: "bg-purple-500"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustentabilidade",
      description: "Desenvolvimento de tecnologias verdes e soluções para desafios ambientais.",
      projects: 10,
      color: "bg-emerald-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cibersegurança",
      description: "Pesquisa em segurança digital, criptografia e proteção de dados.",
      projects: 7,
      color: "bg-red-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Energia Renovável",
      description: "Inovações em sistemas de energia limpa e eficiência energética.",
      projects: 9,
      color: "bg-yellow-500"
    }
  ];

  return (
    <section id="pesquisa" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Linhas de Pesquisa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossas pesquisas abrangem áreas estratégicas da tecnologia, 
            sempre com foco na aplicação prática e no impacto social.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchLines.map((line, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className={`${line.color} w-16 h-16 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {line.icon}
              </div>
              
              <h3 className="text-xl font-bold text-black mb-4">
                {line.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {line.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {line.projects} projetos ativos
                </span>
                <div className={`w-3 h-3 rounded-full ${line.color}`}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-black mb-4">
              Estatísticas de Pesquisa
            </h3>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-black mb-2">61</div>
                <div className="text-gray-600">Projetos Ativos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-black mb-2">150+</div>
                <div className="text-gray-600">Publicações</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-black mb-2">25</div>
                <div className="text-gray-600">Patentes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;