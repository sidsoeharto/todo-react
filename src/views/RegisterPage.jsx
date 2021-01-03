import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import DescriptionCard from '../components/DescriptionCard';
import axios from '../axios'

export default (props) => {
  let history = useHistory()

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

  function register () {
    const payload = {
      name,
      email,
      password
    }

    axios({
      url: '/register',
      method: 'POST',
      data: payload
    })
      .then((response) => {
        console.log(response.data)
        history.push("/")
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }

  return (
    <div className="container is-fluid mt-6 is-justify-content-center" id="login-form">
      <div className="columns">
        <DescriptionCard />
        <div className="column is-6 p-3">
          <div className="hero is-white is-medium" id="register-form">
            <h1 className="is-size-1 has-text-black-ter"> Register an Account </h1>
            <form onSubmit={register}>
              <div className="field">
                <label htmlFor="register-name" className="label">Name:</label>
                <input 
                  type="text" 
                  className="input" 
                  id="register-name" 
                  placeholder="Enter your name" 
                  onChange={onChangeName}
                />
              </div>
              <div className="field">
                <label htmlFor="register-email" className="label">Email address:</label>
                <input 
                  type="email" 
                  className="input" 
                  id="register-email" 
                  placeholder="Enter email"
                  onChange={onChangeEmail}
                />
              </div>
              <div className="field">
                <label htmlFor="register-password" className="label">Password</label>
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
