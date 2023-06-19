import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ReactImage from '../../assets/react.svg';
import ButtonLogin from '../ButtonLogin/ButtonLogin';
import './Navbar.css';

export default function NavbarBoostrap() {
    return (
        <Navbar expand="md" className="bg-body-success" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt="Logo React"
                        src={ReactImage}
                        width="30"
                        height="30"
                        className="d-inline-block align-top rotate linear infinite"
                    />{' '}
                    React Bootstrap
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="https://universe.rollingcodeschool.com/home" target={'_blank'}>Rolling Code</Nav.Link>
                        <ButtonLogin/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
