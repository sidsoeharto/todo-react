import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../views/LoginPage.jsx";
import RegisterPage from "../views/RegisterPage.jsx";
import HomePage from "../views/HomePage.jsx";

function Routes() {
  return (
    <header className="App-header">
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
      </Switch>
    </header>
  )
}

export default Routes;