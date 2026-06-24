import { Route, Routes } from 'react-router-dom'
// import Usuarios from '../src/page/Usuario'
import NavBar from "./Controller/NavBar"
import Container from 'react-bootstrap/esm/Container';

import Usuarios from './page/usuarios/Usuarios';
import Dashboard from './page/dashboard/Dashboard';
import Tarefas from './page/tarefas/Tarefas';
import Projetos from './page/projetos/Projetos';




function App() {

  return (

    <Container>

      <NavBar />


      <Routes>

        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/tarefas" element={<Tarefas />}></Route>
        <Route path="/projetos" element={<Projetos />}></Route>
        <Route path="/usuarios" element={<Usuarios />}></Route>


      </Routes>



    </Container>
  );
}

export default App
