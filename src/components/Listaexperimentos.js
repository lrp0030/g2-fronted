import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Cursosniveles.css";
import "../assets/css/Lista.css"


const Listaexperimentos = () => {
  return (
    <div>
      <div className="barra">
        <div className="btn-menu">
          <label htmlFor="btn-menu" className="icon-menu"></label>
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

      <p type="checkbox" id="btn-menu">
        <div className="container-menu" >
          <div className="cont-menu">
            <nav>
              <a href="#">Lista1</a>
              <a href="#">Lista2</a>
              <a href="#">Lista3</a>
              <a href="#">Lista4</a>
                </nav>
                <label htmlFor="" className="icon-equis"></label>
          </div>
        </div>
      </p>
    </div>
  );
};

export default Listaexperimentos;
