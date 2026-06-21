import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card} from "react-bootstrap";

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

    return (
        <Container className="mt-4">
            <Card>
                <Card.Header className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
                    <h2>Painel de Projetos</h2>
                    <Button variant="dark" onClick={exibir}>Cadastrar Projetoss</Button>
                </Card.Header>

                <Card.Body>
                    <h2>Lista de Projetos</h2>

                    {/* CORREÇÃO 2: Percorrendo a lista de usuários corretamente */}
                    {projetos.length === 0 ? (
                        <p>Nenhum projeto encontrado.</p>
                    ) : (
                        <ul>
                            {projetos.map((projeto) => (
                                <li key={projeto.id}>
                                    {projeto.id}- <strong>{projeto.nome}</strong> - {projeto.descricao} / ({projeto.status})
                                </li>
                            ))}
                        </ul>
                    )}
                </Card.Body>

                <Card.Footer>
                    {/* Espaço para paginação ou contagem se desejar */}
                    <small className="text-muted">Total de projetos: {projetos.length}</small>
                </Card.Footer>
            </Card>

            <CadastroProjeto show={show} ocultar={ocultar} />
        </Container>
    );

}

export default Projetos