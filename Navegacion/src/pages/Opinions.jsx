import React from "react";
import { useState } from "react";
import InputText from "../components/InputText.jsx";
import StarsRating from "../components/Stars.jsx";
import Boton from "../components/Boton.jsx"
import ComentariosCard from "../components/ComentariosCard.jsx"

const Opinions = () => {
    const [nombre, setNombre] = useState("");
    const [texto, setTexto] = useState("");
    const [stars, setStars] = useState(0);
    const [Comentarios, setComentarios] = useState([
    {nombre: "Juan Fernando", img: "https://res.cloudinary.com/dvtk6ky3t/image/upload/v1774406263/ilustra%C3%A7%C3%A3o_do_gen%C3%A9rico_masculino_avatar_dentro_cinzento_tons_para_an%C3%B4nimo_perfil_espa%C3%A7o_reservado_com_neutro_express%C3%A3o_projetado_para_usar_dentro_conectados_plataformas_e_social_meios_de_comunica%C3%A7%C3%A3o_xpbuq3.jpg", comentario: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", stars: 0}
    ]);

    const AgregarComentario = () => {
        try {
            const json = {
                nombre: nombre,
                img: "https://res.cloudinary.com/dvtk6ky3t/image/upload/v1774406263/ilustra%C3%A7%C3%A3o_do_gen%C3%A9rico_masculino_avatar_dentro_cinzento_tons_para_an%C3%B4nimo_perfil_espa%C3%A7o_reservado_com_neutro_express%C3%A3o_projetado_para_usar_dentro_conectados_plataformas_e_social_meios_de_comunica%C3%A7%C3%A3o_xpbuq3.jpg",
                comentario: texto,
                stars: stars
            }

            setComentarios([json, ...Comentarios]);
        } catch (error) {
            console.error("Error: ", error)
        }finally{
            setNombre("");
            setTexto("");
            setStars(0);
        }
    }

    return(
        <>
            <div className="perfil2">
                <div className="person">
                    <img src="https://res.cloudinary.com/dvtk6ky3t/image/upload/v1774406263/ilustra%C3%A7%C3%A3o_do_gen%C3%A9rico_masculino_avatar_dentro_cinzento_tons_para_an%C3%B4nimo_perfil_espa%C3%A7o_reservado_com_neutro_express%C3%A3o_projetado_para_usar_dentro_conectados_plataformas_e_social_meios_de_comunica%C3%A7%C3%A3o_xpbuq3.jpg" alt="" />
                    <h2>Edgar Ariel Pineda Ramirez</h2>
                </div>
                <div className="comentarios">
                    <div>
                        <h2>Agrega un comentario sobre mi</h2>
                    </div>
                    <div className="InputAgregar">
                        <InputText placeholder="Escriba su nombre" label="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                        <div className='Inputs'>
                            <label>Comentario</label>
                            <textarea placeholder="Escriba el comentario que desea enviar" value={texto} onChange={(e) => setTexto(e.target.value)}></textarea>
                        </div>
                        <div className="clasificacion">
                            <InputText min={0} max={5} type="number" value={stars} onChange={(e) => setStars(e.target.value)}/>
                            <StarsRating quantity={stars}/>
                        </div>
                        <Boton label="Agregar" onClick={(e) => AgregarComentario()}/>
                    </div>
                    <div className="DivComent">
                        {Comentarios.map((comentario, index) => (
                            <ComentariosCard key={index} nombre={comentario.nombre} img={comentario.img} texto={comentario.comentario} ratin={comentario.stars}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Opinions;