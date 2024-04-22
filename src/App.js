import Cursosniveles from './components/Cursosniveles';
import Listaexperimentos from './components/Listaexperimentos';
import Login from './components/Login';
import Paginaprincipal from './components/Paginaprincipal';

export default App;

function App() {
  return (
    <div>
      <Cursosniveles/>
      <Paginaprincipal/>
      <Listaexperimentos/>
      <Login/>
  
    </div>
  )
}