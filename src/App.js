import { Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation'
import FixedBackground from './components/FixedBackground'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <main>
      <FixedBackground />
      <Navigation />
      <Switch>
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
    </main>
  );
}

export default App;
