import Cursosniveles from './components/Cursosniveles';
import Listaexperimentos from './components/Listaexperimentos';
import Login from './components/Login';
import Paginaprincipal from './components/Paginaprincipal';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Datos from "./components/Datos";
import Experimento from "./components/Experimento";

function App() {
  return (
      <Experimento></Experimento>
      //<Datos></Datos>
      //<Routes>
      //  <Route path='/' element={<Login />} />
      //  <Route path='/Paginaprincipal' element={<Paginaprincipal />} />
      //  <Route path='/Cursosniveles' element={<Cursosniveles />} />
      //  <Route path='/experimentos' element={<Listaexperimentos />} />
      //</Routes>
    
  );
}

export default App;
