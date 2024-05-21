import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './components/firebaseConfig'; // Asegúrate de que la ruta sea correcta
import Listaexperimentos from './components/Listaexperimentos';
import Login from './components/Login';
import Paginaprincipal from './components/Paginaprincipal';
import Secundaria from './components/Secundaria';
import Registro from './components/Registrarse';
import Contrasena from './components/OlvidoContra';
import DetalleExperimento from './components/DetalleExperimento';
import PlanesSuscripcion from './components/PlanesSuscripcion';
import Pago from './components/pago';
import Infantil from './components/infantil';
import Primaria from './components/Primaria';
import Experimento from './components/Experimentos';
import Politica from './components/politicas';
import Terminos from './components/terminos';
import Contactenos from './components/Contactenos';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Routes>
      <Route path="/" element={user ? <Navigate to="/Paginaprincipal" /> : <Login />} />
      <Route path="/Paginaprincipal" element={<Paginaprincipal userId={user ? user.uid : null} />} />
      <Route path="/Login" element={<Login />} />
      <Route path= "/Contactenos" element={<Contactenos />} />
      <Route path='/Primaria' element={<Primaria />} />
      <Route path='/Listaexperimentos/infantil/:grupo' element={<Listaexperimentos />} />
      <Route path='/Listaexperimentos/primaria/:grupo' element={<Listaexperimentos />} />
      <Route path='/Listaexperimentos/secundaria/:grupo' element={<Listaexperimentos />} />
      <Route path='/Primaria' element={<Primaria />} />
      <Route path='/experimento/:id' element={<Experimento />} />
      <Route path='/Infantil' element={<Infantil />} />
      <Route path='/secundaria' element={<Secundaria />} />
      <Route path='/registro' element={<Registro />} />
      <Route path='/contrasena' element={<Contrasena />} />
      <Route path='/actividades/:id' element={<DetalleExperimento />} />
      <Route path="/suscripcion" element={<PlanesSuscripcion />} />
      <Route path="/pago" element={<Pago />} />
      <Route path="/Politica" element={<Politica />} />
      <Route path="/Terminos" element={<Terminos />} />
    </Routes>
  );
}

export default App;
