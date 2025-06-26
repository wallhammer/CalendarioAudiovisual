
import './App.css';
import Hoy from './component/Hoy';
import Calendario from './component/Calendario';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './component/pages/Layout';
import Home from './component/pages/Home';
import ModalBasico from './component/ModalBasico';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <div className="App container">
      <Calendario/>
    </div>
  );
}

export default App;
