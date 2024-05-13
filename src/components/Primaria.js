import React from "react";
import { Link } from "react-router-dom"; 
import "../assets/css/Cursosniveles.css";

const Cursosniveles = () => {
  return (
    <nav>
      <div className="barra">
        <h2 className="elemonto1">
          {/* Utiliza Link en lugar de link */}
          <Link to="/Paginaprincipal">ATRÁS</Link>
        </h2>
        <h1 className="elemento">SELECCIONA EL CURSO</h1>
      </div>

      <div className="recuadro-container">
        {/* Utiliza Link en lugar de link */}
        <Link to="/listaexperimentos" className="recuadro">1º PRIMARIA</Link>
        <a href="" className="recuadro">4º PRIMARIA</a>
      </div>

      <div className="recuadro-container">
        <a href="" className="recuadro">2º PRIMARIA</a>
        <a href="" className="recuadro">5º PRIMARIA</a>
      </div>

      <div className="recuadro-container">
        <a href="" className="recuadro">3º PRIMARIA</a>
        <a href="" className="recuadro">6º PRIMARIA</a>
      </div>
    </nav>
  );
};

export default Cursosniveles;
