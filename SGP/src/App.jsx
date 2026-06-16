import { Route, Routes } from 'react-router-dom'
// import Usuarios from '../src/page/Usuario'
import NavBar from "./Controller/NavBar"
import Container from 'react-bootstrap/esm/Container';

import Usuarios from './page/Usuarios';
import Dashboard from './page/Dashboard';
import Tarefas from './page/Tarefas';
import Projetos from './page/Projetos';



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
