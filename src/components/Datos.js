import { useEffect, useState } from 'react';
import db from './firebaseConfig'; // Importa la instancia de Firestore desde donde la hayas exportado
import { collection, getDocs } from 'firebase/firestore';

const Datos = () => {
    const [nombreUsuario, setNombreUsuario] = useState("");

    useEffect(() => {
        const centro1Ref = collection(db, "centro1"); // Referencia a la colección "centro1"

        getDocs(centro1Ref)
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // Accede al campo "nombre_usuario" del documento
                    const nombre = doc.data().nombre_usuario;
                    setNombreUsuario(nombre); // Actualiza el estado con el nombre obtenido
                });
            })
            .catch((error) => {
                console.log("Error al obtener los datos:", error);
            });
    }, []);

    return (
        <div>
            <h1>Dato obtenido de Firebase:</h1>
            <p>{nombreUsuario}</p>
        </div>
    );
};

export default Datos;
