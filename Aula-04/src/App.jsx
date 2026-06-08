import {Link, Route, Routes} from 'react-router-dom'
import Usuarios from './Pages/Usuarios'
import Tarefas from './Pages/Tarefas'

function App() {



  return <div>
    <Link to="Usuario">Usuários</Link>
    <Link to="Tarefas">Tarefas</Link>

    <h2>teste</h2>

    <Routes>
      <Route path="/usuario" element={<Usuarios />} />
      <Route path="/tarefas" element={<Tarefas />} />
    </Routes>

  </div>




}

export default App