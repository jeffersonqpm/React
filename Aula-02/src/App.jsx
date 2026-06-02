import React from "react";
import './jeff.css'
import Header from './Header'
import ItemList from "./ItemList";
import Itemcard from './Itemcard';
import { useState } from "react";


function App() {

  // Exemplo 02

  const [valorAtual, ValorAlterado] = useState(1);

  const increment = () => {
    ValorAlterado(valorAtual + 1)
  }

    const decrement = () => {
    ValorAlterado(valorAtual - 1)
  }


  return <div>

    {valorAtual}
    <button onClick={increment}>Aumentar</button>
    <button onClick={decrement}>Diminuir</button>
  </div>

  // ================================= fim do exemplo 02

  // primeiro exemplo

  // const itens = [
  //   {id:1, nome: "Uva", preco: 2.00},
  //   {id:2, nome: "Maça", preco: 3.00},
  //   {id:3, nome: "Banana", preco: 5.00},
  // ]

  // return (

  //   <div>
  //    <Header  titulo = "meu componente" subtitulo="aula-02"/>
  //    <ItemList itens ={itens}/>

  //   </div>
  // );

  // *************************


}

export default App