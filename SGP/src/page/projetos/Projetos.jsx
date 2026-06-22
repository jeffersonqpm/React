import { useEffect, useState } from "react";
import { Container, Card, Button, Table, Badge } from "react-bootstrap";
import CadastroProjeto from "./CadastroProjeto";

function Projetos() {
    const [show, setShow] = useState(false);
    const [projetos, setProjetos] = useState([]);

    const exibir = () => setShow(true);
    const ocultar = () => setShow(false);

    useEffect(() => {
        mostrarProjetos();
    }, []);

    const mostrarProjetos = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/projetos");
            const dados = await response.json();
            setProjetos(dados);
        } catch (error) {
            console.error("Erro ao buscar projetos", error);
        }
    };

    // Funções para os botões de Ação
    const lidarComEditar = (id) => {
        console.log("Editar projeto com ID:", id);
        // Aqui no futuro poderá abrir o modal preenchido para edição
    };

    const lidarComExcluir = async (id) => {
        if (window.confirm(`Tem a certeza que deseja excluir o projeto com o ID ${id}?`)) {
            try {
                const response = await fetch(`http://localhost:8080/api/projetos/${id}`, {
                    method: 'DELETE'
                });

                if (response.ok) {
                    // Atualiza a lista na tela removendo o projeto excluído
                    setProjetos(projetos.filter(projeto => projeto.id !== id));
                    alert("Projeto excluído com sucesso!");
                } else {
                    alert("Erro ao excluir o projeto.");
                }
            } catch (error) {
                console.error("Erro ao conectar com a API:", error);
            }
        }
    };

    const renderStatusBadge = (status) => {
        switch (status) {
            case 'ATIVO':
                return <Badge bg="primary">Ativo</Badge>;
            case 'CONCLUIDO':
                return <Badge bg="success">Concluído</Badge>;
            case 'CANCELADO':
                return <Badge bg="danger">Cancelado</Badge>;
            default:
                return <Badge bg="secondary">{status || "—"}</Badge>;
        }
    };

    const formatarData = (dataVindaDoJava) => {
        if (!dataVindaDoJava) return "—";

        if (Array.isArray(dataVindaDoJava)) {
            const [ano, mes, dia] = dataVindaDoJava;
            const pad = (num) => String(num).padStart(2, '0');
            return `${pad(dia)}/${pad(mes)}/${ano}`;
        }

        try {
            let dataTexto = String(dataVindaDoJava);
            if (dataTexto.includes('T')) {
                dataTexto = dataTexto.split('T')[0];
            }

            if (dataTexto.includes('-')) {
                const partes = dataTexto.split('-');
                if (partes.length === 3) {
                    if (partes[0].length === 4) {
                        return `${partes[2]}/${partes[1]}/${partes[0]}`;
                    }
                }
            }

            const dataObjeto = new Date(dataVindaDoJava);
            if (!isNaN(dataObjeto.getTime())) {
                return dataObjeto.toLocaleDateString('pt-BR');
            }
        } catch (e) {
            console.error("Erro ao converter data", e);
        }

        return String(dataVindaDoJava).substring(0, 10);
    };

    return (
        <Container className="mt-4">
            <Card className="shadow-sm">
                <Card.Header className="bg-dark text-white d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 py-3">
                    <h2 className="mb-0 fs-4">📁 Painel de Projetos</h2>
                    <Button variant="primary" className="fw-bold" onClick={exibir}>
                        + Cadastrar Projeto
                    </Button>
                </Card.Header>

                <Card.Body className="p-0">
                    {projetos.length === 0 ? (
                        <div className="text-center my-5 text-muted">
                            <p className="fs-5 mb-0">Nenhum projeto encontrado.</p>
                        </div>
                    ) : (
                        <Table responsive hover striped className="mb-0 align-middle">
                            <thead className="table-light">
                                <tr>
                                    <th className="ps-4">ID</th>
                                    <th>Nome</th>
                                    <th>Descrição</th>
                                    <th>Início</th>
                                    <th>Término</th>
                                    <th>Responsável</th>
                                    <th className="text-center">Status</th>
                                    <th className="pe-4 text-center">Ações</th> {/* NOVA COLUNA */}
                                </tr>
                            </thead>
                            <tbody>
                                {projetos.map((projeto) => (
                                    <tr key={projeto.id}>
                                        <td className="ps-4 fw-bold text-secondary">{projeto.id}</td>
                                        <td className="fw-bold text-secondary">{projeto.nome}</td>
                                        <td className="text-muted">{projeto.descricao || "—"}</td>
                                        <td>{formatarData(projeto.dataInicio)}</td>
                                        <td>{formatarData(projeto.dataFinal)}</td>
                                        <td className="text-muted">
                                            {projeto.responsavel?.id || projeto.responsavelId || "—"}
                                        </td>
                                        <td className="text-center">
                                            {renderStatusBadge(projeto.status)}
                                        </td>

                                        {/* BOTÕES DE AÇÃO ADICIONADOS */}
                                        <td className="pe-4 text-center">
                                            <div className="d-flex justify-content-center gap-2">
                                                <Button
                                                    variant="warning"
                                                    size="sm"
                                                    className="fw-bold" // Opcional: deixa o texto em negrito para ler melhor no fundo colorido
                                                    onClick={() => lidarComEditar(projeto.id)}
                                                >
                                                    ✏️ Editar
                                                </Button>
                                                <Button
                                                    variant="danger"
                                                    size="sm"
                                                    className="text-white fw-bold" // Garante o texto branco no botão vermelho
                                                    onClick={() => lidarComExcluir(projeto.id)}
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
                        Total de projetos cadastrados: {projetos.length}
                    </small>
                </Card.Footer>
            </Card>

            <CadastroProjeto show={show} ocultar={ocultar} />
        </Container>
    );
}

export default Projetos;