import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import DescriptionCard from '../components/DescriptionCard';

export default (props) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  function onChangeEmail (e) {
    setEmail(e.target.value)
  }

  function onChangePass (e) {
    setPassword(e.target.value)
  }

  function onSubmit () {
    props.login(email, password)
  }

  return (
    <div className="container is-fluid mt-6 is-justify-content-center" id="login-form">
      <div className="columns">
        <DescriptionCard />
        <div className="column is-6 p-3">
          <div className="hero is-white is-medium">
            <form onSubmit={onSubmit}>
              <div className="field">
                <label htmlFor="login-email" className="label">Email address:</label>
                <input 
                  type="email" 
                  className="input" 
                  id="login-email" 
                  placeholder="Enter email" 
                  onChange={onChangeEmail}
                />
              </div>
              <div className="field">
                <label htmlFor="login-password" className="label">Password:</label>
                <input 
                  type="password" 
                  className="input" 
                  id="login-password" 
                  placeholder="Password"
                  onChange={onChangePass}
                />
              </div>
              <div className="control">
                <button className="button is-primary" type="submit">Log in</button>
              </div>
              <p>
                Don't have an account yet?
                <span>
                  <Link id="register-button" to="/register">Register an account</Link>
                </span>
              </p>
              <small>or sign in with</small>
              <div className="g-signin2" data-onsuccess="onSignIn"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
