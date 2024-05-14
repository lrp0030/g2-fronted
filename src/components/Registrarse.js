import React, { useState } from "react";
import "../assets/css/Registro.css";
import { Link } from "react-router-dom"; 
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { sendEmailVerification, getAuth , signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCznBE6lrZygi8cRovE5S3Hxas3PU7T4G8",
  authDomain: "reactfirebasegalilleo.firebaseapp.com",
  projectId: "reactfirebasegalilleo",
  storageBucket: "reactfirebasegalilleo.appspot.com",
  messagingSenderId: "147453531107",
  appId: "1:147453531107:web:15e207fea82068c72746d6",
  measurementId: "G-PM7H9GRF0R"
};

// Initialize Firebase

const Registro = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirmacion, setConfirmacion] = useState("");

  const handleRegistro = async (event) => {
    event.preventDefault();

    // Verificar que las contraseñas coincidan
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
      <button type="submit" id="registrar">registrar</button>
      <p><a href="/">¿Ya tienes cuenta?</a></p>
    </section>
    </div>
  );


}
export default Registro;
