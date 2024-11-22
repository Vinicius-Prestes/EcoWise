import React from "react";

const Solucao = () => {
  const solutions = [
    {
      title: "Diagnóstico Energético",
      description: "Análise completa do seu consumo de energia para identificar oportunidades de otimização e economia.",
      features: [
        "Análise detalhada do consumo",
        "Identificação de desperdícios",
        "Relatório personalizado",
        "Recomendações específicas"
      ],
      icon: "📊"
    },
    {
      title: "Energia Solar",
      description: "Soluções completas em energia solar, desde o projeto até a instalação e manutenção.",
      features: [
        "Projeto personalizado",
        "Instalação profissional",
        "Monitoramento remoto",
        "Manutenção preventiva"
      ],
      icon: "☀️"
    },
    {
      title: "Automação e Controle",
      description: "Sistemas inteligentes para gerenciamento e controle do consumo energético.",
      features: [
        "Controle automático",
        "Monitoramento em tempo real",
        "Alertas personalizados",
        "Interface intuitiva"
      ],
      icon: "🤖"
    }
  ];

  const benefits = [
    {
      title: "Economia",
      description: "Reduza seus custos com energia em até 50%",
      icon: "💰"
    },
    {
      title: "Sustentabilidade",
      description: "Diminua sua pegada de carbono",
      icon: "🌱"
    },
    {
      title: "Eficiência",
      description: "Optimize seu consumo energético",
      icon: "⚡"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Soluções Energéticas Inteligentes
          </h1>
          <p className="text-xl max-w-2xl">
            Transforme sua gestão energética com nossas soluções inovadoras e sustentáveis.
            Economize recursos e contribua para um futuro mais limpo.
          </p>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Nossas Soluções
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="text-4xl mb-4">{solution.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {solution.description}
                  </p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Benefícios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Pronto para Começar?
          </h2>
          <p className="text-xl mb-8">
            Entre em contato conosco para uma avaliação gratuita das suas necessidades energéticas.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
            Fale Conosco
          </button>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Como Funciona
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Diagnóstico", description: "Análise completa da sua situação atual" },
              { step: "2", title: "Planejamento", description: "Desenvolvimento do projeto personalizado" },
              { step: "3", title: "Implementação", description: "Execução das soluções propostas" },
              { step: "4", title: "Monitoramento", description: "Acompanhamento contínuo dos resultados" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solucao;