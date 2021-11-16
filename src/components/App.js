import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Books from "./Pages/Books";
import Links from "./Pages/Links";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/books' element={<Books />} />
        <Route path='/links' element={<Links />} />
        <Route path='/' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
