import React, { useState } from "react";

const UlGustos = ({titulo, lista}) => {
    const [gustos, setGustos] = useState(lista);
    return(
        <div className="Card card2">
            <h2>{titulo}</h2>
            <ul>
                {gustos.map((gusto, index) => (
                    <li key={index}>{gusto.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default UlGustos;