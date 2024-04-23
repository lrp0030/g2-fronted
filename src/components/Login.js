import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "./firebaseConfig";

const Login = () => {
    const [nombreUsuario, setNombreUsuario] = useState("");

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const usuariosRef = collection(db, "centro1"); // Cambia "usuarios" por el nombre de la colección que contiene el documento
                const snapshot = await getDocs(usuariosRef);
                snapshot.forEach((doc) => {
                    const data = doc.data();
                    const nombre = data.nombre_usuario;
                    setNombreUsuario(nombre);
                });
            } catch (error) {
                console.error("Error al obtener datos:", error);
            }
        };

        obtenerDatos();
    }, []);

    return (
        <div>
            <h1>¡Hola!</h1>
            <p>El nombre de usuario obtenido de Firestore es: {nombreUsuario}</p>
        </div>
    );
};

export default Login;
