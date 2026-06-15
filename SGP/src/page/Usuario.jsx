import { useEffect, useState } from "react"
import axios from "axios";


function Usuario() {

    const [usuario, setUsuario] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:8080/api/usuarios")
        .then((resp) => setUsuario(resp.data))

    }, []);

    return <div>
        <p>Tela de usuario</p>
    </div>
}

export default Usuario