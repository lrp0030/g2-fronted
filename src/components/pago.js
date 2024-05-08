
import React from "react";
import "../assets/css/Registro.css";
import { Link } from "react-router-dom"; 
import "../assets/css/pago.css";

const MesAnoTarjeta = () => {
  return (
    <div className="mes-ano-tarjeta">
      <input className="mes-ano-tarjeta__mes" type="text" maxLength="2" placeholder="MM" />
      <span className="mes-ano-tarjeta__separador">/</span>
      <input className="mes-ano-tarjeta__ano" type="text" maxLength="2" placeholder="YY" />
    </div>
  );
}


const Datosbancarios = () => {
  return (
    <div>
    <section className="form-register">
    
      <label htmlFor="nombre">Numero tarjeta</label>
      <input className="controls" type="text" name="nombres" id="nombres" placeholder="****/****/****/****"></input>
        <label htmlFor="cvv">CVV</label>
        <input className="controls" type="text" name="cvv" id="cvv" placeholder="Ingrese el CVV" />
        <MesAnoTarjeta />
        <Link to="/Pago" className="boton">validar</Link>
        <Link to="/registro" className="boton">Atrás</Link>
    </section>
    </div>
  );


}
export default Datosbancarios;
