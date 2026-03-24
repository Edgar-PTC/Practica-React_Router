import React, { useState } from "react";
import Boton from "./Boton.jsx"

const Card = ({imagen, titulo, descrip, lista}) => {
    const [canciones, setCanciones] = useState(lista);

    return(
        <div className="Card">
            <img src={imagen} alt={titulo} />
            <div>
                <h2>{titulo}</h2>
                <h3>{descrip}</h3>
                <ul>
                    {canciones.map((cancion) => (
                        <li className="cancion" key={cancion.id}>
                            <span>{cancion.name}</span>
                            <Boton link={cancion.enlace} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Card;