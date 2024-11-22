import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Sobre from "./routes/Sobre";
import Solucao from "./routes/Solucao";
import Login from "./routes/Login";
import Cadastrar from "./routes/Cadastrar";
import Error from "./routes/Erro";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Nav />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/solucao" element={<Solucao />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastrar" element={<Cadastrar />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;