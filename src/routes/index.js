import React from "react";
import { Switch, Route } from "react-router";
import LoginPage from "../views/LoginPage.jsx"

function Routes() {
  return (
    <header className="App-header">
      <Switch>
        <Route path="/">
          <LoginPage />
        </Route>
      </Switch>
    </header>
  )
}

export default Routes;