import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';


function NavBar() {

    return (

        <div>

            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src="src/assets/sgp_logo.png" alt="Logo_SGP"
                            width="190"
                            height="80" />
                    </Navbar.Brand>

                    <Nav className="mx-auto gap-4 align-items-center">
                        <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
                        <Nav.Link as={Link} to="/tarefas">Tarefas</Nav.Link>
                        <Nav.Link as={Link} to="/projetos">Projetos</Nav.Link>
                        <Nav.Link as={Link} to="/usuarios">Usuários</Nav.Link>
                    </Nav>

                 
                </Container>
            </Navbar>

        </div>
    );


}

export default NavBar


// <Nav variant="pills" defaultActiveKey="/home">
//     <Nav.Item>
//         <Nav.Link href="/home">DashBoard</Nav.Link>
//     </Nav.Item>
//     <Nav.Item>
//         <Nav.Link eventKey="link-1">Tarefas</Nav.Link>
//     </Nav.Item>
//     <Nav.Item>
//         <Nav.Link eventKey="link-2">Projetos</Nav.Link>
//     </Nav.Item>
//     <Nav.Item>
//         <Nav.Link eventKey="link-3">Usuários</Nav.Link>
//     </Nav.Item>