import React from "react";

const Login = () => {
  return (
    <div className="max-w-sm mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800">Login</h1>
      <form className="mt-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <input
          type="password"
          placeholder="Senha"
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button className="w-full py-2 bg-blue-600 text-white rounded">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;