import React, { use, useState } from "react";
import Boton from "../components/Boton.jsx";
import { GustoMusical } from "../datos/Gustos";
import { GustosDeportivos } from "../datos/Gustos";
import { GustosComida } from "../datos/Gustos";
import UlGustos from "../components/ulGustos.jsx";

const AboutMe = () => {

    //Creamos una constante que usaremos para activar la funcion de mostrar las imagenes, la establecemos como falso para que no se muestre al inicio
    const [mostrar, setMostrar] = useState(false);

    //Esta funcion cambia de true a false y viceversa
    const changeMostrar = () => {
        setMostrar(!mostrar); //siempre pondra el opuesto del que ya tiene
    }

    return(
        <>
            <main className="perfil">
                <div className="me">
                    <img src="https://res.cloudinary.com/dvtk6ky3t/image/upload/v1774406263/ilustra%C3%A7%C3%A3o_do_gen%C3%A9rico_masculino_avatar_dentro_cinzento_tons_para_an%C3%B4nimo_perfil_espa%C3%A7o_reservado_com_neutro_express%C3%A3o_projetado_para_usar_dentro_conectados_plataformas_e_social_meios_de_comunica%C3%A7%C3%A3o_xpbuq3.jpg" alt="Imagen de perfil" />
                    <div>
                        <h2>Edgar Ariel Pineda Ramirez</h2>
                    </div>
                    <div>
                        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h3>
                    </div>
                </div>
                <div className="gustos">
                    <h1>Gustos de Edgar</h1>
                    <div className="Listado">
                        <UlGustos titulo="Comida" lista={GustosComida}/>
                        <UlGustos titulo="Deportes" lista={GustosDeportivos}/>
                        <UlGustos titulo="Musica" lista={GustoMusical}/>
                    </div>
                    <Boton label="Mostrar JJK" onClick={changeMostrar}/>
                </div>
            </main>

            {mostrar && <BatallaDelSiglo/>}
        </>
    )
}

//Creamos la funcion o donde estara guardado el div
function BatallaDelSiglo() {
    return(
        <div className="jjk">
                <div className="Hechiceros">
                    <img src="https://res.cloudinary.com/dvtk6ky3t/image/upload/v1774365384/Gojo_Satoru___Jujutsu_Kaisen_apct2h.jpg" alt="El hechicero mas fuerte de la actualidad" />
                </div>
                <div className="Hechiceros">
                    <img src="https://res.cloudinary.com/dvtk6ky3t/image/upload/v1774365384/Ryomen_Sukuna_ymrcuh.jpg" alt="el hechicero mas fuerte de la historia" />
                </div>
            </div>
    )
}

export default AboutMe;