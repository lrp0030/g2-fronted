import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cursosniveles from './components/Primaria';
import Listaexperimentos from './components/Listaexperimentos'; // Importa el componente Listaexperimentos
import Login from './components/Login';
import Paginaprincipal from './components/Paginaprincipal';
import Infantil from './components/Infantil';
import Secundaria from './components/Secundaria';
import Registro from './components/Registrarse';
import Contrasena from './components/OlvidoContra';  
import DetalleExperimento from "./components/DetalleExperimento";
import Pago from './components/pago';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Paginaprincipal' element={<Paginaprincipal />} />
        <Route path='/Primaria' element={<Cursosniveles />} />
        <Route path='/Listaexperimentos/grupo/:grupo' element={<Listaexperimentos />} /> 
        <Route path='/infantil' element={<Infantil />} />
        <Route path='/secundaria' element={<Secundaria />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='/contrasena' element={<Contrasena />} />
        <Route path='/Pago' element={<Pago />} />
        <Route path='/actividades/:id' element={<DetalleExperimento />} />
      </Routes>
  );
}
 
export default App;
