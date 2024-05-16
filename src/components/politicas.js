import React from "react";
import { Link } from "react-router-dom"; // Agrega esta línea para importar Link
import "../assets/css/flechas.css";
import Paginaprincipal from "./Paginaprincipal";

function Politica() {
    return (
        
        <nav>
        <div className="barra">
  
        <Link className="flecha" to="/Paginaprincipal"></Link>
  
          <h1 className="elemento">Politicas de privacidad</h1>
        </div>
        <br></br>
        </nav>
      
    )
}

export default Politica;
