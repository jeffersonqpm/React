import { useEffect, useState } from "react";


function Usuarios() {

    const [numero, setNumero] = useState(0);

    const increment = () => {
        // alert('OK');
        setNumero(numero + 1);
        // alert(numero);
    }
    // console.log(Olá);

    useEffect(() => {
        console.log("Olá");
    },[]);
    // },[numero]);
    return <div>

        <h2>Tela de Usuarios</h2>

        <button onClick={increment}>Clique aqui!</button>

    </div>
}

export default Usuarios