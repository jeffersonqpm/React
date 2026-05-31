import React from 'react';
import Menu from './components/Menu'; // Certifique-se que o arquivo Menu.jsx está dentro de src/components/
import Usuarios from './Usuarios';   // Importando o arquivo correto que criamos acima
import Projeto from './Projeto';   // Importando o arquivo correto que criamos acima

function Teste() {
    return (
        <div>
            <Menu />
            <Usuarios />
            <Projeto />
        </div>
    );
}

export default Teste;
