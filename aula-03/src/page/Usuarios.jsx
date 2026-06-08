// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Usuarios() {

    return <div>


        <>
            <div className='text-start col-12'>

                <Form.Label htmlFor='nomeUsuario' >Nome</Form.Label>
                <Form.Control size="sm" type="text" placeholder="digite seu nome" /> <br />
            </div>

            <div className='row'>

                <div className='text-start col-6' >
                    <Form.Label htmlFor='cpfUsuario'>CPF</Form.Label>
                    <Form.Control size="sm" type="number" placeholder="Small text" /><br />
                </div>

                <div className='text-start col-6'>
                    <Form.Label htmlFor='dtNascimentoUsuario'>data de nascimento</Form.Label>
                    <Form.Control size="sm" type="date" placeholder="Small text" />
                </div>

            </div>

            <div className='text-start col-12'>

                <Form.Label htmlFor='email'>E-mail</Form.Label>
                <Form.Control size="sm" type="email" placeholder="Digite o e-mail" />

            </div><br />
               <Button variant="success">Salvar</Button>
        </>
    </div >


}

export default Usuarios

// email 
// status 
// senha
