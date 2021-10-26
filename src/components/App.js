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
        <Route exact path="reading_guide/">
          <Home />
        </Route>
        <Route path="reading_guide/about">
          <About />
        </Route>
        <Route path="reading_guide/books">
          <Books />
        </Route>
        <Route path="reading_guide/links">
          <Links />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
