import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore"; // Importa doc y getDoc desde firebase/firestore
import db from "./firebaseConfig"; // Asegúrate de que firebaseConfig exporte la instancia de Firestore

const DetalleExperimento = () => {
    const { id } = useParams(); // Utiliza useParams para obtener el ID del experimento de los parámetros de la URL
    const [experimento, setExperimento] = useState(null);

    useEffect(() => {
        const fetchExperimento = async () => {
            try {
                const experimentoRef = doc(db, "actividades", id); // Utiliza doc y db correctamente
                const experimentoSnap = await getDoc(experimentoRef); // Utiliza getDoc correctamente

                if (experimentoSnap.exists()) {
                    // Si el experimento existe, establecer los datos en el estado
                    setExperimento(experimentoSnap.data());
                } else {
                    // Si el experimento no existe, mostrar un mensaje de error
                    console.log("No se encontró el experimento.");
                }
            } catch (error) {
                console.log("Error al obtener el experimento:", error);
            }
        };

        fetchExperimento(); // Llama a la función para obtener el experimento cuando el componente se monta
    }, [id]); // Ejecutar efecto cuando cambie el ID del experimento

    return (
        <div>
            {experimento ? (
                <div>
                    <h2>{experimento.titulo}</h2>
                    <p>Materiales:</p>
                    <ul>
                        {Array.isArray(experimento.materiales) ? (
                            // Si experimento.materiales es un array, mapearlo
                            experimento.materiales.map((material, index) => (
                                <li key={index}>{material}</li>
                            ))
                        ) : (
                            // Si experimento.materiales no es un array, mostrar un mensaje de error
                            <li>Error: Los materiales no están disponibles.</li>
                        )}
                    </ul>
                </div>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};

export default DetalleExperimento;
