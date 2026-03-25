import { useState } from 'react'
import InputText from '../components/InputText';
import Boton from '../components/Boton';

const ToDoList = () => {
  const [tarea, setTarea] = useState("");
  const [listaTarea, setListaTarea] = useState([])

  const AgregarTarea=()=>{
    if(tarea.trim() !== ""){
      setListaTarea([...listaTarea, tarea]);
      setTarea("")
    }
  }

  const EliminarTarea=(index)=>{
    let nuevaLista = listaTarea.filter((tarea, indice)=> indice !== index)
    setListaTarea(nuevaLista);
  }

  return (
    <>
      <main className='todolist'>
        <h1>ToDo list:</h1>
        <div className='AgregarList'>
          <InputText label="Agregar Tarea" value={tarea} type="text" onChange={(e) => setTarea(e.target.value)}/>
          <Boton label="Agregar" onClick={AgregarTarea}/>
        </div>

        <div>
          <ul className='listaDeToDo'>
            {listaTarea.map((tarea, index) => (
              <li key={index}>{tarea} <Boton label="Eliminar" onClick={()=>EliminarTarea(index)}/></li>
            ))}
          </ul>
        </div>
      </main>
    </>
  )
}

export default ToDoList
