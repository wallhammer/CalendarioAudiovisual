
import './App.css';
import Calendario from './component/Calendario';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModalBasico from './component/ModalBasico';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const hoy = new Date()
  const adivina = (n) => {
    var fecha
    if (n < hoy.getDay()) {
      
    }
  }
  return (
    
    <div className="App container">
      <Calendario/>
    </div>
  );
}

export default App;
