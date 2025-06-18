import React from 'react';
import { BookOpen, Download, ExternalLink, TrendingUp } from 'lucide-react';

const Publications = () => {
  const recentPublications = [
    {
      title: "Machine Learning Applications in Smart City Infrastructure",
      authors: "Silva, A. et al.",
      journal: "IEEE Transactions on Smart Grid",
      year: "2024",
      citations: 45,
      type: "Journal Article"
    },
    {
      title: "Biosensor Networks for Environmental Monitoring: A Comprehensive Review",
      authors: "Santos, M. et al.",
      journal: "Nature Biotechnology",
      year: "2024",
      citations: 32,
      type: "Review Article"
    },
    {
      title: "Cybersecurity Framework for Critical Infrastructure Protection",
      authors: "Oliveira, R. et al.",
      journal: "ACM Computing Surveys",
      year: "2023",
      citations: 78,
      type: "Survey"
    },
    {
      title: "Renewable Energy Optimization Using Deep Reinforcement Learning",
      authors: "Costa, L. et al.",
      journal: "Energy and AI",
      year: "2023",
      citations: 56,
      type: "Research Article"
    },
    {
      title: "IoT-Based Solutions for Sustainable Agriculture",
      authors: "Ferreira, P. et al.",
      journal: "Computers and Electronics in Agriculture",
      year: "2023",
      citations: 41,
      type: "Technical Paper"
    },
    {
      title: "Artificial Intelligence in Healthcare: Challenges and Opportunities",
      authors: "Rodrigues, C. et al.",
      journal: "Journal of Medical Internet Research",
      year: "2023",
      citations: 89,
      type: "Perspective"
    }
  ];

  const publicationStats = [
    { label: "Publicações Totais", value: "250+", icon: <BookOpen className="w-6 h-6" /> },
    { label: "Citações", value: "3,500+", icon: <TrendingUp className="w-6 h-6" /> },
    { label: "H-Index", value: "42", icon: <TrendingUp className="w-6 h-6" /> },
    { label: "Colaborações", value: "85", icon: <ExternalLink className="w-6 h-6" /> }
  ];

  return (
    <section id="publicacoes" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Publicações Científicas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa produção científica reflete o compromisso com a excelência 
            em pesquisa e a disseminação do conhecimento.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {publicationStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-black mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-black mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Recent Publications */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-3xl font-bold text-black mb-8 text-center">
            Publicações Recentes
          </h3>
          
          <div className="space-y-6">
            {recentPublications.map((pub, index) => (
              <div
                key={index}
                className="border-l-4 border-black pl-6 py-4 hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                  <h4 className="text-xl font-semibold text-black mb-2 lg:mb-0">
                    {pub.title}
                  </h4>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="bg-gray-100 px-3 py-1 rounded-full">
                      {pub.type}
                    </span>
                    <span>{pub.year}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-2">
                  <strong>Autores:</strong> {pub.authors}
                </p>
                
                <p className="text-gray-600 mb-3">
                  <strong>Publicado em:</strong> {pub.journal}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center space-x-1">
                      <TrendingUp className="w-4 h-4" />
                      <span>{pub.citations} citações</span>
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <button className="flex items-center space-x-1 text-black hover:text-gray-600 transition-colors duration-200">
                      <Download className="w-4 h-4" />
                      <span className="text-sm">PDF</span>
                    </button>
                    <button className="flex items-center space-x-1 text-black hover:text-gray-600 transition-colors duration-200">
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Ver Online</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              Ver Todas as Publicações
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;