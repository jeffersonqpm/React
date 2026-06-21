import { useEffect, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import CadastroUsuario from "./CadastroUsuario";

function Usuarios() {
    const [show, setShow] = useState(false);
    // Alterado o nome para 'usuarios' para fazer mais sentido
    const [usuarios, setUsuarios] = useState([]);

    const exibir = () => setShow(true);
    const ocultar = () => setShow(false);

    useEffect(() => {
        mostrarUsuarios();
    }, []);

    const mostrarUsuarios = async () => {
        try {
            // CORREÇÃO 1: Trocado a vírgula por ponto e vírgula no final
            const response = await fetch("http://localhost:8080/api/usuarios");
            const dados = await response.json();
            setUsuarios(dados);
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
        }
    };

    return (
        <Container className="mt-4">
            <Card>
                <Card.Header className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
                    <h2>Painel de Usuários</h2>
                    <Button variant="dark" onClick={exibir}>Cadastrar Usuário</Button>
                </Card.Header>

                <Card.Body>
                    <h2>Lista de Usuário</h2>

                    {/* CORREÇÃO 2: Percorrendo a lista de usuários corretamente */}
                    {usuarios.length === 0 ? (
                        <p>Nenhum usuário encontrado.</p>
                    ) : (
                        <ul>
                            {usuarios.map((usuario) => (
                                <li key={usuario.id}>
                                    {usuario.id}- <strong>{usuario.nome}</strong> - {usuario.email} ({usuario.status})
                                </li>
                            ))}
                        </ul>
                    )}
                </Card.Body>

                <Card.Footer>
                    {/* Espaço para paginação ou contagem se desejar */}
                    <small className="text-muted">Total de usuários: {usuarios.length}</small>
                </Card.Footer>
            </Card>

            <CadastroUsuario show={show} ocultar={ocultar} />
        </Container>
    );
}

export default Usuarios;