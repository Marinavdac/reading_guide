import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Books from "./Pages/Books";
import Links from "./Pages/Links";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}>
          <Home />
        </Route>
        <Route path="/about" component={About}>
          <About />
        </Route>
        <Route path="/books" component={Books}>
          <Books />
        </Route>
        <Route path="/links" component={Links}>
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
