import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import db from './firebaseConfig';
import styles from "../assets/css/Experimento.module.css"; 
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function Experimento() {
  const [experimento, setExperimento] = useState(null);
  const [pasoActual, setPasoActual] = useState(0);
  const { id } = useParams(); // Asegúrate de que el nombre del parámetro coincide con el configurado en tu ruta

  useEffect(() => {
    const fetchExperimento = async () => { 
      const docRef = doc(db, "actividades", "infantil", "actividades", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data()); // Depuración para ver los datos obtenidos
        setExperimento({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log("No such document!"); // Informa si el documento no existe
      }
    };

    fetchExperimento();
  }, [id]);

  if (!experimento) {
    return <div>Loading...</div>;
  }

  const siguientePaso = () => {
    if (pasoActual < experimento.Pasos.length - 1) {
      setPasoActual(pasoActual + 1);
    }
  };

  const pasoAnterior = () => {
    if (pasoActual > 0) {
      setPasoActual(pasoActual - 1);
    }
  };

  return (
    <div className={styles.experimentoContainer}>
        <h1 className={styles.experimentoTitle}>{experimento?.titulo}</h1>
        <p className={styles.experimentoDescription}>{experimento?.descripcion}</p>
        <h2 className={styles.materialsHeader}>Materiales necesarios:</h2>
        <ul className={styles.materialList}>
            {experimento?.materiales.map(material => (
                <li key={material} className={styles.materialItem}>{material}</li>
            ))}
        </ul>
        <div className={styles.controls}>
            <button className={styles.controlButton} onClick={pasoAnterior} disabled={pasoActual === 0}>
                <FaArrowLeft /> Anterior
            </button>
            <p>Paso {pasoActual + 1}: {experimento?.Pasos[pasoActual]}</p>
            <button className={styles.controlButton} onClick={siguientePaso} disabled={pasoActual === experimento.Pasos.length - 1}>
                Siguiente <FaArrowRight />
            </button>
        </div>
    </div>
  );
}

export default Experimento;
