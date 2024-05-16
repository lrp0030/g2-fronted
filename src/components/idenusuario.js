import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import db from './firebaseConfig';

function IdenUsuario() {
    const [usuario, setUsuario] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const firestore = getFirestore();
        const querydb = doc(firestore, 'subcripcion', id); // Utiliza 'id' obtenido de useParams
        getDoc(querydb).then((res) => {
            if (res.exists()) {
                setUsuario(res.data());
            } else {
                console.log("El documento no existe");
            }
        }).catch((error) => {
            console.log("Error al obtener el documento:", error);
        });
    }, [id]); 

    return (
        <nav>
            <div>
                <h1>Nombre del usuario: {usuario.nombre}</h1>
            </div>
        </nav>
    )
}

export default IdenUsuario;
