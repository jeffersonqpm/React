import { useState } from "react"
import { Col, Modal } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { Form, Row } from "react-bootstrap"
// import Tarefas from "./Tarefas"
import './tarefaStaly.css';


function CadastroTarefa({ show, ocultar }) {

    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [dataCriacao, setDataCriacao] = useState('');
    const [dataConclusao, setDataConclusao] = useState('');
    const [prioridade, setPrioridade] = useState('');
    const [status, setStatus] = useState('');
    const [usuarioId, setUsuarioId] = useState('');
    const [projetoId, setProjetoId] = useState('');

    const limparFomulario = () => {

        setTitulo('');
        setDescricao('');
        setDataCriacao('');
        setDataConclusao('');
        setPrioridade('');
        setStatus('');
        setUsuarioId('');
        setProjetoId('');
    };

    const salvar = async () => {

        const tarefa = {

            titulo: titulo,
            descricao: descricao,
            dataCriacao: dataCriacao,
            dataConclusao: dataConclusao,
            prioridade: prioridade,
            status: status,
            usuarioId: usuarioId,
            projetoId: projetoId,

        }

        // const [listaUsuarios, setListaUsuarios] = useState([]);
        // const [listaProjetos, setListaProjetos] = useState([]);

        // useEffect(() => {
        //     if (show) {
        //         // Busca usuários
        //         fetch("http://localhost:8080/api/usuarios")
        //             .then(res => res.json())
        //             .then(dados => setListaUsuarios(dados));

        //         // Busca projetos
        //         fetch("http://localhost:8080/api/projetos")
        //             .then(res => res.json())
        //             .then(dados => setListaProjetos(dados));
        //     }
        // }, [show]);

        try {

            const response = await fetch("http://localhost:8080/api/tarefas", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(tarefa)
            }
            );

            if (!response.ok) {
                throw new Error("Erro na resposta do servidor");
            }

            const dados = await response.json();
            console.log(dados);
            alert("Tarefa cadastrada com sucesso!")
            limparFomulario();
            ocultar();



        } catch (error) {
            console.log(error)
            alert("Erro ao cadastrar o Projeto")
        }

    }

    return <Modal show={show} onHide={ocultar} size="lg">
        <Modal.Header closeButton>
            <Modal.Title>Cadastrar nova Tarefa</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form>
                <Row>
                    <Form.Label>Título <span className="mandatory">*</span> </Form.Label>
                    <Form.Control value={titulo} onChange={(c) => setTitulo(c.target.value)}></Form.Control>
                </Row>

                <Row>
                    <Form.Label>Descrição<span className="mandatory">*</span></Form.Label>
                    <Form.Control value={descricao} onChange={(c) => setDescricao(c.target.value)}></Form.Control>
                </Row> <br />
                <Row className="mb-3 gx-5">

                    <Col md={5}>
                        <Row>
                            <Form.Label>Data de Criação <span className="mandatory">*</span></Form.Label>
                            <Form.Control type="date" value={dataCriacao} onChange={(c) => setDataCriacao(c.target.value)}></Form.Control>
                        </Row>
                    </Col>

                    <Col md={5}>
                        <Row>
                            <Form.Label>Data de conslusão <span className="mandatory">*</span></Form.Label>
                            <Form.Control type="date" value={dataConclusao} onChange={(c) => setDataConclusao(c.target.value)}></Form.Control>
                        </Row>


                    </Col>


                </Row>

                <Row className="mb-3 gx-4">

                    <Row>
                        <Form.Label>Prioridade <span className="mandatory">*</span></Form.Label>
                        <Form.Control
                            id="prioridade"
                            as="select"
                            value={prioridade}
                            onChange={(c) => setPrioridade(c.target.value)}>

                            <option value="#">Selecione</option>
                            <option value="BAIXA">Baixa</option>
                            <option value="MEDIA">Média</option>
                            <option value="ALTA">Alta</option>
                        </Form.Control>
                    </Row>

                    <Row>
                        <Form.Label htmlFor="status">Status <span className="mandatory">*</span></Form.Label>
                        <Form.Control
                            id="status"
                            as="select" // <-- Isso transforma o input de texto em um select
                            value={status}
                            onChange={(c) => setStatus(c.target.value)}
                        >
                            <option value="#">Selecione</option>
                            <option value="PENDENTE">Pendente</option>
                            <option value="FAZENDO">Fazendo</option>
                            <option value="CONCLUIDA">Concluída</option>
                        </Form.Control>
                    </Row>
                </Row>


                <Row>
                    <Form.Label>Usuário <span className="mandatory">*</span></Form.Label>
                    <Form.Control value={usuarioId} onChange={(c) => setUsuarioId(c.target.value)}></Form.Control>
                </Row>
                <Row>
                    <Form.Label>Projeto <span className="mandatory">*</span> </Form.Label>
                    <Form.Control value={projetoId} onChange={(c) => setProjetoId(c.target.value)}></Form.Control>
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