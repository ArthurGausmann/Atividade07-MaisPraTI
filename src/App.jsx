import Contador from "./pages/Contador"
import CorFundo from "./pages/CorFundo"
import ListaTarefas from "./pages/ListaTarefas"
import Temporizador from "./pages/Temporizador"
import FiltroNomes from "./pages/FiltroNomes"
import Formulario from "./pages/Formulario"
import ApiDados from "./pages/ApiDados"
import GaleriaImagens from "./pages/GaleriaImagens"
import Timer from "./pages/Timer"
import Tabs from "./pages/Tabs"
import Home from "./pages/Home"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contador" element={<Contador/>}/>
        <Route path="/corfundo" element={<CorFundo/>}/>
        <Route path="/listatarefas" element={<ListaTarefas/>}/>
        <Route path="/temporizador" element={<Temporizador/>}/>
        <Route path="/filtronomes" element={<FiltroNomes/>}/>
        <Route path="/formulario" element={<Formulario/>}/>
        <Route path="/apidados" element={<ApiDados/>}/>
        <Route path="/galeriaimagens" element={<GaleriaImagens/>}/>
        <Route path="/timer" element={<Timer/>}/>
        <Route path="/tabs" element={<Tabs/>}/>
      </Routes>
    </Router> 
    </>
  )
}

export default App
