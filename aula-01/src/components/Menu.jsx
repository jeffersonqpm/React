import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Menu() {

    return (

        <div className='container'>

            <div>
                <Nav variant="pills" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">DashBoard</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Projetos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Tarefas</Nav.Link>
                    </Nav.Item>
                                        <Nav.Item>
                        <Nav.Link eventKey="link-3">Usuarios</Nav.Link>
                    </Nav.Item>

                </Nav>
            </div>

        </div>
    );

}

export default Menu;



