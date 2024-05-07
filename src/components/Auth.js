import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';  // Importar useNavigate
import app from '../firebase-config';

const auth = getAuth(app);

function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');  // Estado para manejar errores
  const navigate = useNavigate();  // Hook para la redirección

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Logged in!');
      navigate('/dashboard');  // Redirige a la ruta del dashboard después del login
    } catch (error) {
      console.error('Authentication error:', error);
      setError(error.message);  // Actualiza el estado de error con el mensaje de error
    }
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={signIn}>Sign In</button>
      {error && <p>Error: {error}</p>}  // Muestra errores si existen
    </div>
  );
}

export default Auth;
