
import './App.css';
import Calendario from './component/Calendario';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModalBasico from './component/ModalBasico';
import Tabla from './component/Tabla';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    
    <div className="App container">
      <Tabla/>
    </div>
  );
}

export default App;
