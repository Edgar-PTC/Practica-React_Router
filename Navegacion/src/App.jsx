//Importamos la libreria de las rutas y convertimos 
import {BrowserRouter as Router, Routes, Route} from "react-router"

//Cada pagina la importamos y la nombramos
import Nav from "./components/Nav"
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"

//La funcion principal indispensable
function App() {
  //Retornamos la navegacion
  return(
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/aboutme" element={<AboutMe/>}/>
        </Routes>
      </Router>
    </>
  )

}

export default App