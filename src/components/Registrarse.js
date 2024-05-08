
import React from "react";
import "../assets/css/Registro.css";
import { Link } from "react-router-dom"; 

const Registro = () => {
  return (
    <div>
    <section className="form-register">
      <h1>Registro</h1>
      <label htmlFor="nombre">Nombre usuario</label>
      <input className="controls" type="text" name="nombres" id="nombres" placeholder="Ingrese su Nombre"></input>
      <label htmlFor="correo">correo electrónico</label>
      <input className="controls" type="email" name="correos" id="correo" placeholder="Ingrese su Correo"></input>
      <label htmlFor="pais">Pais</label>
      <select>
        <option value="mx">España</option>
      </select>
      <label htmlFor="provincia">Provincia</label>
      <select>
        <option value="and">Andalucía</option>
      </select>
      <label htmlFor="ciudad">ciudad</label>
      <select>
        <option value="sv">Sevilla</option>
      </select>
      <label htmlFor="contraseña">contraseña</label>
      <input className="controls" type="password" name="contrasena" id="contrasena" placeholder="Ingrese su Contraseña"></input>
      <label htmlFor="repetir">confirme contraseña</label>
      <input className="controls" type="text" name="confirmacion" id="confirmacion" placeholder="Confirme la contraseña"></input>
      
      <p>Estoy de acuerdo con <a href="#">terminos y condiciones</a></p>
      <Link to="/Pago" className="boton">Siguiente</Link>
      <p><a href="/">¿Ya tienes cuenta?</a></p>
    </section>
    </div>
  );


}
export default Registro;
