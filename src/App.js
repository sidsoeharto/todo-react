import React from 'react';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import axios from './axios';
import GuardRoute from './routes/GuardRoute'
import LoginPage from "./views/LoginPage.jsx";
import RegisterPage from "./views/RegisterPage.jsx";
import HomePage from "./views/HomePage.jsx";
import AddPage from "./views/AddPage.jsx";
import EditPage from "./views/EditPage.jsx"

function App () {
  const [isAuth, setAuth] = React.useState(false)
  const [emailLogin, setEmail] = React.useState('')
  const [passwordLogin, setPassword] = React.useState('')

  function login (email, password) {
    setEmail(email)
    setPassword(password)
    setAuth(true)
  }

  function logout () {
    setEmail('')
    setPassword('')
    setAuth(false)
    localStorage.clear()
  }

  function loginAPI () {
    const payload = {
      email: emailLogin,
      password: passwordLogin
    }

    axios({
      url: '/login',
      method: 'POST',
      data: payload
    })
      .then((response) => {
        console.log(response.data)
        localStorage.setItem('access_token', response.data.access_token)
        setAuth(true)
      })
      .catch((err) => {
        console.log(err.response.data)
        setAuth(false)
      })
  }

  React.useEffect(() => {
    loginAPI()
  }, [login])

  return (
    <div className="App">
      <Router>
        {isAuth ? <Redirect to="/home" /> : <Redirect to="/" />}
        <Navbar 
          logout={logout}
        />
        <Switch>
          <GuardRoute path="/" exact component={() => <LoginPage login={login} />} auth={!isAuth}>
          </GuardRoute>
          <GuardRoute path="/register" component={RegisterPage} auth={!isAuth}>
          </GuardRoute>
          <GuardRoute path="/home" component={() => <HomePage />} auth={isAuth}>
          </GuardRoute>
          <GuardRoute path="/add" component={() => <AddPage />} auth={isAuth}>
          </GuardRoute>
          <GuardRoute path="/edit/:id" component={() => <EditPage />} auth={isAuth}>
          </GuardRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
