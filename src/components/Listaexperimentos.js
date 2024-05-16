import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import db from "./firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const Listaexperimentos = () => {
    const { grupo } = useParams();
    const [actividades, setActividades] = useState([]);

    useEffect(() => {
        const fetchActividades = async () => {
            try {
                if (grupo) {
                    const actividadesRef = collection(db, "actividades", "infantil", "actividades");
                    const q = query(actividadesRef, where("grupo", "==", grupo));
                    const querySnapshot = await getDocs(q);
                    const actividadesData = querySnapshot.docs.map(doc => ({
                        id: doc.id,
                        nombre: doc.data().titulo
                    }));
                    setActividades(actividadesData);
                }
            } catch (error) {
                console.log("Error al obtener las actividades:", error);
            }
        };
    
        fetchActividades();
    }, [grupo]);

    return (
        <div>
            <div className="barra">
                <div className="btn-menu">
                    <label htmlFor="btn-menu" className="icon-menu"></label>
                </div>
                 <div>
                {actividades.length > 0 ? (
                    actividades.map((actividad, index) => (
                        <div key={actividad.id}>
                            <Link to={`/experimento/${actividad.id}`}>
                                <span>Ir al experimento</span>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>No hay actividades disponibles.</p>
                )}
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
        </div>
    );
};

export default Listaexperimentos;

const linkStyle = {
    textDecoration: "none",
};

const rectangleStyle = {
    marginBottom: "40px",
    width: "30%",
    padding: "30px",
    borderRadius: "50px",
    backgroundColor: "rgb(120,168,128)",
    textAlign: "center",
    display: "inline-block",
};

const textStyle = {
    fontSize: "24px",
    color: "white",
};
