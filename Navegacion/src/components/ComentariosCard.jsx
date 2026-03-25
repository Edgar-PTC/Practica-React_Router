import React from "react";
import StarsRating from "./Stars";

const CardComent = ({img, nombre, texto, ratin}) => {
    return(
        <div className="CardComment">
            <img src={img} alt="Foto de perfil" />
            <div className="CommentInfo">
                <div className="info1">
                    <h2>{nombre}</h2>
                    <StarsRating quantity={ratin}/>
                </div>
                
                <p>{texto}</p>
            </div>
        </div>
    );
}

export default CardComent;