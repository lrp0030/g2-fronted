import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Cursosniveles.css";
import "../assets/css/Lista.css";

const Listaexperimentos = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="barra">
        <h2 className="elemonto1">
          <Link to="/Paginaprincipal">ATRÁS</Link>
        </h2>
        <h1 className="elemento">EXPERIMENTOS</h1>
        {/* Botón de menú */}
        <button className="menu_button" onClick={() => setIsOpen(!isOpen)}>
          Menú
        </button>
        {/* Menú desplegable */}
        <div className={`nav_items ${isOpen && "open"}`}>
          <a href="#">Lista1</a>
          <a href="#">Lista2</a>
          <a href="#">Lista3</a>
          <a href="#">Lista4</a>
          <a href="#">lista5</a>
        </div>
        {/* Ícono del botón de alternancia */}
        <div
          className={`nav_toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="recuadro-container">
        <Link to="/Experimento" className="recuadro">
          SLIME
        </Link>
        <div className="recuadro">BURBUJA</div>
        <div className="recuadro">COLOREAR AGUA</div>
      </div>

      <div className="recuadro-container">
        <div className="recuadro">TERRARIO</div>
        <div className="recuadro">ARCO IRIS</div>
        <div className="recuadro">PINTURA EN LECHE</div>
      </div>
    </div>
  );
};

export default Listaexperimentos;
