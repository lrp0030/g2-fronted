import Cursosniveles from './components/Cursosniveles';
import Listaexperimentos from './components/Listaexperimentos';
import Login from './components/Login';
import Paginaprincipal from './components/Paginaprincipal';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Datos from "./components/Datos";

function App() {
  return (

    <Datos></Datos>
    //<Routes>
    //  <Route path='/' element={<Login />} />
    //  <Route path='/Paginaprincipal' element={<Paginaprincipal />} />
    //  <Route path='/Cursosniveles' element={<Cursosniveles />} />
    //  <Route path='/experimentos' element={<Listaexperimentos />} />
    //</Routes>
    
  );
}

export default App;
