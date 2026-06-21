import { useState } from "react";

function CadastrarProjeto() {

    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [dataInicio, setDataInicio] = useState("");
    const [dataFinal, setDataFinal] = useState("");
    const [status, setDataStatus] = useState("");
    const [responsavelId, setDatResposavelId] = useState("");

    const limparFomulario = () => {
        setNome("");
        setDescricao("");
        setDataInicio("");
        setDataFinal("");
        setDataStatus("");
        setDatResposavelId("");
    };

    const salvar = async () => {
        const projeto = {
            nome: nome,
            descricao: descricao,
            dataInicio: dataInicio,
            dataFinal: dataFinal,
            status: status,
            responsavelId: responsavelId,
        }

        try {
            const response = await fetch("http://localhost:8080/api/projetos", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuario)
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

    return (
        <div>
            <h2>Tela de projetos</h2>
        </div>
    );

}

export default CadastrarProjeto