import { useEffect, useState } from "react";
import { Container, Card, Button, Table, Badge } from "react-bootstrap"; 
import CadastroUsuario from "./CadastroUsuario";

function Usuarios() {
    const [show, setShow] = useState(false);
    const [usuarios, setUsuarios] = useState([]);

    const exibir = () => setShow(true);
    const ocultar = () => setShow(false);

    useEffect(() => {
        mostrarUsuarios();
    }, []);

    const mostrarUsuarios = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/usuarios");
            const dados = await response.json();
            setUsuarios(dados);
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
        }
    };

    // Funções para os botões de Ação
    const lidarComEditar = (id) => {
        console.log("Editar usuário com ID:", id);
        // Aqui no futuro você pode abrir o modal de edição
    };

    const excluir = async (id) => {
        if (window.confirm(`Tem a certeza que deseja excluir o usuário com o ID ${id}?`)) {
            try {
                const response = await fetch(`http://localhost:8080/api/usuarios/${id}`, {
                    method: 'DELETE'
                });
                
                if (response.ok) {
                    setUsuarios(usuarios.filter(usuario => usuario.id !== id));
                    alert("Usuário excluído com sucesso!");
                } else {
                    alert("Erro ao excluir o usuário.");
                }
            } catch (error) {
                console.error("Erro ao conectar com a API:", error);
            }
        }
    };

    // Estiliza o Status do Usuário com cores adequadas
    const renderStatusBadge = (status) => {
        switch (status) {
            case 'ATIVO':
                return <Badge bg="success">Ativo</Badge>;
            case 'INATIVO':
                return <Badge bg="danger">Inativo</Badge>;
            default:
                return <Badge bg="secondary">{status || "—"}</Badge>;
        }
    };

    return (
        <Container className="mt-4">
            <Card className="shadow-sm">
                <Card.Header className="bg-dark text-white d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 py-3">
                    <h2 className="mb-0 fs-4">👥 Painel de Usuários</h2>
                    <Button variant="primary" className="fw-bold" onClick={exibir}>
                        + Cadastrar Usuário
                    </Button>
                </Card.Header>

                <Card.Body className="p-0">
                    {usuarios.length === 0 ? (
                        <div className="text-center my-5 text-muted">
                            <p className="fs-5 mb-0">Nenhum usuário encontrado.</p>
                        </div>
                    ) : (
                        <Table responsive hover striped className="mb-0 align-middle">
                            <thead className="table-light">
                                <tr>
                                    <th className="ps-4">ID</th>
                                    <th>Nome</th>
                                    <th>E-mail</th>
                                    <th className="text-center">Status</th>
                                    <th className="pe-4 text-center">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usuarios.map((usuario) => (
                                    <tr key={usuario.id}>
                                        <td className="ps-4 fw-bold text-secondary">{usuario.id}</td>
                                        <td className="fw-bold text-secondary">{usuario.nome}</td>
                                        <td className="text-muted">{usuario.email}</td>
                                        
                                        {/* Status formatado com Badge */}
                                        <td className="text-center">
                                            {renderStatusBadge(usuario.status)}
                                        </td>
                                        
                                        {/* Botões de Ação Sólidos */}
                                        <td className="pe-4 text-center">
                                            <div className="d-flex justify-content-center gap-2">
                                                <Button 
                                                    variant="warning" 
                                                    size="sm"
                                                    className="fw-bold text-dark"
                                                    onClick={() => lidarComEditar(usuario.id)}
                                                >
                                                    ✏️ Editar
                                                </Button>
                                                <Button 
                                                    variant="danger" 
                                                    size="sm"
                                                    className="fw-bold text-white"
                                                    onClick={() => excluir(usuario.id)}
                                                >
                                                    🗑️ Excluir
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )}
                </Card.Body>

                <Card.Footer className="bg-white py-3">
                    <small className="text-muted fw-semibold">
                        Total de usuários cadastrados: {usuarios.length}
                    </small>
                </Card.Footer>
            </Card>

            <CadastroUsuario show={show} ocultar={ocultar} />
        </Container>
    );
}

export default Usuarios;