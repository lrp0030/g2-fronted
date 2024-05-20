import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import styles from "../assets/css/Experimento.module.css"; 
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import ejemploImage from '../assets/img/ejemplo.jpg';
import galileoImage from '../assets/img/galileo3.png'; // Import the new image

function Experimento() {
  const [experimento, setExperimento] = useState(null);
  const [pasoActual, setPasoActual] = useState(0);
  const { id } = useParams();
  
  //Configuración para el carrousel de fotos
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  useEffect(() => {
    const fetchExperimento = async () => { 
      const docRef = doc(db, "actividades", "infantil", "actividades", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setExperimento({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log("No such document!");
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
      <img src={galileoImage} alt="Galileo" className={styles.galileoImage} /> {/* Added image */}
      <div className={styles.header}>
        <h1 className={styles.experimentoTitle}>{experimento.titulo}</h1>
        <span className={styles.grupo}>{experimento.grupo}</span>
      </div>
      <p className={styles.experimentoDescription}>{experimento.descripcion_actividad}</p>
      <div className={styles.hipotesis}>
        <h3>Preguntas Hipotéticas Iniciales:</h3>
        <ul>
          {experimento.preguntas_iniciales_hipotesis.map(pregunta => (
            <li key={pregunta}>{pregunta}</li>
          ))}
        </ul>
      </div>
      <h2 className={styles.materialsHeader}>Materiales necesarios:</h2>
      <ul className={styles.materialList}>
        {experimento.materiales.map(material => (
          <li key={material} className={styles.materialItem}>{material}</li>
        ))}
      </ul> 
      <div className={styles.controls}>
        <button className={styles.controlButton} onClick={pasoAnterior} disabled={pasoActual === 0}>
          <FaArrowLeft /> Anterior
        </button>
        <div className={styles.carouselContainer}>
          <Slider {...settings}>
            <div>
              <img src={ejemploImage} alt="Experimento" />
            </div>
            <div>
              <img src={ejemploImage} alt="Experimento" />
            </div>
            <div>
              <img src={ejemploImage} alt="Experimento" />
            </div>
            <div>
              <img src={galileoImage} alt="Experimento" /> {/* New image */}
            </div>
          </Slider>
        </div>
        <p>Paso {pasoActual + 1}: {experimento.Pasos[pasoActual]}</p>
        <button className={styles.controlButton} onClick={siguientePaso} disabled={pasoActual === experimento.Pasos.length - 1}>
          Siguiente <FaArrowRight />
        </button>
      </div>
      <div className={styles.conclusion}>
        <h3>Preguntas Finales para Conclusión:</h3>
        <ul>
          {experimento.preguntas_finales_conclusion.map(pregunta => (
            <li key={pregunta}>{pregunta}</li>
          ))}
        </ul>
      </div>
      <p className={styles.explicacion}>{experimento.explicacion}</p>
    </div>
  );
}

export default Experimento;
