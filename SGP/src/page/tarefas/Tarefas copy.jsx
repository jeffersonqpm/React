import { useEffect, useState } from "react";
// import { Container, Card, Button, CardBody, ListGroup } from "react-bootstrap";
import { Container, Card, Button } from "react-bootstrap";
import CadastroTarefa from "./CadastroTarefa";

function Tarefas() {
    const [show, setShow] = useState(false);
    const [tarefas, setTarefas] = useState([]);

    // const [tarefas] = useState([
    //     { id: 1, titulo: "Estudar React" },
    //     { id: 2, titulo: "Fazer exercícios" },
    //     { id: 3, titulo: "Ler documentação AWS" }
    // ]);

    const exibir = () => {
        setShow(true);
    };

    const ocultar = () => {
        setShow(false);
    };

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

    return (

   
        <Container className="mt-4">
            <Card>
                <Card.Header className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
                    <h2>Painel de Tarefas</h2>
                    <Button variant="dark" onClick={exibir}>
                        Adicionar Tarefa
                    </Button>
                </Card.Header>

                <Card.Body>
                    <h2>Lista de Tarefas</h2>

                    {/* CORREÇÃO 2: Percorrendo a lista de usuários corretamente */}
                    {tarefas.length === 0 ? (
                        <p>Nenhuma tarefa encontrada.</p>
                    ) : (
                        <ul>
                            {tarefas.map((tarefa) => (
                                <li key={tarefa.id}>
                                    <strong>{tarefa.status}</strong> - {tarefa.titulo} ({tarefa.descricao})
                                </li>
                            ))}
                        </ul>
                    )}


                </Card.Body>

            </Card>

            <CadastroTarefa show={show} ocultar={ocultar} />
        </Container>
    );
}

export default Tarefas;