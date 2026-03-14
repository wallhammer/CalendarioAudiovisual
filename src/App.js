
import './App.css';
import Calendario from './component/Calendario';
<<<<<<< HEAD
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModalBasico from './component/ModalBasico';
>>>>>>> 2fdb359f271a95b3211f40771c45911e275569d6
import Tabla from './component/Tabla';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const dia = `${new Date().getDate()}${new Date().getMonth()+1}${new Date().getFullYear()}`
  const hoy = Array.from({length: Date().length},(_,i) =>)

  return (
    
    <div className="App container">
      <p>{hoy}</p>
    </div>
  );
}

export default App;
