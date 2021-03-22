import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import dashboardContextProvider from "./context/dashboardContext";
import "antd/dist/antd.css";

import Page from "./pages/Pages";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <dashboardContextProvider>
            <Page />
          </dashboardContextProvider>
        </Route>
        <Route exact path="/Login">
          <h1>Login</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
