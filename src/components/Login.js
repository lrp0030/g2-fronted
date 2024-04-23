import React, { useState, useEffect } from "react";
import db from "./firebaseConfig"; // Importa la instancia de Firestore desde donde la hayas exportado

const Login = () => {
    const [dato, setDato] = useState("");

    useEffect(() => {
        const usuariosRef = collection(db, "usuarios");
        getDocs(usuariosRef)
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    const datoEspecifico = data.nombre_usuario;
                    setDato(datoEspecifico);
                });
            })
            .catch((error) => {
                console.log("Error al obtener los datos:", error);
            });
    }, []);

    return (
        <div>
            <h1>¡Hola!</h1>
            <p>El dato obtenido de Firestore es: {dato}</p>
        </div>
    );
};

export default Login;
