// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Listaexperimentosdatos from './components/Listaexperimentosdatos';
import Experimentos from './components/Experimentos';
import Login from './components/Login';
import Paginaprincipal from './components/Paginaprincipal';
import Cursosniveles from './components/Cursosniveles';
import Infantil from './components/infantil';
import Secundaria from './components/Secundaria';
import Registro from './components/Registrarse';
import Contrasena from './components/OlvidoContra';



function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Paginaprincipal" element={<Paginaprincipal />} />
        <Route path="/Cursosniveles" element={<Cursosniveles />} />
        <Route path="/experimentos" element={<Listaexperimentosdatos />} />
        <Route path="/infantil" element={<Infantil />} />
        <Route path="/secundaria" element={<Secundaria />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/contrasena" element={<Contrasena />} />
        <Route path="/actividades/:id" element={<Experimentos />} />
      </Routes>
  );
}

export default App;
