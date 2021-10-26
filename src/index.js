import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import {Footer, GlobalStyle, PageLayout} from './components/common';

import App from './components/App';


ReactDOM.render(
  <React.StrictMode>
    <>
      <Router basename="/reading_guide">
        <GlobalStyle />
        <PageLayout />
        <App />
        <Footer />
      </Router>
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
