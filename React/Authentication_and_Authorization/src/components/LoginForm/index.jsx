import {useState} from 'react'

import './index.css'
import { createCookie, useNavigate } from 'react-router'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginStatus, setLoginStatus] = useState(false);
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const navigate = useNavigate()
  function submitForm(event)
  {
    event.preventDefault();
    let userDetails = {username,password};
    tryLogin(userDetails)
  }

  async function tryLogin(userDetails)
  {
    const options ={
      method : "POST",
      body: JSON.stringify(userDetails)
    }
    console.log(options.body);
    const apiUrl = `https://apis.ccbp.in/login`
    /* const response = await fetch(apiUrl,options);
    const responseData = await response.json();
    console.log(responseData,response);
    if(response.ok)
    {
      setLoginStatus(true);
      onLoginSuccess(responseData.jwt_token);
    }
    else
    {
      onLoginFailure(responseData.error_msg);
    } */
    try{
      const response = await fetch(apiUrl,options);
      const responseData = await response.json();
      console.log(responseData,response);
      setLoginStatus(true);
      onLoginSuccess(responseData.jwt_token);
    }
    catch(error)
    {
      onLoginFailure(error.error_msg)
    }
  }
  function onLoginSuccess(token)
  {
    /* navigate("/", {replace:true} ) */
    console.log(token)
    loginStatus(true);
    let cookie = createCookie({loginToken: token})
    console.log(cookie);
  }

  function onLoginFailure(message)
  {
    setLoginErrorMessage(message);
    setLoginStatus(true);
    console.log(loginErrorMessage)
  }

  const onChangeUsername = event => {
    setUsername(event.target.value)
  }

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  const renderPasswordField = () => (
    <>
      <label className="input-label" htmlFor="password">
        PASSWORD
      </label>
      <input
        type="password"
        id="password"
        className="password-input-field"
        value={password}
        onChange={onChangePassword}
        placeholder="Password"
      />
    </>
  )

  const renderUsernameField = () => (
    <>
      <label className="input-label" htmlFor="username">
        USERNAME
      </label>
      <input
        type="text"
        id="username"
        className="username-input-field"
        value={username}
        onChange={onChangeUsername}
        placeholder="Username"
      />
    </>
  )
  return (
    <div className="login-form-container">
      <img
        src="https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_react_js/niat_coding_questions/nxt-trendz-logo.png"
        className="login-website-logo-mobile-img"
        alt="website logo"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
        className="login-img"
        alt="website login"
      />
      <form onSubmit={submitForm} className="form-container">
        <img
          src="https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_react_js/niat_coding_questions/nxt-trendz-logo.png"
          className="login-website-logo-desktop-img"
          alt="website logo"
        />
        <div className="input-container">{renderUsernameField()}</div>
        <div className="input-container">{renderPasswordField()} </div>
        {loginStatus && <p className='error-message'>*{loginErrorMessage}</p>}
        <button  type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm
