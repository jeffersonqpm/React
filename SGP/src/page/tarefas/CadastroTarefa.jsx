import { useState } from "react"
import { Modal } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { Form, Row } from "react-bootstrap"
// import Tarefas from "./Tarefas"


function CadastroTarefa({ show, ocultar }) {

    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [prioridade, setPrioridade] = useState('');
    const [status, setStatus] = useState('');
    const [data, setData] = useState('');

    const tarefa = {

        titulo: titulo,
        descricao: descricao,
        prioridade: prioridade,
        status: status,
        data: data,
        projetoId: 0,
        responsavelId: 0
    }

    const salvar = () => {



        fetch("http://localhost:8080/api/tarefas", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/jason'
            },
            body: JASON.stringify(tarefa)
        })

    }

    return <Modal show={show} onHide={ocultar}>
        <Modal.Header closeButton>
            <Modal.Title>Cadastrar Nova Tarefa</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form>
                <Row>
                    <Form.Label>Título</Form.Label>
                    <Form.Control value={titulo} onChange={(c) => setTitulo(c.target.value)}></Form.Control>
                </Row>

                <Row>
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control value={descricao} onChange={(c) => setDescricao(c.target.value)}></Form.Control>
                </Row>

                <Row>
                    <Form.Label>Prioridade</Form.Label>
                    <Form.Control value={prioridade} onChange={(c) => setPrioridade(c.target.value)}></Form.Control>
                </Row>

                <Row>
                    <Form.Label>Status</Form.Label>
                    <Form.Control value={status} onChange={(c) => setStatus(c.target.value)}></Form.Control>
                </Row>

                <Row>
                    <Form.Label>Data</Form.Label>
                    <Form.Control value={data} type="date" onChange={(c) => setData(c.target.value)}></Form.Control>
                </Row>

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

export default CadastroTarefa