import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Cursosniveles.css";
import "../assets/css/Paginalniveles.css";

const Infantil = () => {
  return (
    <nav>
      <div className="barra">
      <Link to="/Paginaprincipal">ATRÁS</Link>
        <h1 className="elemento">SELECCIONE EL CURSO</h1>
      </div>
      <div className="cuadro-container" style={containerStyle}>
        <Link to="/Listaexperimentos/grupo/3" className="cuadros" style={cuadroStyle}>3</Link>
        <Link to="/Listaexperimentos/grupo/4" className="cuadros" style={cuadroStyle}>4</Link>
        <Link to="/Listaexperimentos/grupo/5" className="cuadros" style={cuadroStyle}>5</Link> {/* Nuevo botón */}
      </div>
    </nav>
  );
};

export default Infantil;

const cuadroStyle = {
  marginBottom: "50px", // Reducir el espacio inferior
  width: "30%", // Ancho de los cuadros (ajustar según sea necesario)
  padding: "50px", // Espaciado interno del cuadro
  borderRadius: "50px", // Bordes redondeados del cuadro
  backgroundColor: "rgb(120,168,128)", // Color de fondo del cuadro
  textAlign: "center", // Alinear el texto al centro
  display: "inline-block", // Hacer que los cuadros se muestren en línea
  textDecoration: "none", // Quitar subrayado de los enlaces
  color: "white", // Color de texto blanco
  fontSize: "50px", // Tamaño de letra aumentado
  fontWeight: "bold", // Texto en negrita
  lineHeight: "100px", // Altura de línea igual a la altura del cuadro
};

const containerStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center", // Centrar los elementos verticalmente
  height: "100px", // Altura igual a la altura de la ventana
};
