import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold text-gray-800">404 - Página Não Encontrada</h1>
      <p className="text-gray-600 my-4">A página que você procura não existe.</p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Voltar para Home
      </Link>
    </div>
  );
};

export default Error;