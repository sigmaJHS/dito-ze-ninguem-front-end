import { Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation'
import FixedBackground from './components/FixedBackground'

import Container from 'react-bootstrap/Container';

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function App() {

  const navigableRoutes = [
    {
      name: 'Home',
      path: '/',
      page: HomePage,
      exact: true
    },
    {
      name: 'A Banda',
      path: '/sobre',
      page: AboutPage,
      exact: false
    },
    {
      name: 'Contato',
      path: '/contato',
      page: ContactPage,
      exact: false
    }
  ]

  const routes = [];
  for(let [k,v] of navigableRoutes.entries()){
    routes.push(
      <Route key={k} path={v.path} exact={v.exact}>
        <v.page />
      </Route>
    );
  }

  return (
    <main>
      <FixedBackground />
      <Navigation routes={navigableRoutes} />
      <Container>
        <Switch>
          {routes}
        </Switch>
      </Container>
    </main>
  );
}

export default App;
