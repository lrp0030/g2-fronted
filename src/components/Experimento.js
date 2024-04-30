import { useEffect, useState } from 'react';
import db from './firebaseConfig'; // Importa la instancia de Firestore desde donde la hayas exportado
import { collection, getDocs } from 'firebase/firestore';

const Experimento = () => {
    const [experimento, setExperimento] = useState({
        grupo: "",
        id_act: "",
        materiales: "",
        nivel_educativo: "",
        titulo: ""
    });

    const [numeroActividad, setNumeroActividad] = useState(0);

    useEffect(() => {
        const experimentoRef = collection(db, "actividades"); // Referencia a la colección "actividades"

        getDocs(experimentoRef)
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // Accede a los campos del documento
                    const data = doc.data();
                    setExperimento(data); // Actualiza el estado con la información del experimento
                    setNumeroActividad(data.numero_actividad); // Actualiza el estado con el número de actividad
                });
            })
            .catch((error) => {
                console.log("Error al obtener los datos:", error);
            });
    }, []);

    return (
        <div>

            <h1>Información del Experimento:</h1>
            <h3>Título: {experimento.titulo}</h3>
            <p>Grupo: {experimento.grupo}</p>
            <p>Actividad ID: {experimento.id_act}</p>
            <h4>Materiales: {experimento.materiales}</h4>
            <button>Nivel Educativo: {experimento.nivel_educativo}</button>
            <p>Número de Actividad: {numeroActividad}</p>
        </div>
    );
};

export default Experimento;
