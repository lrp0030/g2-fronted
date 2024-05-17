import React, { useState } from "react";
import "../assets/css/Registro.css";
import { useNavigate } from "react-router-dom";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Registro = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirmacion, setConfirmacion] = useState("");
  const navigate = useNavigate(); // Instancia de useNavigate

  const handleRegistro = async (event) => {
    event.preventDefault();

    if (contrasena !== confirmacion) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, correo, contrasena);
      const userId = userCredential.user.uid;

      const db = getFirestore();
      await setDoc(doc(db, "usuarios", userId), {
        nombre: nombre,
        correo: correo,
      });

      setNombre("");
      setCorreo("");
      setContrasena("");
      setConfirmacion("");

      alert("Registro exitoso. Ahora puedes iniciar sesión con tu correo electrónico y contraseña.");
      navigate("/suscripcion"); // Redirige a la página de suscripción
    } catch (error) {
      console.error("Error al crear usuario:", error.message);
      alert("Error al crear usuario. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <div>
      <section className="form-register">
        <h1>Registro</h1>
        <label htmlFor="nombre">Nombre usuario</label>
        <input
          className="controls"
          type="text"
          name="nombres"
          id="nombres"
          placeholder="Ingrese su Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label htmlFor="correo">correo electrónico</label>
        <input
          className="controls"
          type="email"
          name="correos"
          id="correo"
          placeholder="Ingrese su Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        <label htmlFor="pais">Pais</label>
        <select>
          <option value="es">España</option>
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
        <input
          className="controls"
          type="password"
          name="contrasena"
          id="contrasena"
          placeholder="Ingrese su Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />
        <label htmlFor="repetir">confirme contraseña</label>
        <input
          className="controls"
          type="password"
          name="confirmacion"
          id="confirmacion"
          placeholder="Confirme la contraseña"
          value={confirmacion}
          onChange={(e) => setConfirmacion(e.target.value)}
        />
        <p>
          Estoy de acuerdo con <a href="#">terminos y condiciones</a>
        </p>
        <button type="submit" className="boton" onClick={handleRegistro}>
          registrar
        </button>
        <p>
          <a href="/">¿Ya tienes cuenta?</a>
        </p>
      </section>
    </div>
  );
};

export default Registro;
