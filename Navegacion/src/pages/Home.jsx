import React from "react";
import Card from "../components/Cards.jsx";
import { cuartetoCanciones, brunoCanciones, moratCanciones } from "../Canciones";

const Home = () => {
    return(
        <main>
            <Card titulo="Cuarteto de Nos" imagen="https://res.cloudinary.com/dvtk6ky3t/image/upload/v1774326159/unnamed_q2lruh.jpg" descrip="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," lista={cuartetoCanciones}/>
            <Card titulo="Bruno Mars" imagen="https://res.cloudinary.com/dvtk6ky3t/image/upload/v1774326158/images_yyl9gu.jpg" descrip="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," lista={brunoCanciones}/>
            <Card titulo="Morat" imagen="https://res.cloudinary.com/dvtk6ky3t/image/upload/v1774326149/hq720_yzwq1o.jpg" descrip="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," lista={moratCanciones}/>
        </main>
    )
}

export default Home;