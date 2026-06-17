import { useState } from "react";
import { Container, Card, Button, CardBody, ListGroup } from "react-bootstrap";
import CadastroTarefa from "./CadastroTarefa";

function Tarefas() {
    const [show, setShow] = useState(false);

    const [tarefas] = useState([
        { id: 1, titulo: "Estudar React" },
        { id: 2, titulo: "Fazer exercícios" },
        { id: 3, titulo: "Ler documentação AWS" }
    ]);

    const exibir = () => {
        setShow(true);
    };

    const ocultar = () => {
        setShow(false);
    };

    return (
        <Container>
            <Card>
                <Card.Header className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
                    <h2>Painel de Tarefas</h2>
                    <Button variant="dark" onClick={exibir}>
                        Adicionar Tarefa
                    </Button>
                </Card.Header>

                <CardBody>
                    <h2>Lista de Tarefas</h2>

                   
                </CardBody>
            </Card>

            <CadastroTarefa show={show} ocultar={ocultar} />
        </Container>
    );
}

export default Tarefas;