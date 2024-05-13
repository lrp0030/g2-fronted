import React from "react";
import { Link } from "react-router-dom";

const Primaria = () => {
  return (
    <nav>
      <div className="barra">
        <h1 className="elemento">SELECCIONE EL CURSO</h1>
      </div>
      <div className="centrado" style={centradoStyle}> {/* Nuevo contenedor para centrar */}
        <div className="cuadro-container" style={containerStyle}>
          {/* Primera columna */}
          <div className="columna">
            <Link to="/Listaexperimentos/grupo/1" className="cuadros" style={cuadroStyle}>1º </Link>
            <Link to="/Listaexperimentos/grupo/2" className="cuadros" style={cuadroStyle}>2º </Link>
            <Link to="/Listaexperimentos/grupo/3" className="cuadros" style={cuadroStyle}>3º </Link>
          </div>
          {/* Segunda columna */}
          <div className="columna">
            <Link to="/Listaexperimentos/grupo/4" className="cuadros" style={cuadroStyle}>4º </Link>
            <Link to="/Listaexperimentos/grupo/5" className="cuadros" style={cuadroStyle}>5º </Link>
            <Link to="/Listaexperimentos/grupo/6" className="cuadros" style={cuadroStyle}>6º </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Primaria;

const cuadroStyle = {
  marginBottom: "20px", // Espacio entre cuadros
  width: "400px", // Ancho del rectángulo
  height: "200px", // Altura del rectángulo
  borderRadius: "50px", // Bordes redondeados
  backgroundColor: "rgb(120, 168, 128)", // Color de fondo del rectángulo
  display: "flex", // Para alinear el texto verticalmente
  justifyContent: "center", // Para centrar el texto horizontalmente
  alignItems: "center", // Para centrar el texto verticalmente
  textDecoration: "none", // Quitar subrayado de los enlaces
  color: "white", // Color de texto blanco
  fontSize: "50px", // Tamaño de letra
  fontWeight: "bold", // Texto en negrita
};

const containerStyle = {
  display: "grid", // Utilizar un diseño de cuadrícula
  gridTemplateColumns: "1fr 1fr", // Dos columnas con el mismo tamaño
  gap: "20px", // Espacio entre las columnas
  justifyContent: "center", // Centrar horizontalmente las columnas
  marginBottom: "20px", // Agregamos margen inferior al contenedor
};

const centradoStyle = {
  display: "flex", // Utilizar flexbox
  justifyContent: "center", // Centrar horizontalmente
  paddingLeft: "20px", // Agregar espacio en el lado izquierdo
};

