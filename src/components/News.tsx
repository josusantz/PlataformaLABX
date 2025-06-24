import React, { useState, useEffect } from "react";
import { Calendar, ArrowRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const news = [
  {
    title: "LABX recebe prêmio internacional de inovação em IA",
    excerpt:
      "Nosso projeto SmartCity AI Platform foi reconhecido como a melhor solução de inteligência artificial para cidades inteligentes.",
    date: "15 de Janeiro, 2024",
    category: "Prêmios",
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://example.com/premio-ia",
  },
  {
    title: "Nova parceria com Google Research",
    excerpt:
      "Firmamos uma colaboração estratégica para desenvolvimento de algoritmos de machine learning aplicados à sustentabilidade.",
    date: "08 de Janeiro, 2024",
    category: "Parcerias",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://example.com/google-research",
  },
  {
    title: "Publicação na Nature Biotechnology",
    excerpt:
      "Artigo sobre biosensores IoT para monitoramento ambiental é aceito em uma das principais revistas científicas do mundo.",
    date: "03 de Janeiro, 2024",
    category: "Publicações",
    image:
      "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://example.com/publicacao-iot",
  },
  {
    title: "Inauguração do novo laboratório de cibersegurança",
    excerpt:
      "Espaço dedicado à pesquisa em segurança digital conta com infraestrutura de última geração.",
    date: "28 de Dezembro, 2023",
    category: "Infraestrutura",
    image:
      "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://example.com/lab-cyber",
  },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
};

const News = () => {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setIndex(([prevIndex]) => {
      const next = (prevIndex + newDirection + news.length) % news.length;
      return [next, newDirection];
    });
  };

  useEffect(() => {
    const interval = setInterval(() => paginate(1), 5000);
    return () => clearInterval(interval);
  }, []);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) =>
    Math.abs(offset) * velocity;

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-12 text-center">
          <h2 className="text-4xl font-semibold tracking-tight">Últimas Notícias</h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-base">
            Acompanhe as inovações e conquistas do LABX.
          </p>
        </header>

        {/* Container fixo para evitar salto */}
        <div className="relative overflow-hidden" style={{ height: 260 }}>
          {/* Posiciona os itens animados no mesmo espaço */}
          <AnimatePresence initial={false} custom={direction}>
            <motion.a
              key={index}
              href={news[index].url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col md:flex-row bg-gray-900/60 border border-white/10 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.3}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) paginate(1);
                else if (swipe > swipeConfidenceThreshold) paginate(-1);
              }}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
              }}
            >
              {/* Imagem com tamanho fixo e proporção consistente */}
              <div
                className="md:w-1/3 h-full rounded-l-xl bg-cover bg-center flex-shrink-0"
                style={{ backgroundImage: `url(${news[index].image})`, minHeight: 260 }}
                aria-hidden="true"
              />
              {/* Conteúdo */}
              <div className="md:w-2/3 p-8 flex flex-col justify-between">
                <div>
                  <span className="inline-block text-xs font-semibold text-cyan-400 uppercase tracking-wide mb-2">
                    {news[index].category}
                  </span>
                  <h3 className="text-2xl font-bold leading-tight mb-3">
                    {news[index].title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
                    {news[index].excerpt}
                  </p>
                </div>
                <div className="flex items-center justify-between text-sm text-white/70">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <time dateTime={news[index].date}>{news[index].date}</time>
                  </div>
                  <div className="flex items-center space-x-2 font-medium text-cyan-400 hover:text-cyan-600 transition-colors">
                    <span>Ler mais</span>
                    <ArrowRight className="w-5 h-5" />
                    <ExternalLink className="w-4 h-4 opacity-70" />
                  </div>
                </div>
              </div>
            </motion.a>
          </AnimatePresence>

          {/* Navegação */}
          <button
            onClick={() => paginate(-1)}
            aria-label="Notícia anterior"
            className="absolute top-1/2 left-6 -translate-y-1/2 text-white/60 hover:text-white text-3xl transition-transform hover:scale-110 z-20"
          >
            &larr;
          </button>
          <button
            onClick={() => paginate(1)}
            aria-label="Próxima notícia"
            className="absolute top-1/2 right-6 -translate-y-1/2 text-white/60 hover:text-white text-3xl transition-transform hover:scale-110 z-20"
          >
            &rarr;
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center space-x-3 mt-8">
          {news.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex([i, i > index ? 1 : -1])}
              aria-label={`Ir para notícia ${i + 1}`}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                i === index ? "bg-cyan-400" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
