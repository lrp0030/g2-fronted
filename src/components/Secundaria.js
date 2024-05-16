import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/flechas.css";

const Secundaria = () => {
  return (
    <nav>
      <div className="barra">
        <Link className="flecha" to="/Paginaprincipal"></Link>
        <h1 className="elemento">SELECCIONA EL CURSO</h1>
      </div>

      <div className="centrado" style={centradoStyle}>
        <div className="cuadro-container" style={containerStyle}>
          {/* Primera columna */}
          <div className="columna">
            <Link to="/Listaexperimentos/secundaria/s1" className="cuadros" style={cuadroStyle}>1º</Link>
            <Link to="/Listaexperimentos/secundaria/s3" className="cuadros" style={cuadroStyle}>3º</Link>
          </div>
          {/* Segunda columna */}
          <div className="columna">
            <Link to="/Listaexperimentos/secundaria/s2" className="cuadros" style={cuadroStyle}>2º</Link>
            <Link to="/Listaexperimentos/secundaria/s4" className="cuadros" style={cuadroStyle}>4º</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Secundaria;

// Estilos integrados en el componente
const cuadroStyle = {
  marginBottom: '20px',
  width: '400px',
  height: '200px',
  borderRadius: '50px',
  backgroundColor: 'rgb(120, 168, 128)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
  color: 'white',
  fontSize: '50px',
  fontWeight: 'bold',
};

const containerStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '20px',
  justifyContent: 'center',
  marginBottom: '20px',
};

const centradoStyle = {
  display: 'flex',
  justifyContent: 'center',
  paddingLeft: '20px',
};
