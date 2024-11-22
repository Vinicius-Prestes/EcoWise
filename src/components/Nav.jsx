import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-blue-600 text-white py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Conscientização Energética
        </Link>
        <div className="flex gap-4">
          <Link to="/sobre" className="hover:underline">
            Sobre
          </Link>
          <Link to="/solucao" className="hover:underline">
            Solução
          </Link>
          <Link to="/login" className="hover:underline">
            Login
          </Link>
          <Link to="/cadastrar" className="hover:underline">
            Cadastrar
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;