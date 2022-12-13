import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from './../assets/logo.png';

import style from './Navigation.module.scss';

function Navigation()
{
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
          <Nav className={'me-auto ' + style['navigation-nav']} activeKey="/">
            <Link to="/" className={style['nav-item']}>Home</Link>
            <Link to="/sobre" className={style['nav-item']}>A Banda</Link>
            <Link to="/contato" className={style['nav-item']}>Contato</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;