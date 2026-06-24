import { useState } from "react";
import { Modal, Row, Form, Button } from "react-bootstrap"
import '../../style.css';


function CadastroUsuario({ show, ocultar }) {

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [data, setData] = useState('');
    const [senha, setSenha] = useState('');
    const [status, setStatus] = useState('');

    const limparFomulario = () => {

        setNome('');
        setCpf('');
        setEmail('');
        setData('');
        setSenha('');
        setStatus('');
    };

    const salvar = async () => {

        const cpfLimpo = cpf.replace(/\D/g, "");

        const usuario = {

            nome: nome,
            cpf: cpfLimpo,
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
            alert("Erro ao cadastrar o Usuário")
        }
    };

    const mascaraCPF = (value) => {
        return value
            .replace(/\D/g, "")
            .slice(0, 11)
            .replace(/(\d{3})(\d)/, "$1.$2")       // 3. Coloca o primeiro ponto
            .replace(/(\d{3})(\d)/, "$1.$2")       // 4. Coloca o segundo ponto
            .replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // 5. Coloca o hífen

    };

    const handleChangeCpf = (e) => {

        const inputFormatado = mascaraCPF(e.target.value);
        setCpf(inputFormatado);
    };


    return <Modal show={show} onHide={ocultar}>
        <Modal.Header closeButton>
            <Modal.Title>Cadastrar Novo Usuário</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form>

                <Row>
                    <Form.Label>Nome<span className="mandatory">*</span></Form.Label>
                    <Form.Control value={nome} onChange={(c) => setNome(c.target.value)}></Form.Control>

                </Row><br />
                <Row>

                    <Form.Label>CPF<span className="mandatory">*</span></Form.Label>
                    <Form.Control
                        value={cpf}
                        onChange={handleChangeCpf}
                        maxLength={14}
                        placeholder="000.000.000-00"
                    />
                </Row><br />
                <Row>
                    <Form.Label>E-mail<span className="mandatory">*</span></Form.Label>
                    <Form.Control value={email} onChange={(c) => setEmail(c.target.value)}></Form.Control>

                </Row><br />
                <Row>
                    <Form.Label>Data de nascimento<span className="mandatory">*</span></Form.Label>
                    <Form.Control type="date" value={data} onChange={(c) => setData(c.target.value)}></Form.Control>

                </Row><br />
                <Row>
                    {/* 
                    <Form.Label>Status</Form.Label>
                    <Form.Control value={status} onChange={(c) => setStatus(c.target.value)}></Form.Control> */}
                    <Form.Label>Status <span className="mandatory">*</span></Form.Label>
                    <Form.Control
                        id="status"
                        as="select"
                        value={status}
                        onChange={(c) => setStatus(c.target.value)}>

                        <option value="#">Selecione</option>
                        <option value="ATIVO">Ativo</option>
                        <option value="INATIVO">Inativo</option>
                        <option value="BLOQUEADO">Bloqueado</option>
                    </Form.Control>

                </Row><br />
                <Row>

                    <Form.Label>Senha<span className="mandatory">*</span></Form.Label>
                    <Form.Control type="password" value={senha} onChange={(c) => setSenha(c.target.value)}></Form.Control>

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

export default CadastroUsuario