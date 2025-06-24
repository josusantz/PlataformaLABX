// src/components/LabDescriptionDark.tsx
import { useState } from 'react';

type TopicId = 'labx' | 'laboratorio' | 'inovacao';

interface Topic {
  id: TopicId;
  title: string;
  content: React.ReactNode;
}

interface Quality {
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

const LabDescriptionDark = () => {
  const [activePopup, setActivePopup] = useState<TopicId | null>(null);

  const topics: Topic[] = [
    {
      id: 'labx',
      title: 'O que é o LABX',
      content: (
        <div className="space-y-4">
          <p>
            O grupo tem como missão impulsionar o avanço da inovação científica e tecnológica por meio do desenvolvimento de soluções integradas e criativas para desafios contemporâneos de alta complexidade.
          </p>
          <p>
            Atuando em um ambiente multidisciplinar, buscamos aplicar técnicas computacionais de ponta para resolver problemas reais que exigem elevado poder computacional, sempre com foco no impacto social e na sustentabilidade.
          </p>
          <p>
            A inovação é entendida aqui não apenas como a criação de novas tecnologias, mas como a capacidade de transformar conhecimento em valor aplicado, gerando benefícios concretos para a sociedade, a ciência e o mercado. Dessa forma, o grupo promove a proteção da propriedade intelectual, a transferência de tecnologia e a geração de produtos, serviços e processos inovadores.
          </p>
          <p>
            Nosso compromisso está em formar profissionais altamente qualificados, com visão crítica e empreendedora, preparados para propor e implementar soluções computacionais inovadoras, alinhadas às demandas emergentes do mundo contemporâneo. Incentivamos a cultura da inovação aberta e colaborativa, conectando a academia ao ecossistema empreendedor e às tendências globais observadas nas principais universidades e centros de pesquisa.
          </p>
          <p>
            Por meio de uma abordagem multidisciplinar e da exploração do estado da arte em áreas como ciência de dados, inteligência artificial, computação de alto desempenho, engenharia, ciências sociais aplicadas, educação, entre outros, buscamos construir pontes entre o conhecimento acadêmico e sua aplicação prática, promovendo o desenvolvimento regional e nacional com base na ciência, tecnologia e inovação.
          </p>
        </div>
      )
    },
    {
      id: 'laboratorio',
      title: 'Laboratório de Inovação',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-lg mb-2">O que é um laboratório de inovação</h3>
            <p>
              Os laboratórios de inovação são ambientes criativos e colaborativos nos quais a inovação é tratada como um processo contínuo de experimentação, aprendizado e cocriação. Fundamentados em pilares como interdisciplinaridade, abertura e colaboração, esses espaços buscam desenvolver soluções originais e viáveis para problemas reais, muitas vezes complexos e multifacetados.
              A inovação envolve a implementação de um produto, serviço ou processo significativamente melhorado, o que está alinhado à missão desses laboratórios. Nesse contexto, novos produtos, serviços e modelos podem ser concebidos, testados e aprimorados por meio de metodologias, inovação aberta e prototipagem rápida, permitindo a convergência de múltiplas perspectivas e a valorização do conhecimento compartilhado. 
              Assim, os laboratórios de inovação tornam-se catalisadores de mudanças, fortalecendo o ecossistema de inovação e contribuindo para a transformação digital e social das instituições e da sociedade como um todo.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-2">Como funciona</h3>
            <p>
              O funcionamento de um laboratório de inovação pode variar, mas geralmente segue boas práticas fundamentais: promove uma cultura de inovação com ambiente aberto à criatividade, livre de burocracias e com tolerância ao erro; estrutura equipes multidisciplinares que reúnem profissionais de diversas áreas para enriquecer os projetos; 
              adota um processo estruturado de inovação que vai desde a identificação do problema até a implementação da solução; oferece ferramentas e recursos adequados, como softwares, hardwares e espaços colaborativos; e realiza monitoramento contínuo dos projetos, garantindo a melhoria contínua e a geração de valor para a organização.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-2">Vantagens</h3>
            <p>
              Implementar um laboratório de inovação traz diversas vantagens para as organizações. Ele aumenta a competitividade ao permitir o desenvolvimento de produtos e serviços diferenciados, melhora processos internos, reduz custos e otimiza recursos por meio da automação e inovação.
              Além disso, fomenta uma cultura inovadora, estimula a criatividade e atrai talentos que valorizam ambientes dinâmicos e transformadores. Ao alinhar soluções às reais necessidades dos clientes, promove maior satisfação e fidelização, além de possibilitar a abertura de novos mercados 
              e a antecipação de tendências, tornando o negócio mais preparado para lidar com mudanças e desafios do mercado.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'inovacao',
      title: 'Inovação',
      content: (
        <div className="space-y-4">
          <p>
            Os laboratórios de inovação são ambientes estratégicos que estimulam a criatividade, a experimentação e o aprendizado prático, alinhando-se às demandas reais do mercado. Eles permitem o desenvolvimento de soluções inovadoras, a prototipagem de produtos e a otimização de processos, 
            contribuindo diretamente para o aumento da competitividade e a geração de valor nas organizações. Além de promoverem uma cultura de inovação, esses espaços incentivam o trabalho colaborativo, a tolerância ao erro e o pensamento crítico – competências essenciais para o cenário corporativo atual.
          </p>
          <p>
            Também atuam na formação de profissionais mais preparados, capazes de aplicar conhecimentos de forma prática e desenvolver projetos alinhados às necessidades do setor produtivo. 
            Em nossos ambientes, como o Laboratório de Inovação Interdisciplinar (LabX), empresas e talentos em formação têm a oportunidade de criar algo em conjunto, soluções com apoio técnico e estrutura completa, 
            fortalecendo a conexão entre educação, tecnologia e mercado.
          </p>
        </div>
      )
    }
  ];

  const qualities: Quality[] = [
    {
      title: 'Excelência Técnica',
      description: 'Aplicamos conhecimento avançado para desenvolver produtos, serviços e processos da mais alta qualidade.',
      icon: '',
      gradient: 'from-slate-800 to-slate-500'
    },
    {
      title: 'Desenvolvimento Profissional',
      description: 'Promovemos oportunidades de crescimento e desempenho profissional em um ambiente estimulante.',
      icon: '',
      gradient: 'from-slate-800 to-slate-500'
    },
    {
      title: 'Engajamento Comunitário',
      description: 'Comprometidos com projetos que trazem benefícios tangíveis para a comunidade onde atuamos.',
      icon: '',
      gradient: 'from-slate-800 to-slate-500'
    }
  ];

  const togglePopup = (id: TopicId) => {
    setActivePopup(activePopup === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-800 py-12 px-4 sm:px-6 lg:px-8 text-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Conheça o <span className="text-cyan-400">Laboratório</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Um espaço de inovação científica e tecnológica que conecta conhecimento, criatividade e impacto social por meio de soluções multidisciplinares.
          </p>
        </div>

        {/* Interactive Topics */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-8 text-center">Explore Nossos Conceitos</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {topics.map((topic) => (
              <div key={topic.id} className="relative">
                <button
                  onClick={() => togglePopup(topic.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activePopup === topic.id ? 'bg-cyan-400 text-white shadow-lg' : 'bg-gray-800 text-cyan-400 border border-gray-700 hover:bg-gray-700 hover:shadow-md'}`}
                >
                  {topic.title}
                </button>
                
                {activePopup === topic.id && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-gray-800 max-w-2xl w-full p-6 rounded-xl shadow-xl animate-fadeIn border border-gray-700 max-h-[90vh] overflow-y-auto">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-cyan-400">{topic.title}</h3>
                        <button 
                          onClick={() => setActivePopup(null)}
                          className="text-gray-400 hover:text-white"
                        >
                          ✕
                        </button>
                      </div>
                      <div className="prose prose-invert max-w-none">
                        {topic.content}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Qualities Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {qualities.map((quality, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${quality.gradient} backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]`}
            >
              <div className="text-4xl mb-4 drop-shadow-lg">{quality.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{quality.title}</h3>
              <p className="text-gray-200">{quality.description}</p>
            </div>
          ))}
        </div>

        {/* Detailed Description */}
        <div className="bg-gray-800 rounded-xl shadow-sm p-8 md:p-12 border border-gray-700">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Sobre Nossos Laboratórios</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Nossos laboratórios são espaços criativos e colaborativos nos quais a inovação é tratada como um processo contínuo de experimentação, inventando soluções práticas para problemas complexos e multifacetados.
            </p>
            <p>
              Por meio de uma abordagem multidisciplinar e da exploração do estado da arte em áreas como ciência de dados, inteligência artificial, computação de alto desempenho, engenharia e ciências sociais aplicadas, buscamos construir pontes entre o conhecimento acadêmico e sua aplicação prática.
            </p>
            <p>
              Incentivamos a cultura da inovação aberta e colaborativa, conectando a academia ao ecossistema empreendedor e às tendências globais observadas nas principais universidades e centros de pesquisa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabDescriptionDark;