import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from './../assets/logo.png';

import style from './Navigation.module.css';

function Navigation()
{
  return (
    <Navbar id={style['navigation']} expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img className={style.brand} alt="Dito Zé Ninguém" src={logo} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="nav" />
        <Navbar.Collapse id="nav">
            <Nav className="me-auto">
              <Link to="/">Home</Link>
              <Link to="/sobre">A Banda</Link>
              <Link to="/contato">Contato</Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;