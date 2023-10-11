import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
const Login = (props) => { 
    const [un,setUn] = useState('');
    const [pwd,setPwd] = useState('');
    const [error,setError] = useState(false);
  

    const readusername = (event) => { 
        event.preventDefault();
       setUn(event.target.value);
       console.log(event.target.value);
    }
    const readpassword = (event) => { 
        event.preventDefault();
        setPwd(event.target.value);
        console.log(event.target.value);
    }
    const checkfilldata = (event) => { 
        event.preventDefault();
        if(un.trim ()===''|| pwd.trim() ==='') 
        {
         setError(true);
         return;   
        }
        else
        {
        //  navigate("/Home");
        props.checkLogin(un.pwd);
        }
     } 
  return (
    <div>
        <h1>SIGN IN</h1>
      <form>
        USERNAME<input type="text" onChange={readusername}/><br/><br/>
        PASSWORD<input type="password" onChange={readpassword}/><br/><br/>
        <button type="submit" onClick={checkfilldata}>Login</button>
      </form>
      {error && 'Error Occured'}
    </div>
  )
}

export default Login
