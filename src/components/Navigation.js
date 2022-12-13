import { Link, useLocation } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from './../assets/logo.png';

import style from './Navigation.module.scss';

function Navigation()
{
  const location = useLocation();

  return (
    <Navbar id={style['navigation']} expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img className={style.brand} alt="Dito Zé Ninguém" src={logo} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle id={style['nav-toggle']} aria-controls="nav" />
        <Navbar.Collapse id="nav">
          <Nav className={'me-auto ' + style['navigation-nav']} activeKey={location.pathname}>
            <Link to="/" className={style['nav-item']}>
              <Nav.Link as="div" eventKey="/">Home</Nav.Link>
            </Link>
            <Link to="/sobre" className={style['nav-item']}>
              <Nav.Link as="div" eventKey="/sobre">A Banda</Nav.Link>
            </Link>
            <Link to="/contato" className={style['nav-item']}>
              <Nav.Link as="div" eventKey="/contato">Contato</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;