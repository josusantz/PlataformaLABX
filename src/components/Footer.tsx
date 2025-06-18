import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/labx.jpg" alt="LABX Logo" className="h-12 w-auto" />
              <div>
                <h3 className="text-2xl font-bold">LABX</h3>
                <p className="text-gray-300 text-sm">Laboratório de Inovação Interdisciplinar</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Conectando mentes brilhantes para criar o futuro através da tecnologia, 
              pesquisa e inovação interdisciplinar. Transformando ideias em soluções 
              que impactam positivamente a sociedade.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#inicio" className="text-gray-300 hover:text-white transition-colors duration-200">Início</a></li>
              <li><a href="#laboratorio" className="text-gray-300 hover:text-white transition-colors duration-200">Laboratório</a></li>
              <li><a href="#objetivos" className="text-gray-300 hover:text-white transition-colors duration-200">Objetivos</a></li>
              <li><a href="#pesquisa" className="text-gray-300 hover:text-white transition-colors duration-200">Pesquisa</a></li>
              <li><a href="#projetos" className="text-gray-300 hover:text-white transition-colors duration-200">Projetos</a></li>
              <li><a href="#publicacoes" className="text-gray-300 hover:text-white transition-colors duration-200">Publicações</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-300 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Universidade Federal</p>
                  <p>Campus Tecnológico</p>
                  <p>Cidade, Estado - CEP</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-300" />
                <span className="text-gray-300">+55 (11) 1234-5678</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-300" />
                <span className="text-gray-300">contato@labx.edu.br</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2024 LABX - Laboratório de Inovação Interdisciplinar. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;