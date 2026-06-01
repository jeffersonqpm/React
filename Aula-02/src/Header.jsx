
import React from "react"

function Header({ titulo, subtitulo }) {

    return (

        // <div>
        //     <h1>Título</h1>
        //     <p>subtítulo</p>
        // </div>

        <div>
            <h1>{titulo}</h1>
            <p>{subtitulo}</p>
        </div>
    );

}

export default Header