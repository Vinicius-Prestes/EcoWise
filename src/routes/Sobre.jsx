import React from "react";

const Sobre = () => {
  const features = [
    {
      title: "Sustentabilidade",
      description: "Promovemos práticas sustentáveis e conscientização ambiental para um futuro mais verde."
    },
    {
      title: "Energia Renovável",
      description: "Defendemos o uso de fontes de energia limpa e renovável para reduzir impactos ambientais."
    },
    {
      title: "Educação Ambiental",
      description: "Compartilhamos conhecimento e incentivamos práticas sustentáveis na comunidade."
    },
    {
      title: "Impacto Global",
      description: "Trabalhamos para criar um impacto positivo no meio ambiente em escala global."
    }
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sobre Nós
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Nosso objetivo é conscientizar as pessoas sobre o uso responsável de
            energia e como fontes renováveis podem impactar positivamente o meio
            ambiente.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-green-600 text-2xl font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 max-w-3xl mx-auto">
            Junte-se a nós nesta missão de criar um futuro mais sustentável
            através da conscientização e ação coletiva. Cada pequena mudança
            pode fazer uma grande diferença para nosso planeta.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sobre;