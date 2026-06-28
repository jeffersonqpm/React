import { useEffect, useState } from "react";
import { Modal, Row, Form, Button } from "react-bootstrap";
import '../../style.css';

function CadastroUsuario({ show, ocultar, usuarioParaEditar, atualizarLista }) {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [data, setData] = useState('');
    const [senha, setSenha] = useState('');
    const [status, setStatus] = useState('');

    // Monitora a abertura do Modal e o objeto de edição
    useEffect(() => {
        if (usuarioParaEditar) {
            setNome(usuarioParaEditar.nome || '');
            setEmail(usuarioParaEditar.email || '');
            setSenha(usuarioParaEditar.senha || '');
            setStatus(usuarioParaEditar.status || '');

            // --- TRATAMENTO SEGURO E COMPLETO DO CPF ---
            if (usuarioParaEditar.cpf) {
                setCpf(formatarCpfDoBanco(usuarioParaEditar.cpf));
            } else {
                setCpf('');
            }

            // --- TRATAMENTO ROBUSTO DA DATA DE NASCIMENTO ---
            if (usuarioParaEditar.dataNascimento) {
                let dataFormatada = "";

                // Caso 1: Se vier como Array do Java (ex: [2002, 2, 23])
                if (Array.isArray(usuarioParaEditar.dataNascimento)) {
                    const [ano, mes, dia] = usuarioParaEditar.dataNascimento;
                    const pad = (num) => String(num).padStart(2, '0');
                    dataFormatada = `${ano}-${pad(mes)}-${pad(dia)}`;
                }
                // Caso 2: Se vier como string
                else {
                    let dataTexto = String(usuarioParaEditar.dataNascimento);

                    // Se vier com o "T" do ISOString (ex: 2002-02-23T00:00:00)
                    if (dataTexto.includes('T')) {
                        dataFormatada = dataTexto.split('T')[0];
                    }
                    // Se já vier no formato correto com hífens (ex: 2002-02-23)
                    else if (dataTexto.includes('-') && dataTexto.split('-')[0].length === 4) {
                        dataFormatada = dataTexto.substring(0, 10);
                    }
                    // Se vier no formato brasileiro com barras (ex: 23/02/2002)
                    else if (dataTexto.includes('/')) {
                        const partes = dataTexto.split('/');
                        if (partes.length === 3) {
                            dataFormatada = `${partes[2]}-${partes[1]}-${partes[0]}`;
                        }
                    }
                }

                setData(dataFormatada);
            } else {
                setData('');
            }
        } else {
            limparFormulario();
        }
    }, [usuarioParaEditar, show]);

    const limparFormulario = () => {
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
            id: usuarioParaEditar?.id,
            nome: nome,
            cpf: cpfLimpo,
            email: email,
            senha: senha,
            dataNascimento: data,
            status: status
        };

        const ehEdicao = !!usuarioParaEditar?.id;

        const url = ehEdicao
            ? `http://localhost:8080/api/usuarios/${usuarioParaEditar.id}`
            : "http://localhost:8080/api/usuarios";

        const metodo = ehEdicao ? 'PUT' : 'POST';

        try {
            const response = await fetch(url, {
                method: metodo,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuario)
            });

            if (response.ok) {
                alert(ehEdicao ? "Usuário atualizado com sucesso!" : "Usuário cadastrado com sucesso!");
                atualizarLista(); 
                limparFormulario();
                ocultar();
            } else {
                console.error("Status do erro:", response.status);
                alert("Erro ao processar a requisição no servidor.");
            }
        } catch (error) {
            console.error(error);
            alert("Erro ao salvar o Usuário.");
        }
    };

    // Função exclusiva para formatar o CPF que vem do banco de dados (11 dígitos puros)
    const formatarCpfDoBanco = (valor) => {
        if (!valor) return "";
        const numeros = String(valor).replace(/\D/g, "").padStart(11, "0");
        return numeros
            .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    };

    // Função dinâmica para o que o usuário digita no teclado (evita travar a digitação)
    const mascaraCPF = (value) => {
        if (!value) return "";
        const apenasNumeros = String(value).replace(/\D/g, "");
        
        return apenasNumeros
            .slice(0, 11) 
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    };

    const handleChangeCpf = (e) => {
        const inputFormatado = mascaraCPF(e.target.value);
        setCpf(inputFormatado);
    };

    return (
        <Modal show={show} onHide={ocultar}>
            <Modal.Header closeButton className="bg-dark text-white">
                <Modal.Title className="fs-5">
                    {usuarioParaEditar ? "✏️ Editar Usuário" : "👥 Cadastrar Novo Usuário"}
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Row className="px-2">
                        <Form.Label className="fw-semibold">Nome<span className="mandatory">*</span></Form.Label>
                        <Form.Control value={nome} onChange={(c) => setNome(c.target.value)} />
                    </Row><br />

                    <Row className="px-2">
                        <Form.Label className="fw-semibold">CPF<span className="mandatory">*</span></Form.Label>
                        <Form.Control
                            value={cpf}
                            onChange={handleChangeCpf}
                            maxLength={14} 
                            placeholder="000.000.000-00"
                        />
                    </Row><br />

                    <Row className="px-2">
                        <Form.Label className="fw-semibold">E-mail<span className="mandatory">*</span></Form.Label>
                        <Form.Control type="email" value={email} onChange={(c) => setEmail(c.target.value)} />
                    </Row><br />

                    <Row className="px-2">
                        <Form.Label className="fw-semibold">Data de nascimento<span className="mandatory">*</span></Form.Label>
                        <Form.Control type="date" value={data} onChange={(c) => setData(c.target.value)} />
                    </Row><br />

                    <Row className="px-2">
                        <Form.Label className="fw-semibold">Status <span className="mandatory">*</span></Form.Label>
                        <Form.Control
                            id="status"
                            as="select"
                            value={status}
                            onChange={(c) => setStatus(c.target.value)}
                        >
                            <option value="">Selecione</option>
                            <option value="ATIVO">Ativo</option>
                            <option value="INATIVO">Inativo</option>
                            <option value="BLOQUEADO">Bloqueado</option>
                        </Form.Control>
                    </Row><br />

                    <Row className="px-2">
                        <Form.Label className="fw-semibold">Senha<span className="mandatory">*</span></Form.Label>
                        <Form.Control type="password" value={senha} onChange={(c) => setSenha(c.target.value)} />
                    </Row><br />
                </Form>
            </Modal.Body>

            <Modal.Footer className="bg-light">
                <Button variant="secondary" onClick={ocultar}>
                    Fechar
                </Button>
                <Button variant="success" className="fw-bold" onClick={salvar}>
                    {usuarioParaEditar ? "Salvar Alterações" : "Cadastrar"}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CadastroUsuario;