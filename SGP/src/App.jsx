

import {Link, Route, Routes} from 'react-router-dom'
import Usuarios from '../src/page/Usuario'

function App() {

  return <div>

    <Link to="Usuarios">Usuários</Link>
    <Link to="Tarefas">Tarefas</Link>


    <Routes>
      <Route path="/usuarios" element={<Usuarios />}></Route>
      {/* <Route path="/tarefas" element={<Tarefas />}></Route> */}
    </Routes>
  </div>



}

export default App
