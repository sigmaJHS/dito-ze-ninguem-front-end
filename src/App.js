import { Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation'
import Footer from './components/Footer'
import FixedBackground from './components/FixedBackground'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import GalleryPage from './pages/GalleryPage'
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
      name: 'Galeria',
      path: '/galeria',
      page: GalleryPage,
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
      <Switch>
        {routes}
      </Switch>
      <Footer />
    </main>
  );
}

export default App;
