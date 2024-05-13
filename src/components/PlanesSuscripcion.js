import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/PlanesSuscripcion.css'; // Importa el CSS para estilos

function PlanesSuscripcion() {
  const navigate = useNavigate();

  const planes = [
    { tipo: "Mensual", precioTotal: 15, descripcion: "15€/mes", icono: "🗓️" },
    { tipo: "Trimestral", precioTotal: 40, descripcion: "Aprox. 13.33€/mes", icono: "📆" },
    { tipo: "Anual", precioTotal: 120, descripcion: "10€/mes", icono: "📅" }
  ];

  const seleccionarPlan = (plan) => {
    console.log(`Plan seleccionado: ${plan.tipo}`);
    navigate('/pago'); 
  };

  return (
    <div className="suscripcion-container">
      <div className="banner">
        <h1>Elige tu plan de suscripción</h1>
      </div>
      <div className="planes-container">
        {planes.map((plan) => (
          <div key={plan.tipo} className="plan">
            <div className="icono">{plan.icono}</div>
            <h2>{plan.tipo}</h2>
            <p>{plan.descripcion}</p>
            <p>Precio total: {plan.precioTotal}€</p>
            <button onClick={() => seleccionarPlan(plan)}>Elegir Plan</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlanesSuscripcion;
