import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Books from './Pages/Books';
import Links from './Pages/Links';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/books" >
          <Books />
        </Route>
        <Route path="/links" >
          <Links />
        </Route>
        <Route component={NotFound}>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
