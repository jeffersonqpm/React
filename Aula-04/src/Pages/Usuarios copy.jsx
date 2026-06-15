import { useEffect, useState } from "react";
import { data } from "react-router-dom";
import axios from "axios";


function Usuarios() {

    const [usuario, setUsuario] = useState([]);

    useEffect(() => {

        // axios.get("https://jsonplaceholder.typicode.com/users")
        // axios.get("http://localhost:8080/api/usuarios")
        //     .then((resp) => setUsuario(resp.data));
        axios.get("http://localhost:8080/api/usuarios")
            .then((resp) =>  setUsuario(resp.data));

    },[]);




return <div>

    <h2>Tela de Usuarios</h2>

    <ul>
        {/* {usuario.map((usuario) => (<li key={usuario.id}> {usuario.nome} - {usuario.cpf}</li>))} */}
        {usuario.map((usuario) => (<li key={usuario.id}> {usuario.nome} - {usuario.email}</li>))}
    </ul>

</div>
    // ==============exemplo 02=====================

    // useEffect(() => {

    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((resp)=> resp.json())
    //     .then((data) =>  {setUsuario(data);

    //     })

    // }, []);

    // return <div>

    //     <h2>Tela de Usuarios</h2>

    //     <ul>
    //         {usuario.map((usuario)=> (<li  key={usuario.id}> {usuario.name} - {usuario.email}</li>))}
    //     </ul>

    // </div>


    // ===============exemplo 01============================

    // const [numero, setNumero] = useState(0);

    // const increment = () => {
    //     // alert('OK');
    //     setNumero(numero + 1);
    //     // alert(numero);
    // }
    // // console.log(Olá);

    // useEffect(() => {
    //     console.log("Olá");
    // },[]);
    // // },[numero]);
    // return <div>

    //     <h2>Tela de Usuarios</h2>

    //     <button onClick={increment}>Clique aqui!</button>

    // </div>
}

export default Usuarios