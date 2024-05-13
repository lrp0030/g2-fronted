import React, { useState } from 'react';

function Experimento({ experimento }) {
  const [pasoActual, setPasoActual] = useState(0);

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
        <button onClick={pasoAnterior} disabled={pasoActual === 0}>
          <img src="/path/to/your/left-arrow.svg" alt="Anterior" />
        </button>
        <p>Paso {pasoActual + 1}: {experimento.pasos[pasoActual]}</p>
        <button onClick={siguientePaso} disabled={pasoActual === experimento.pasos.length - 1}>
          <img src="/path/to/your/right-arrow.svg" alt="Siguiente" />
        </button>
      </div>
    </div>
  );
}
