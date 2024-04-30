import React from "react";
import { Link } from "react-router-dom"; 
import "../assets/css/Cursosniveles.css";
import "../assets/css/Paginalniveles.css";

const Paginaprincipal = () => {
  return (
    <nav>
      <div className="barra">
        <h1 className="elemento">SELECCIONA EL NIVEL ACADEMICO</h1>
      </div>
      <div className="cuadro-container">
        <Link to="/infantil" className="cuadros">INFANTIL</Link>
        <Link to="/Cursosniveles" className="cuadros">PRIMARIA</Link>
        <Link to="/Secundaria" className="cuadros">SECUNDARIA</Link>
      </div>
    </nav>
  );
}

export default Paginaprincipal;
