//Importamos la libreria de las rutas y convertimos 
import {BrowserRouter as Router, Routes, Route} from "react-router"

//Cada pagina la importamos y la nombramos
import Home from "./pages/Home"

//La funcion principal indispensable
function App() {
  //Retornamos la navegacion
  return(
    <>
      //Entiendo que este es para decirle a la maquina que esto servira para navegar entre pantallas
      <Router>
        //Usamos el elemento que creamos, Nav, para no crearlo cada vez
        <Nav/>
        //Y aqui decimos que estas son las rutas
        <Routes>
          //Y cada una de estas es la ruta de cada pagina
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </>
  )

}

export default App