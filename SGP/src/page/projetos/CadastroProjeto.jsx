import { useState } from "react";
import { Modal, Row, Form, Button } from "react-bootstrap"


function CadastroProjeto({ show, ocultar }) {

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [dataInicio, setDataInicio] = useState('');
    const [dataFinal, setDataFinal] = useState('');
    const [status, setStatus] = useState('');
    const [responsavelId, setResposavelId] = useState('');
    // const [projetoId, setProjetoId] = useState('');

    const limparFomulario = () => {
        setNome('');
        setDescricao('');
        setDataInicio('');
        setDataFinal('');
        setStatus('');
        setResposavelId('');
        // setProjetoId('');
    };

    const salvar = async () => {

        const projeto = {
            nome: nome,
            descricao: descricao,
            dataInicio: dataInicio,
            dataFinal: dataFinal,
            status: status,
            responsavelId: responsavelId
            // projetoId: projetoId
        }

        try {
            const response = await fetch("http://localhost:8080/api/projetos", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(projeto)
            });

            const dados = await response.json();
            console.log(dados);
            alert("Projeto cadastrado com sucesso!")
            limparFomulario();
            ocultar();

        } catch (error) {
            console.log(error)
            alert("Erro ao cadastrar o Projeto")
        }
    };

    return <Modal show={show} onHide={ocultar}>
        <Modal.Header closeButton>
            <Modal.Title>Cadastrar Novo Projeto</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form>

                <Row>
                    <Form.Label>Nome<span className="mandatory">*</span></Form.Label>
                    <Form.Control value={nome} onChange={(c) => setNome(c.target.value)}></Form.Control>

                </Row><br />
                <Row>

                    <Form.Label>Descrição<span className="mandatory">*</span></Form.Label>
                    <Form.Control value={descricao} onChange={(c) => setDescricao(c.target.value)}></Form.Control>

                </Row><br />

                <Row>
                    <Form.Label>Data de início<span className="mandatory">*</span></Form.Label>
                    <Form.Control type="date" value={dataInicio} onChange={(c) => setDataInicio(c.target.value)}></Form.Control>

                </Row><br />
                <Row>
                    <Form.Label>Data de final<span className="mandatory">*</span></Form.Label>
                    <Form.Control type="date" value={dataFinal} onChange={(c) => setDataFinal(c.target.value)}></Form.Control>

                </Row><br />
                <Row>
                    <Form.Label>Status<span className="mandatory">*</span></Form.Label>
                    <Form.Control
                        id="status"
                        as="select"
                        value={status}
                        onChange={(c) => setStatus(c.target.value)}>

                        <option value="#">Selecione</option>
                        <option value="ATIVO">Ativo</option>
                        <option value="CONCLUIDO">Concluído</option>
                        <option value="CANCELADO">Cancelado</option>
                    </Form.Control>
                </Row><br />
                <Row>

                    <Form.Label>Responsável<span className="mandatory">*</span></Form.Label>
                    <Form.Control value={responsavelId} onChange={(c) => setResposavelId(c.target.value)}></Form.Control>

                </Row><br />

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

export default CadastroProjeto