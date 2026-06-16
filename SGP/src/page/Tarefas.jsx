import Container from "react-bootstrap/esm/Container";
// import Button from "react-bootstrap";

function Tarefas(){

    const exibir = () => {
        alert("Função OK");
    }

    return(

        <Container>
            <Card>
                <Card.Header>
                    <h2>Painel de Tarefas</h2>
                    <Button variant="dark" onClick={exibir}>Adicionar Tarefas</Button>
                 
                </Card.Header>
            </Card>
        </Container>
    );
}
export default Tarefas