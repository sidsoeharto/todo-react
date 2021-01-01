import React from 'react';
import { Link } from 'react-router-dom';
import DescriptionCard from '../components/DescriptionCard';

export default () => {
  return (
    <div className="container is-fluid mt-6 is-justify-content-center" id="login-form">
      <div className="columns">
        <DescriptionCard />
        <div className="column is-6 p-3">
          <div className="hero is-white is-medium">
            <form onSubmit="">
              <div className="field">
                <label for="login-email" className="label">Email address:</label>
                <input 
                  type="email" 
                  className="input" 
                  id="login-email" 
                  placeholder="Enter email" 
                />
              </div>
              <div class="field">
                <label for="login-password" className="label">Password:</label>
                <input 
                  type="password" 
                  className="input" 
                  id="login-password" 
                  placeholder="Password" 
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
