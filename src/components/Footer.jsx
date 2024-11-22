import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Grid de 3 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coluna 1 - Sobre */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-green-400">Sobre Nós</h3>
            <p className="text-gray-300">
              Comprometidos com a conscientização energética e sustentabilidade para um futuro melhor.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-green-400">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-green-400">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="/sobre" className="text-gray-300 hover:text-green-400">
                  Sobre
                </a>
              </li>
              <li>
                <a href="/solucao" className="text-gray-300 hover:text-green-400">
                  Soluções
                </a>
              </li>
              <li>
                <a href="/contato" className="text-gray-300 hover:text-green-400">
                  Contato
                </a>
              </li>
              <li>
                <a href="/login" className="text-gray-300 hover:text-green-400">
                  Login
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Contato */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-green-400">Contato</h3>
            <div className="space-y-2">
              <p className="text-gray-300">
                <i className="fas fa-envelope mr-2"></i>
                contato@energetica.com
              </p>
              <p className="text-gray-300">
                <i className="fas fa-phone mr-2"></i>
                +55 (11) 1234-5678
              </p>
              <p className="text-gray-300">
                <i className="fas fa-map-marker-alt mr-2"></i>
                São Paulo, SP - Brasil
              </p>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          {/* Copyright e Links de Política */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 Conscientização Energética. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-green-400 text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 text-sm">
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