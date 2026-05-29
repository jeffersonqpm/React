function Usuario() {
    return (
        <div>

            <div>
                <h1>Cadastro de Usuarios</h1>

                <label htmlFor="nome">Nome:  <span className="obrigatorio ">* </span></label>
                <input type="text" placeholder="Nome do usuário" /><br /><br />
                <label htmlFor="cpf">CPF:  <span className="obrigatorio">* </span></label>
                <input type="number" placeholder="Digite apenas números" /><br /><br />
                <label htmlFor="dataNascimento">Data de Nascimento:  <span className="obrigatorio">* </span>
                </label>
                <input type="date" id="dataNascimento" /><br /><br />
                <label htmlFor="email">E-mail:  <span className="obrigatorio">* </span></label>
                <input type="email" placeholder="seuemail@google.com" /><br></br><br />
                <label htmlFor="statusUsuario">Status:  <span className="obrigatorio">* </span></label>
                <select name="" id="statusUsuario">
                    <option value="#">Selecione</option>
                    <option value="Ativo">Ativo</option>
                    <option value="Inativo">Inativo</option>
                    <option value="Bloqueado">Bloqueado</option>
                </select><br /><br /><br />

                <label htmlFor="senha">Senha: <span className="obrigatorio">* </span></label>
                <input type="password" placeholder="Digite sua senha" />

                <br /><br /><br /><br />

                <input type="button" value="Salvar" />
                <br /><br /><br />

                <input type="reset" value="Cancelarr" />
            </div>

            
        </div>


    );
}

export default Usuario;