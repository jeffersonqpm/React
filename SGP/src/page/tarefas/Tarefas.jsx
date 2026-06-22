import { useEffect, useState } from "react";
import { Container, Card, Button, Table, Badge } from "react-bootstrap";
import CadastroTarefa from "./CadastroTarefa";

function Tarefas() {
    const [show, setShow] = useState(false);
    const [tarefas, setTarefas] = useState([]);

    const exibir = () => setShow(true);
    const ocultar = () => setShow(false);

    useEffect(() => {
        mostrarTarefas();
    }, []);

    const mostrarTarefas = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/tarefas");
            const dados = await response.json();
            setTarefas(dados);
        } catch (error) {
            console.error("Erro ao buscar tarefa: ", error);
        }
    };

    // Funções para os botões de Ação
    const lidarComEditar = (id) => {
        console.log("Editar tarefa com ID:", id);
        // Aqui você poderá abrir o modal preenchido com os dados para edição
    };

    const lidarComExcluir = async (id) => {
        if (window.confirm(`Tem a certeza que deseja excluir a tarefa com o ID ${id}?`)) {
            try {
                const response = await fetch(`http://localhost:8080/api/tarefas/${id}`, {
                    method: 'DELETE'
                });
                
                if (response.ok) {
                    // Atualiza o estado removendo a tarefa deletada da lista dinamicamente
                    setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
                    alert("Tarefa excluída com sucesso!");
                } else {
                    alert("Erro ao excluir a tarefa.");
                }
            } catch (error) {
                console.error("Erro ao conectar com a API:", error);
            }
        }
    };

    // Função para colorir as badges de prioridade
    const renderPrioridadeBadge = (prioridade) => {
        switch (prioridade) {
            case 'ALTA':
                return <Badge bg="danger">Alta</Badge>;
            case 'MEDIA':
                return <Badge bg="warning" text="dark">Média</Badge>;
            case 'BAIXA':
                return <Badge bg="success">Baixa</Badge>;
            default:
                return <Badge bg="secondary">{prioridade}</Badge>;
        }
    };

    // Função para tratar e formatar as datas do Java (evita o "Invalid Date")
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
                    <h2 className="mb-0 fs-4">📋 Painel de Tarefas</h2>
                    <Button variant="warning" className="fw-bold text-dark" onClick={exibir}>
                        + Adicionar Tarefa
                    </Button>
                </Card.Header>

                <Card.Body className="p-0">
                    {tarefas.length === 0 ? (
                        <div className="text-center my-5 text-muted">
                            <p className="fs-5 mb-0">Nenhuma tarefa encontrada.</p>
                        </div>
                    ) : (
                        <Table responsive hover striped className="mb-0 align-middle">
                            <thead className="table-light">
                                <tr>
                                    <th className="ps-4">ID</th>
                                    <th>Título</th>
                                    <th>Descrição</th>
                                    <th>Criação</th>
                                    <th>Conclusão</th>
                                    <th className="text-center">Prioridade</th>
                                    <th>Status</th>
                                    <th>Usuário</th>
                                    <th>Projeto</th>
                                    <th className="pe-4 text-center">Ações</th> {/* NOVA COLUNA */}
                                </tr>
                            </thead>
                            <tbody>
                                {tarefas.map((tarefa) => (
                                    <tr key={tarefa.id}>
                                        <td className="ps-4 fw-bold text-secondary">{tarefa.id}</td>
                                        <td className="fw-bold text-secondary">{tarefa.titulo}</td>
                                        <td className="text-muted">{tarefa.descricao || "—"}</td>

                                        {/* Formatação das datas */}
                                        <td>{formatarData(tarefa.dataCriacao)}</td>
                                        <td>{formatarData(tarefa.dataConclusao)}</td>

                                        <td className="text-center">
                                            {renderPrioridadeBadge(tarefa.prioridade)}
                                        </td>
                                        <td className="text-muted">{tarefa.status || "—"}</td>

                                        {/* Exibição dos IDs relacionados com fallback seguro */}
                                        <td className="text-muted">
                                            {tarefa.usuario?.id || tarefa.usuarioId || "—"}
                                        </td>
                                        <td className="text-muted">
                                            {tarefa.projeto?.id || tarefa.projetoId || "—"}
                                        </td>

                                        {/* BOTÕES DE AÇÃO SÓLIDOS */}
                                        <td className="pe-4 text-center">
                                            <div className="d-flex justify-content-center gap-2">
                                                <Button 
                                                    variant="warning" 
                                                    size="sm"
                                                    className="fw-bold text-dark"
                                                    onClick={() => lidarComEditar(tarefa.id)}
                                                >
                                                    ✏️ Editar
                                                </Button>
                                                <Button 
                                                    variant="danger" 
                                                    size="sm"
                                                    className="fw-bold text-white"
                                                    onClick={() => lidarComExcluir(tarefa.id)}
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
                        Total de tarefas gerenciadas: {tarefas.length}
                    </small>
                </Card.Footer>
            </Card>

            <CadastroTarefa show={show} ocultar={ocultar} />
        </Container>
    );
}

export default Tarefas;