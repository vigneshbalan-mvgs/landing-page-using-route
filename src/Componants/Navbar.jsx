import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import './CSS/Navbar.css';
function NavBar() {
  return (
    <Navbar expand="lg" className='nav'>
      <Container>
              <Navbar.Brand href="#home">
                 <h1>MVGS</h1>
        </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav">
                  
              </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-1">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Service">Service</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;