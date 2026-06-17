import { useState } from "react";
import { Container, Card, Button, CardBody , CardHeader, Alert } from "react-bootstrap";


import CadastroUsuario from "./CadastroUsuario";


function Usuarios() {

    const [show, setShow] = useState(false);

    const exibir = () => {
        setShow(true);
    }

    const ocultar = () => {
        setShow(false);
    }

    return <Container>

        <Card>
            <Card.Header className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
                <h2>Painel de Usuários</h2>
                <Button variant="dark" onClick={exibir}>Cadastrar Usuário</Button>
            </Card.Header>
            <Card.Body>

                <h2>Lista de usuários</h2>

            </Card.Body>


            <Card.Footer>


            </Card.Footer>
        </Card>

        <CadastroUsuario show={show} ocultar={ocultar} />

    </Container>
}

export default Usuarios