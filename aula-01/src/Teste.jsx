import React from 'react';
import Menu from './components/Menu'; // Certifique-se que o arquivo Menu.jsx está dentro de src/components/
import Usuarios from './Usuarios';   // Importando o arquivo correto que criamos acima
import Projeto from './Projeto';   // Importando o arquivo correto que criamos acima

function Teste() {
    return (
        <div>
            <h1>Testando o app</h1>
            <Menu />
            <Projeto />
        </div>
    );
}

export default Teste;

