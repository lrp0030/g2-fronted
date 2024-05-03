
import React from "react";
import "../assets/css/Registro.css";
import { Link } from "react-router-dom"; 

const Registro = () => {
  return (
    <div>
    <section className="form-register">
      <h1>Registro</h1>
      <input className="controls" type="text" name="nombres" id="nombres" placeholder="Ingrese su Nombre"></input>
      <input className="controls" type="text" name="apellidos" id="apellidos" placeholder="Ingrese su apellido"></input>
      <input className="controls" type="email" name="correos" id="correo" placeholder="Ingrese su Correo"></input>
      <input className="controls" type="password" name="contrasena" id="contrasena" placeholder="Ingrese su Contraseña"></input>
      <input className="controls" type="text" name="confirmacion" id="confirmacion" placeholder="Confirme la contraseña"></input>
      <input className="controls" type="text" name="centro" id="centro" placeholder="Ingrese Su centro"></input>
      <p>Estoy de acuerdo con <a href="#">terminos y condiciones</a></p>
      <input className="boton" type="submit"></input>
      <p><a href="/">¿Ya tengo cuenta?</a></p>
    </section>
    </div>
  );


}
export default Registro;
