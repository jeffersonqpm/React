import { useEffect, useState } from "react";
import { Container, Card, Button, Table, Badge } from "react-bootstrap";
import CadastroUsuario from "./CadastroUsuario";

function Usuarios() {
    const [show, setShow] = useState(false);
    const [usuarios, setUsuarios] = useState([]);

    // ESTADO PARA EDIÇÃO: Guarda o objeto do usuário selecionado
    const [usuarioParaEditar, setUsuarioParaEditar] = useState(null);

    const exibir = () => setShow(true);

    // Limpa o estado de edição ao fechar para não afetar o próximo cadastro
    const ocultar = () => {
        setShow(false);
        setUsuarioParaEditar(null);
    };

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

    // Agora recebe o objeto completo do usuário da linha clicada
    const lidarComEditar = (usuario) => {
        setUsuarioParaEditar(usuario);
        exibir();
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

    const renderStatusBadge = (status) => {
        switch (status) {
            case 'ATIVO':
                return <Badge bg="success">Ativo</Badge>;
            case 'INATIVO':
                return <Badge bg="danger">Inativo</Badge>;
            case 'BLOQUEADO':
                return <Badge bg="dark">Bloqueado</Badge>;
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
                                    <th>Dt.Nascimento</th>
                                    <th className="text-center">CPF</th>
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
                                        <td className="text-muted">{usuario.dataNascimento}</td>
                                        <td className="text-muted">{usuario.cpf}</td>

                                        <td className="text-center">
                                            {renderStatusBadge(usuario.status)}
                                        </td>

                                        <td className="pe-4 text-center">
                                            <div className="d-flex justify-content-center gap-2">
                                                {/* Passa o objeto usuario completo para a edição */}
                                                <Button
                                                    variant="warning"
                                                    size="sm"
                                                    className="fw-bold text-dark"
                                                    onClick={() => lidarComEditar(usuario)}
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

            {/* Repassa as propriedades de controle e recarregamento para o Modal */}
            <CadastroUsuario
                show={show}
                ocultar={ocultar}
                usuarioParaEditar={usuarioParaEditar}
                atualizarLista={mostrarUsuarios}
            />
        </Container>
    );
}

export default Usuarios;