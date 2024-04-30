import React from "react";
import { Link } from "react-router-dom"; 
import "../assets/css/Cursosniveles.css";
import "../assets/css/Paginalniveles.css";

const Infantil = () => {
  return (
    <nav>
      <div className="barra">
        <h1 className="elemento">SELECCIONE EL CURSO</h1>
      </div>
      <div className="cuadro-container">
        <Link to="/experimentos" className="cuadros">4</Link>
        <Link to="/experimentos" className="cuadros">5</Link>
        <Link to="/experimentos" className="cuadros">6</Link>
      </div>
    </nav>
  );
}

export default Infantil;
