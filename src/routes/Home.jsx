import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const energyCards = [
    {
      title: "Energia Solar",
      description: "Aproveite a energia limpa e renovável do sol para um futuro sustentável.",
      icon: "☀️",
    },
    {
      title: "Energia Eólica",
      description: "Transforme a força dos ventos em energia limpa e eficiente.",
      icon: "🌪️",
    },
    {
      title: "Eficiência Energética",
      description: "Otimize seu consumo e reduza custos com soluções inteligentes.",
      icon: "⚡",
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-6xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transformando o Futuro da Energia
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Descubra soluções inovadoras para um consumo energético mais consciente e sustentável.
          </p>
          <div className="flex gap-4">
            <Link
              to="/solucao"
              className="px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 font-semibold"
            >
              Nossas Soluções
            </Link>
            <Link
              to="/sobre"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition duration-300 font-semibold"
            >
              Saiba Mais
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Energia Inteligente para um Futuro Sustentável
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {energyCards.map((card, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
              <p className="text-gray-600">Redução em Emissões de CO2</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">50%</div>
              <p className="text-gray-600">Economia em Custos Energéticos</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">1000+</div>
              <p className="text-gray-600">Projetos Implementados</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Pronto para Transformar seu Consumo de Energia?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Junte-se a nós na missão de criar um futuro energético mais sustentável e eficiente.
          </p>
          <Link
            to="/cadastrar"
            className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition duration-300 font-semibold inline-block"
          >
            Comece Agora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;