import React from "react"
import Itemcard from './Itemcard'

function ItemList({ itens }) {

    return (

        <div>

            {itens.map((e) => <Itemcard item={e}/>)}
        </div>



    );

}

export default ItemList