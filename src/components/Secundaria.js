import React from "react";
import { Link } from "react-router-dom"; 
import "../assets/css/Cursosniveles.css";

const Secundaria = () => {
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
        <Link to="/experimentos" className="recuadro">1º ESO</Link>
        <a href="" className="recuadro">4º ESO</a>
      </div>

      <div className="recuadro-container">
        <a href="" className="recuadro">2º ESO</a>
        <a href="" className="recuadro">3º PRIMARIA</a>
      </div>
    </nav>
  );
};

export default Secundaria;
