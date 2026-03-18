
import './App.css';
import Calendario from './component/Calendario';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModalBasico from './component/ModalBasico';
import Tabla from './component/Tabla';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const dia = `${new Date().getDate()}${new Date().getMonth()+1}${new Date().getFullYear()}`
  // const hoy = Array.from({length: Date().length},(_,i) =>)

  return (
    
    <div className="App container">
      <Calendario/>
    </div>
  );
}

export default App;
