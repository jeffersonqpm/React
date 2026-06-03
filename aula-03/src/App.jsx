// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './page/Home';
import Tarefas from './page/Tarefas';
import Projetos from './page/Projetos';
import Usuarios from './page/Usuarios';

function App() {

  return (

    // REFERENCIA DOS LINKS
    // <BrowserRouter>
    <div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/tarefas">Tarefas</Link>
        <Link to="/projetos">Projetos</Link>
        <Link to="/usuarios">Usuarios</Link>

      </nav>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/tarefas' element={<Tarefas />}></Route>
        <Route path='/projetos' element={<Projetos />}></Route>
        <Route path='/usuarios' element={<Usuarios />}></Route>
      </Routes>
    </div>


    // </BrowserRouter>


  );
}

export default App
