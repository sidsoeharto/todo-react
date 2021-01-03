import React from 'react'
import { Link } from 'react-router-dom';
import DescriptionCard from '../components/DescriptionCard';

export default (props) => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  function onChangeName (e) {
    setName(e.target.value)
  }

  function onChangeEmail (e) {
    setEmail(e.target.value)
  }

  function onChangePass (e) {
    setPassword(e.target.value)
  }

  function onSubmit () {
    props.register(name, email, password)
  }

  return (
    <div className="container is-fluid mt-6 is-justify-content-center" id="login-form">
      <div className="columns">
        <DescriptionCard />
        <div className="column is-6 p-3">
          <div className="hero is-white is-medium" id="register-form">
            <h1 className="is-size-1 has-text-black-ter"> Register an Account </h1>
            <form onSubmit={onSubmit}>
              <div className="field">
                <label for="register-name" className="label">Name:</label>
                <input 
                  type="text" 
                  className="input" 
                  id="register-name" 
                  placeholder="Enter your name" 
                  onChange={onChangeName}
                />
              </div>
              <div className="field">
                <label for="register-email" className="label">Email address:</label>
                <input 
                  type="email" 
                  className="input" 
                  id="register-email" 
                  placeholder="Enter email"
                  onChange={onChangeEmail}
                />
              </div>
              <div className="field">
                <label for="register-password" className="label">Password</label>
                <input 
                  type="password" 
                  className="input" 
                  id="register-password" 
                  placeholder="Password"
                  onChange={onChangePass}
                />
              </div>
              <p>Already have an account?<span><Link to="/">Login</Link></span></p>
              <button className="button is-primary" type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
