import "./styles.css";
import logo from "../../assets/logo cca.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="nav-header">
      <Container>
        <Navbar.Brand href="/Home">
          <img className="logo" src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/quem-somos" className={location.pathname === '/quem-somos' ? 'active' : ''}>Sobre nós</Nav.Link>
            <Nav.Link disabled href="/Galeria" className={location.pathname === '/Galeria' ? 'active' : ''}>Galeria</Nav.Link>
            <Nav.Link href="/temporadas" className={location.pathname === '/temporadas' ? 'active' : ''}>Temporadas</Nav.Link>
            <Nav.Link disabled href="/Projetos" className={location.pathname === '/Projetos' ? 'active' : ''}>Projetos</Nav.Link>
            <Nav.Link disabled href="/Premios" className={location.pathname === '/Premios' ? 'active' : ''}>Prêmios</Nav.Link>
            <Nav.Link href="/elenco" className={location.pathname === '/elenco' ? 'active' : ''}>Elenco</Nav.Link>
            <Nav.Link disabled href="/Colaboradores" className={location.pathname === '/Colaboradores' ? 'active' : ''}>Colaboradores</Nav.Link>
            <Nav.Link disabled href="/Coordenacao" className={location.pathname === '/Coordenacao' ? 'active' : ''}>Coordenação</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
