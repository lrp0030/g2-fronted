import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cursosniveles from './components/Cursosniveles';
import Listaexperimentos from './components/Listaexperimentos';
import Login from './components/Login';
import Paginaprincipal from './components/Paginaprincipal';
import Infantil from './components/infantil';
import Secundaria from './components/Secundaria';
import Registro from './components/Registrarse';
import Contrasena from './components/OlvidoContra';
import Listaexperimentosdatos from "./components/Listaexperimentosdatos";
import DetalleExperimento from "./components/DetalleExperimento";

function App() {
  return (
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Paginaprincipal' element={<Paginaprincipal />} />
        <Route path='/Cursosniveles' element={<Cursosniveles />} />
        <Route path='/experimentos' element={<Listaexperimentosdatos />} />
        <Route path='/infantil' element={<Infantil />} />
        <Route path='/secundaria' element={<Secundaria />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='/contrasena' element={<Contrasena />} />
        <Route path='/actividades/:id' element={<DetalleExperimento />} />
      </Routes>
  );
}

export default App;
