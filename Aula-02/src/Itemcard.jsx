import React from "react";


function Itemcard({item}){

    return(
        <article>
            <h3>{item.nome}</h3>
            <h4>{item.preco}</h4>
        </article>

    );

}

export default Itemcard