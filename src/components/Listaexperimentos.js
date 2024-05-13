import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import db from "./firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";

const Listaexperimentos = () => {
    const { grupo } = useParams();
    const [actividades, setActividades] = useState([]);
    const location = useLocation();
    const grupoSeleccionado = location.pathname.split("/").pop(); // Obtener el último segmento de la URL

    useEffect(() => {
        const fetchActividades = async () => {
            try {
                if (grupoSeleccionado) {
                    const actividadesRef = collection(db, "actividades", "infantil", "actividades");
                    let q;
                    if (grupoSeleccionado === "3") {
                        q = query(actividadesRef, where("grupo", "==", 3));
                    } else if (grupoSeleccionado === "4") {
                        q = query(actividadesRef, where("grupo", "==", 4));
                    } else if (grupoSeleccionado === "5") {
                        q = query(actividadesRef, where("grupo", "==", 5));
                    }
                    
                    if (q) {
                        const querySnapshot = await getDocs(q);
                        const actividadesData = [];
                        querySnapshot.forEach((doc) => {
                            const data = doc.data();
                            actividadesData.push({
                                id: doc.id,
                                nombre: data.titulo
                            });
                        });
                        setActividades(actividadesData);
                    }
                }
            } catch (error) {
                console.log("Error al obtener las actividades:", error);
            }
        };

        fetchActividades();
    }, [grupoSeleccionado]);

    return (
        <div>
            {/* Renderizado de los documentos */}
            <div className="barra">
                <div className="btn-menu">
                    <label htmlFor="btn-menu" className="icon-menu"></label>
                </div>
                <h1 className="elemento">EXPERIMENTOS</h1>
                <div className="lista-enlaces"></div>
            </div>

            <div className="recuadro-container">
                {actividades.length > 0 ? (
                    actividades.map((actividad, index) => (
                        <div key={actividad.id} className="recuadro" style={rectangleStyle}>
                            <Link to={`/actividades/${actividad.id}`} style={{ ...linkStyle, color: "white" }}>
                                <span style={textStyle}>{actividad.nombre}</span>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>No hay actividades disponibles.</p>
                )}
            </div>

            {/* Enlaces para seleccionar el grupo */}
            <div className="container-menu">
                <div className="cont-menu">
                    <nav>
                        <Link to="/Listaexperimentos/grupo/3" style={{ color: "white" }}>3</Link>
                        <Link to="/Listaexperimentos/grupo/4" style={{ color: "white" }}>4</Link>
                        <Link to="/Listaexperimentos/grupo/5" style={{ color: "white" }}>5</Link>
                    </nav>
                    <label htmlFor="" className="icon-equis"></label>
                </div>
            </div>
        </div>
    );
};

export default Listaexperimentos;

const linkStyle = {
    textDecoration: "none",
};

const rectangleStyle = {
    marginBottom: "40px", // Aumentado el espacio entre rectángulos
    width: "30%", // Ancho de los rectángulos (ajustar según sea necesario)
    padding: "30px", // Espaciado interno del rectángulo
    borderRadius: "50px", // Bordes redondeados del rectángulo
    backgroundColor: "rgb(120,168,128)", // Color de fondo del rectángulo
    textAlign: "center", // Alinear el texto al centro
    display: "inline-block", // Hacer que los rectángulos se muestren en línea
};

const textStyle = {
    fontSize: "24px", // Aumentado el tamaño de la letra
    color: "white", // Color del texto
};
