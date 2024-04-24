// Login.js
import React from "react";
import styles from "../assets/css/Login.module.css";
import Logo from "../assets/img/Logo_educación.png";
import { Link } from "react-router-dom"; // Importa el componente Link

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles["logo-container"]}>
          <img src={Logo} alt="Logo" className={styles.logo} />
        </div>
        <div className={styles["login-form"]}>
          <form>
            <div className={styles["form-group"]}>
              <label htmlFor="username">Usuario:</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Introduzca el usuario"
              />
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Introduzca la contraseña"
              />
            </div>
            
            <Link to="/Paginaprincipal" className={styles["btn-login"]}>Ingresar</Link>
            <div className={styles["register-link"]}>
              <p>
                <a href="/registro">Regístrate aquí</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
