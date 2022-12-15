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

  return (
    <main>
      <FixedBackground />
      <Navigation routes={navigableRoutes} />
      <Container>
        <Switch>
          {
            navigableRoutes.map(
              function(current){
                return (
                  <Route path={current.path} exact={current.exact}>
                    <current.page />
                  </Route>
                )
              }
            )
          }
          <Route path='/' exact={true}>
            <HomePage />
          </Route>
          <Route path='/sobre'>
            <AboutPage />
          </Route>
          <Route path='/contato'>
            <ContactPage />
          </Route>
        </Switch>
      </Container>
    </main>
  );
}

export default App;
