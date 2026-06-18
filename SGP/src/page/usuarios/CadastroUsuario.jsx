import { useState } from "react";
import { Modal, Row, Form, Button } from "react-bootstrap"

function CadastroUsuario({ show, ocultar }) {

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [data, setData] = useState('');
    const [senha, setSenha] = useState('');
    const [status, setStatus] = useState('');

    const limparFomulario = () =>{

        setNome('');
        setCpf('');
        setEmail('');
        setData('');
        setSenha('');
        setStatus('');
    };

    const salvar = async () => {

        const usuario = {

            nome: nome,
            cpf: cpf,
            email: email,
            senha: senha,
            dataNascimento: data,
            status: status



            // "nome": "Jefferson Pereira",
            // "cpf": "07764117478",
            // "email": "jeff@gmail.com",
            // "senha": "jeff987",
            // "dataNascimento": "2002-09-20",
            // "status": "BLOQUEADO"
        }

        // console.log(usuario);

        try {

            const response = await fetch("http://localhost:8080/api/usuarios", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuario)
            }
            );

            // if (!response.ok) {
            //     throw new Error("Erro na resposta do servidor");
            // }

            const dados = await response.json();
            console.log(dados);
            alert("Usuário cadastrado com sucesso!")
            limparFomulario();
            ocultar();


            
        } catch (error) {
            console.log(error)
            alert("Erro ao caadstrar o Usuário")
        }


    }

    return <Modal show={show} onHide={ocultar}>
        <Modal.Header closeButton>
            <Modal.Title>Cadastrar Novo Usuário</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form>

                <Row>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control value={nome} onChange={(c) => setNome(c.target.value)}></Form.Control>

                </Row>
                <Row>

                    <Form.Label>CPF</Form.Label>
                    <Form.Control value={cpf} onChange={(c) => setCpf(c.target.value)}></Form.Control>

                </Row>
                <Row>
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control value={email} onChange={(c) => setEmail(c.target.value)}></Form.Control>

                </Row>
                <Row>
                    <Form.Label>Data de nascimento</Form.Label>
                    <Form.Control type="date" value={data} onChange={(c) => setData(c.target.value)}></Form.Control>

                </Row>
                <Row>

                    <Form.Label>Status</Form.Label>
                    <Form.Control value={status} onChange={(c) => setStatus(c.target.value)}></Form.Control>

                </Row>
                <Row>

                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" value={senha} onChange={(c) => setSenha(c.target.value)}></Form.Control>

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

export default CadastroUsuario