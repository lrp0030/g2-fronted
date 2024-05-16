import React from "react";
import "../assets/css/menudesple.css";
import politicas from "./politicas";
import Terminos from "./terminos";
function Burguerbutton() {
    return (
        
            <div className="icon nav-icon-5">
                <h1>Ajustes adicionales</h1>
                 <a href="/Politica" className="contactos">contactenos</a>
                 <a className="politicas">politicas de privacidad</a>
                <a  className="enlace-cerrar">cerrar sesion</a>
                
            </div>
      
    )
}

export default Burguerbutton;

