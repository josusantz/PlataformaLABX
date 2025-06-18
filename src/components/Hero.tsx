import React from 'react';
import { ChevronDown, Zap, Cpu, Lightbulb } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 border border-white/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <img src="/labx.jpg" alt="LABX Logo" className="h-32 w-auto mx-auto mb-6" />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Laboratório de
          <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Inovação Interdisciplinar
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Conectando mentes brilhantes para criar o futuro através da tecnologia, 
          pesquisa e inovação interdisciplinar
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <div className="flex items-center space-x-2 text-gray-300">
            <Zap className="w-6 h-6 text-white" />
            <span>Inovação</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-300">
            <Cpu className="w-6 h-6 text-white" />
            <span>Tecnologia</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-300">
            <Lightbulb className="w-6 h-6 text-white" />
            <span>Pesquisa</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#laboratorio"
            className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Conheça o Laboratório
          </a>
          <a
            href="#projetos"
            className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            Ver Projetos
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/60" />
      </div>
    </section>
  );
};

export default Hero;