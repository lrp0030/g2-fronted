import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Listaexperimentos from './components/Listaexperimentos'; // Importa el componente Listaexperimentos
import Login from './components/Login';
import Paginaprincipal from './components/Paginaprincipal';
import Secundaria from './components/Secundaria';
import Registro from './components/Registrarse';
import Contrasena from './components/OlvidoContra';  
import DetalleExperimento from "./components/DetalleExperimento";
import PlanesSuscripcion from './components/PlanesSuscripcion';
import Pago from './components/pago';
import Infantil from './components/Infantil';
import Primaria from './components/Primaria';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Paginaprincipal' element={<Paginaprincipal />} />
        <Route path='/Primaria' element={<Primaria />} />
        <Route path='/Listaexperimentos/grupo/:grupo' element={<Listaexperimentos />} /> 
        <Route path='/Infantil' element={<Infantil />} />
        <Route path='/secundaria' element={<Secundaria />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='/contrasena' element={<Contrasena />} />  // Ruta única para el componente de olvido de contraseña
        <Route path='/actividades/:id' element={<DetalleExperimento />} />
        <Route path="/suscripcion" element={<PlanesSuscripcion />} />
        <Route path="/pago" element={<Pago/>} />
      </Routes>
  );
}
 
export default App;
