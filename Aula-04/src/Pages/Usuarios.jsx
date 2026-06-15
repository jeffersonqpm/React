import { useEffect, useState } from "react";
import axios from "axios";
import "./Usuarios.css"; // Vamos criar este arquivo de estilos abaixo

function Usuarios() {
    const [usuario, setUsuario] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/usuarios")
            .then((resp) => setUsuario(resp.data))
            .catch((err) => console.error("Erro ao buscar dados:", err));
    }, []);

    return (
        <div className="container-usuarios">
            <h2>Tela de Usuários</h2>
            
            <table className="tabela-usuarios">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>CPF</th>
                        <th>Dt.Nascimento</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {usuario.length === 0 ? (
                        <tr>
                            <td colSpan="5" style={{ textAlign: "center" }}>
                                Nenhum usuário encontrado ou carregando...
                            </td>
                        </tr>
                    ) : (
                        usuario.map((u) => (
                            <tr key={u.id}>
                                <td>{u.id}</td>
                                <td>{u.nome}</td>
                                <td>{u.email}</td>
                                <td>{u.cpf}</td>
                                <td>{u.dataNascimento}</td>
                                <td>
                                    {/* Adiciona uma tag colorida baseada no status do Java */}
                                    <span className={`status-badge ${u.status?.toLowerCase()}`}>
                                        {u.status}
                                    </span>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Usuarios;