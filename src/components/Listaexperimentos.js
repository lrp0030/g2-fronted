import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Cursosniveles.css";
import "../assets/css/Lista.css"


const Listaexperimentos = () => {
  return (
    <div>
      <div className="barra">
        <div className="menu-c">
          <label className="abrir-menu" htmlFor="btn-menu">lista</label>
        </div>
        <input type="checkbox" id="btn-menu" />
        <div className="menu-c" id="menu">
          <nav>
            <Link to="/Paginaprincipal">Experimento 1</Link>
            <Link to="/Paginaprincipal">Experimento 2</Link>
          </nav>
          <label htmlFor="btn-menu">X</label>
        </div>
        <h1 className="elemento">EXPERIMENTOS</h1>
        <div className="lista-enlaces"></div>
      </div>

      <div className="recuadro-container">
        <div className="recuadro">SLIME</div>
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
