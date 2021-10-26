import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { PageLayout, Footer } from "./components/common";
import { GlobalStyle } from "components/common/style";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <>
      <Router basename="/reading_guide">
        <GlobalStyle />
        <PageLayout>
          <App />
        </PageLayout>
        <Footer />
      </Router>
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
