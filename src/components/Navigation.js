import { Link, useLocation } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from './../assets/logo.png';

import style from './Navigation.module.scss';

function Navigation(props)
{
  const location = useLocation();

  const links = [];
  for(let [k,v] of props.routes.entries()){
    links.push(
      <Link key={k} to={v.path} className={style['nav-item']}>
        <Nav.Link as="div" eventKey={v.path}>{v.name}</Nav.Link>
      </Link>
    );
  }

  return (
    <Navbar id={style['navigation']} collapseOnSelect={true} expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as="div">
          <Link to="/">
            <img className={style.brand} alt="Dito Zé Ninguém" src={logo} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle id={style['nav-toggle']} aria-controls="nav" />
        <Navbar.Collapse id="nav">
          <Nav className={'me-auto ' + style['navigation-nav']} activeKey={location.pathname}>
            {links}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;