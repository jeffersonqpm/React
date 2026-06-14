import { useEffect, useState } from "react"


function App() {


  const [cor, setCor] = useState("Vermelho");

  let corFinal = "Vermelho";

  useEffect(() => {
// setTimeout
    setInterval(() => {
      setCor((corAtual) => {
        if (corAtual === "Vermelho") {
          return "Amarelo";


        }

        if (corAtual === "Amarelo") {

          return "Verde";

        }

        return "Vermelho";
      });

    }, 1000);

  }, []);

  return <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "120px",
    margin: "50px auto",
  }}>

    <div style={{
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      backgroundColor: cor === "Vermelho" ? "red" : "white"
    }}><p></p></div>
    <div style={{
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      backgroundColor: cor === "Amarelo" ? "yellow" : "white"
    }}></div>
    <div style={{
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      backgroundColor: cor === "Verde" ? "green" : "white"
    }}></div>





  </div>

  // ==================exemplo 3=================

  // const [cor, setCor] = useState("Vermelho");



  // useEffect(() => {

  //   setInterval(() => {
  //     setCor((corAtual) => {
  //       if (corAtual === "Vermelho") {
  //         return "Amarelo";

  //       }

  //       if (corAtual === "Amarelo") {

  //         return "Verde";

  //       }

  //       return "Vermelho";
  //     });

  //   }, 2000);

  // }, []);

  // return <div>
  //   <div>{cor}</div>


  // </div>

  // =====exemplo 02 ==================

  // const [numero, setNumero] = useState(0);

  // const increment = () =>{
  //   setNumero(numero +1)
  // }

  // useEffect(() =>{

  //   // CRIANDO UM CONTADOR
  //   setInterval(()=>{
  //     setNumero(numero => numero + 1)
  //   },3000);

  // },[]);

  // return <div>
  //   <div>{numero}</div>
  //   <button onClick={increment}>Clique</button>

  // </div>

  // ===================exemplo 01 ===============

  // const [numero, setNumero] = useState(0);

  // const increment = () =>{
  //   setNumero(numero +1)
  // }

  // useEffect(() =>{

  //   console.log("OK");
  // },[]);

  // return <div>
  //   <div>{numero}</div>
  //   <button onClick={increment}>Clique</button>

  // </div>


}

export default App