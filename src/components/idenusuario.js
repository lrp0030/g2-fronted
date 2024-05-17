import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

function IdenUsuario({ userId }) {
    const [usuario, setUsuario] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const firestore = getFirestore();
                const querydb = doc(firestore, 'subcripcion', userId); // Usar userId en lugar de id
                const res = await getDoc(querydb);
                if (res.exists()) {
                    setUsuario(res.data().nombre);
                } else {
                    console.log("El documento no existe");
                }
            } catch (error) {
                console.log("Error al obtener el documento:", error);
            }
        };

        if (userId) {
            fetchUser();
        }
    }, [userId]);

    return (
        <div className="usuario">
            {usuario && <h2>{usuario}</h2>}
        </div>
    );
}

export default IdenUsuario;

