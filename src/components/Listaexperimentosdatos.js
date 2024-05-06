import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import db from "./firebaseConfig"; // Importa la instancia de Firestore desde donde la hayas exportado
import { collection, getDocs } from "firebase/firestore";

const Listaexperimentosdatos = () => {
    const [actividades, setActividades] = useState([]);

    useEffect(() => {
        const fetchActividades = async () => {
            try {
                const actividadesRef = collection(db, "actividades"); // Referencia a la colección "actividades"
                const querySnapshot = await getDocs(actividadesRef); // Obtener los documentos de la colección

                const actividadesData = []; // Array para almacenar los datos de las actividades

                // Iterar sobre los documentos y agregar los datos al array
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    actividadesData.push({
                        id: doc.id,
                        nombre: data.titulo // Asume que el campo 'titulo' contiene el nombre de la actividad
                    });
                });

                // Actualizar el estado con los datos de las actividades
                setActividades(actividadesData);
            } catch (error) {
                console.log("Error al obtener las actividades:", error);
            }
        };

        fetchActividades(); // Llama a la función para cargar las actividades cuando el componente se monta
    }, []);

    return (
        <div>
            <div className="barra">
                <div className="btn-menu">
                    <label htmlFor="btn-menu" className="icon-menu"></label>
                </div>
                <h1 className="elemento">EXPERIMENTOS</h1>
                <div className="lista-enlaces"></div>
            </div>

            <div className="recuadro-container">
                {/* Verificar si hay actividades para mostrar */}
                {actividades.length > 0 ? (
                    // Mapear las actividades para renderizar los recuadros
                    actividades.map((actividad) => (
                        <Link key={actividad.id} to={`/actividades/${actividad.id}`} style={buttonStyle}>
                            <div>{actividad.nombre}</div>
                        </Link>
                    ))
                ) : (
                    // Mostrar un mensaje si no hay actividades
                    <p>No hay actividades disponibles.</p>
                )}
            </div>

            <div className="container-menu">
                <div className="cont-menu">
                    <nav>
                        <a href="#">Lista1</a>
                        <a href="#">Lista2</a>
                        <a href="#">Lista3</a>
                        <a href="#">Lista4</a>
                    </nav>
                    <label htmlFor="" className="icon-equis"></label>
                </div>
            </div>
        </div>
    );
};

export default Listaexperimentosdatos;

// Estilos CSS personalizados para los botones
const buttonStyle = {
    display: "inline-block",
    backgroundColor: "rgb(120,168,128)", // Color de fondo del botón
    color: "#fff", // Color del texto del botón
    padding: "50px 50px", // Espaciado interno del botón (aumentado al triple)
    borderRadius: "50px", // Bordes redondeados del botón
    textDecoration: "none", // Elimina el subrayado del enlace
    border: "none", // Elimina el borde del botón
};
