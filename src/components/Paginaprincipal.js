import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Cursosniveles.css";
import "../assets/css/Paginalniveles.css";

const Paginaprincipal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="barra">
        <h2 className="elemento1">
          <Link to="/" className="enlace-cerrar">cerrar</Link>
        </h2>
        <h1 className="elemento">SELECCIONA EL NIVEL ACADEMICO</h1>
        <button className="menu_button" onClick={() => setIsOpen(!isOpen)}>
          logo casa
        </button>
        <div className={`nav_items ${isOpen && "open"}`}>
          <a href="#" className="item-cambiar">cambiar</a>
        </div>
        <div
          className={`nav_toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
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
        {/* Agrega el enlace aquí */}
        <Link to="/Listaexperimentos/primaria/5" style={{ textDecoration: "none", color: "white", fontSize: "24px", fontWeight: "bold" }}>5</Link>
      </div>
    </nav>
  );
};

export default Paginaprincipal;

const cuadroStyle = {
  padding: "10px", // Espaciado interno del cuadro
  borderRadius: "50px", // Bordes redondeados del rectángulo
  backgroundColor: "rgb(120,168,128)", // Color de fondo del cuadro
  textAlign: "center", // Alinear el texto al centro
  display: "inline-block", // Hacer que los cuadros se muestren en línea
  textDecoration: "none", // Quitar subrayado de los enlaces
  color: "white", // Color de texto blanco
  fontSize: "24px", // Tamaño de letra aumentado
  fontWeight: "bold", // Texto en negrita
};

const containerStyle = {
  display: "flex",
  justifyContent: "space-around",
};
