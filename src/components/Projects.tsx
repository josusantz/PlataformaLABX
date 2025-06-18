import React from 'react';
import { ExternalLink, Calendar, Users, Award } from 'lucide-react';

const Projects = () => {
  const featuredProjects = [
    {
      title: "SmartCity AI Platform",
      description: "Plataforma de inteligência artificial para otimização de recursos urbanos e melhoria da qualidade de vida.",
      category: "Inteligência Artificial",
      status: "Em Desenvolvimento",
      team: 8,
      duration: "24 meses",
      image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "BioSensor Network",
      description: "Rede de biosensores IoT para monitoramento ambiental e detecção precoce de poluentes.",
      category: "IoT & Biotecnologia",
      status: "Fase de Testes",
      team: 6,
      duration: "18 meses",
      image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Green Energy Optimizer",
      description: "Sistema de otimização para redes de energia renovável usando algoritmos de aprendizado de máquina.",
      category: "Energia Renovável",
      status: "Concluído",
      team: 5,
      duration: "12 meses",
      image: "https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "CyberShield Pro",
      description: "Framework avançado de cibersegurança para proteção de infraestruturas críticas.",
      category: "Cibersegurança",
      status: "Em Desenvolvimento",
      team: 10,
      duration: "30 meses",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Concluído':
        return 'bg-green-100 text-green-800';
      case 'Em Desenvolvimento':
        return 'bg-blue-100 text-blue-800';
      case 'Fase de Testes':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="projetos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Projetos em Destaque
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos nossos projetos mais inovadores que estão 
            moldando o futuro da tecnologia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }}>
                <div className="h-full bg-black/40 flex items-end p-6">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="mb-4">
                  <span className="text-sm text-gray-500 font-medium">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-black mb-4">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{project.team} pesquisadores</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{project.duration}</span>
                  </div>
                </div>
                
                <button className="flex items-center space-x-2 text-black hover:text-gray-600 transition-colors duration-200">
                  <span className="font-medium">Ver Detalhes</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 p-12 rounded-2xl text-center">
          <Award className="w-16 h-16 text-black mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-black mb-6">
            Reconhecimento Internacional
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Nossos projetos já receberam mais de 15 prêmios nacionais e 
            internacionais, consolidando nossa posição como referência em inovação.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-black mb-2">15+</div>
              <div className="text-gray-600">Prêmios Recebidos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-black mb-2">100+</div>
              <div className="text-gray-600">Projetos Realizados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-black mb-2">50M+</div>
              <div className="text-gray-600">Investimento (R$)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;