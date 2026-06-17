import { Modal, Row, Form , Button} from "react-bootstrap"

function CadastroUsuario({show, ocultar}){

    const salvar = ()=>{
        alert('usuario salvo');
    }

    return <Modal show={show} onHide={ocultar}>
        <Modal.Header closeButton>
            <Modal.Title>Cadastrar Novo Usuário</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form>


            </Form>

        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary" onClick={ocultar}>
                Fechar
            </Button>
            <Button variant="primary" onClick={salvar}>
                Salvar
            </Button>
        </Modal.Footer>
    </Modal>
}

export default CadastroUsuario