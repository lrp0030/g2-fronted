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
                    // Verificar si el grupo es "3 años" antes de agregar la actividad
                    if (data.grupo === "3 años") {
                        actividadesData.push({
                            id: doc.id,
                            nombre: data.titulo // Asume que el campo 'titulo' contiene el nombre de la actividad
                        });
                    }
                });

                // Actualizar el estado con los datos de las actividades filtradas
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
                <div className="menu-c">
                    <label className="abrir-menu" htmlFor="btn-menu">
                        lista
                    </label>
                </div>
                <input type="checkbox" id="btn-menu" />
                <div className="menu-c" id="menu">
                    <nav>
                        {/* Mapea las actividades para renderizar los enlaces */}
                        {actividades.map((actividad) => (
                            <Link key={actividad.id} to={`/actividades/${actividad.id}`}>
                                {actividad.nombre}
                            </Link>
                        ))}
                    </nav>
                    <label htmlFor="btn-menu">X</label>
                </div>
                <h1 className="elemento">ACTIVIDADES</h1>
                <div className="lista-enlaces"></div>
            </div>
        </div>
    );
};

export default Listaexperimentosdatos;
