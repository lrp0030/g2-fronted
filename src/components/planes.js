import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import db from "./firebaseConfig"; // Importa la instancia de Firestore desde donde la hayas exportado
import { collection, getDocs } from "firebase/firestore";

const Planes = () => {
    const [actividades, setActividades] = useState([]);

    const modal = document.getElementById('planModal');
    const closeModal = document.getElementById('closeModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalPrice = document.getElementById('modalPrice');
    const navigate = useNavigate(); // Para redirigir al usuario
    const contenedorPlanes = document.getElementById('contenedor-planes');

    useEffect(() => {
        const fetchActividades = async () => {
            try {
                const actividadesRef = collection(db, "actividades");
                const querySnapshot = await getDocs(actividadesRef);
        
                const actividadesData = [];
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    actividadesData.push({
                        id: doc.id,
                        nombre: data.titulo
                    });
                });
        
                setActividades(actividadesData);
            } catch (error) {
                console.log("Error al obtener las actividades:", error);
            }
        };

        fetchActividades();
    }, []);

    return (
        <div id="planModal" class="modal">
        <div class="modal-content">
          <span class="close" id="closeModal">&times;</span>
          <h2 id="modalTitle"></h2>
          <p id="modalDescription"></p>
          <p id="modalPrice"></p>
          <button type="submit" id="subcribirse">subcripción</button>
        
        </div>
      </div>
    
    );
};

export default Planes;

const linkStyle = {
    textDecoration: "none",
};

