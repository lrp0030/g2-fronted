import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Importa Link
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import styles from "../assets/css/Login.module.css";
import Logo from "../assets/img/Logo_educación.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Estado para guardar errores
  const navigate = useNavigate(); // Para redirigir al usuario
  const auth = getAuth(); // Asume que `getAuth()` fue exportado desde tu config

  const handleLogin = async (event) => {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/Paginaprincipal"); // Navega al dashboard principal
    } catch (error) {
      setError(error.message); // Manejo de errores
      console.error("Error de autenticación:", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles["logo-container"]}>
          <img src={Logo} alt="Logo" className={styles.logo} />
        </div>
        <form className={styles["login-form"]} onSubmit={handleLogin}>
          <div className={styles["form-group"]}>
            <label htmlFor="email">Correo electrónico:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Introduzca el correo electrónico"
            />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Introduzca la contraseña"
            />
          </div>
          <button type="submit" className={styles["btn-login"]}>Ingresar</button>
          {error && <div className={styles["error"]}>{error}</div>}
        </form>
        <div className={styles["register-link"]}>
          <p><a href="/registro">Regístrate aquí</a></p>
          <p><Link to="/contrasena">Recuperar contraseña</Link></p>  
        </div>
      </div>
    </div>
  );
};

export default Login;
