import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import db from './firebaseConfig';

function Experimento() {
  const [experimento, setExperimento] = useState(null);
  const [pasoActual, setPasoActual] = useState(0);
  const { actividadId } = useParams(); // Asegúrate de que el nombre del parámetro coincide con el configurado en tu ruta

  useEffect(() => {
    const fetchExperimento = async () => {
      console.log("Fetching data for ID:", actividadId); // Depuración para confirmar el ID
      const docRef = doc(db, "actividades", "infantil", "actividades", actividadId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data()); // Depuración para ver los datos obtenidos
        setExperimento({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log("No such document!"); // Informa si el documento no existe
      }
    };

    fetchExperimento();
  }, [actividadId]); // Asegúrate de que actividadId está definido como dependencia

  if (!experimento) {
    return <div>Loading...</div>;
  }

  const siguientePaso = () => {
    if (pasoActual < experimento.pasos.length - 1) {
      setPasoActual(pasoActual + 1);
    }
  };

  const pasoAnterior = () => {
    if (pasoActual > 0) {
      setPasoActual(pasoActual - 1);
    }
  };

  return (
    <div>
      <h1>{experimento.titulo}</h1>
      <p>{experimento.descripcion}</p>
      <h2>Materiales necesarios:</h2>
      <ul>
        {experimento.materiales.map(material => <li key={material}>{material}</li>)}
      </ul>
      <div>
        <button onClick={pasoAnterior} disabled={pasoActual === 0}>Anterior</button>
        <p>Paso {pasoActual + 1}: {experimento.pasos[pasoActual]}</p>
        <button onClick={siguientePaso} disabled={pasoActual === experimento.pasos.length - 1}>Siguiente</button>
      </div>
    </div>
  );
}

export default Experimento;
