import { useState } from "react";
import "./App.css";
import Welcome from "./components/Welcome";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function toggleAuth()
  {
    if(isLoggedIn)
    {
      logout();
    }
    else{
      login();
    }
  }
  function login()
  {
    setIsLoggedIn(true)
  }
  function logout()
  {
    setIsLoggedIn(false);
  }

  // using If-else Statemet

  /* function renderAuthButton() 
  {
    if(isLoggedIn) 
    {
      return <button  onClick={toggleAuth}>Login</button>
    }
    return <button  onClick={toggleAuth}>Logout</button>
  } */

  // using Element Variable
  
  /* let authButton;
  if(isLoggedIn) authButton = <button onClick={toggleAuth}>Logout</button>

  else authButton = <button onClick={toggleAuth}>Login</button> */

  

  return (
    <div className="container">
      <Welcome greeting = "Hello" name="User"/>
      {/* {renderAuthButton()} */}
      {/* {authButton} */}
      {/* using Ternary Operators*/ /* isLoggedIn?<button onClick={toggleAuth}>Logout</button>: <button onClick={toggleAuth}>Login</button>*/}
      { /* using Logical and(&&) operator */ isLoggedIn && <button onClick={toggleAuth}>Logout</button>}
      {!isLoggedIn && <button onClick={toggleAuth}>Login</button>}
    </div>
  );
};

export default App;
