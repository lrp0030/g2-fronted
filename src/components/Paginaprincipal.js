import React, {useState}from "react";
import { Link } from "react-router-dom"; 
import "../assets/css/Cursosniveles.css";
import "../assets/css/Paginalniveles.css";

const Paginaprincipal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div className="barra">
      <h2 className="elemonto1">
          {/* Utiliza Link en lugar de link */}
          <Link to="/">cerrar</Link>
        </h2>
        <h1 className="elemento">SELECCIONA EL NIVEL ACADEMICO</h1>
        {/* Botón de menú */}
        <button className="menu_button" onClick={() => setIsOpen(!isOpen)}>
          logo casa
        </button>
        {/* Menú desplegable */}
        <div className={`nav_items ${isOpen && "open"}`}>
          <a href="#">cambiar</a>
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
      <div className="cuadro-container">
        <Link to="/infantil" className="cuadros infantil "><div className="medio">INFANTIL</div></Link>
        <Link to="/Cursosniveles" className="cuadros primaria"><div className="medio">PRIMARIA</div></Link>
        <Link to="/Secundaria" className="cuadros secundaria"><div className="medio">SECUNDARIA</div></Link>
      </div>
    </nav>
  );
}

export default Paginaprincipal;
