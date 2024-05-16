import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Cursosniveles.css";
import "../assets/css/Paginalniveles.css";
import Burguerbutton from "./menudesple";

const Paginaprincipal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="barra">
        <h2 className="elemento1">
          <Link to="/" className="enlace-cerrar">cerrar</Link>
        </h2>
        <h1 className="elemento">SELECCIONA EL NIVEL ACADEMICO</h1>
       
        <div className={`nav_items ${isOpen && "open"}`}>
          <a href="#" className="item-cambiar">cambiar</a>
        </div>
      </div>
      <div className="cuadro-container" style={containerStyle}>
        <Link to="/Infantil" className="cuadros infantil" style={cuadroStyle}>
          <div className="medio">INFANTIL</div>
        </Link>
        <Link to="/Primaria" className="cuadros primaria" style={cuadroStyle}>
          <div className="medio">PRIMARIA</div>
        </Link>
        <Link to="/Secundaria" className="cuadros secundaria" style={cuadroStyle}>
          <div className="medio">SECUNDARIA</div>
        </Link>
        <Link to="/Listaexperimentos/primaria/5" style={{ textDecoration: "none", color: "white", fontSize: "24px", fontWeight: "bold" }}>5</Link>
      </div>
    </nav>
  );
};

export default Paginaprincipal;

const cuadroStyle = {
  padding: "10px",
  borderRadius: "50px",
  backgroundColor: "rgb(120,168,128)",
  textAlign: "center",
  display: "inline-block",
  textDecoration: "none",
  color: "white",
  fontSize: "24px",
  fontWeight: "bold",
};

const containerStyle = {
  display: "flex",
  justifyContent: "space-around",
};
