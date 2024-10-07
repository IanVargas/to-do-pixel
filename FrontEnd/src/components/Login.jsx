import { useState } from "react";
import "../stylesheets/login.css";
import { useNavigate } from 'react-router-dom';
import PixelContainer from "./PixelContainer";
import checkLoginUser from '../scripts/loginCheck.jsx' 

function Login() {
  const [username, setUsername] = useState(' ');
  const [password, setPassword] = useState('');
  const redirect = useNavigate();

  async function checkLogin(e){
    e.preventDefault();
   //cd console.log(username,password)
    const logginSucces = await checkLoginUser(username,password);
    logginSucces ? redirect('/main') : console.log("unsuccessfull login")
    
  }

  return (
    <>
      <form  className="Login-container" onSubmit={checkLogin}>
        <div>
          <label>Username</label>
        </div>
        <div>
          <PixelContainer>
            <input
            value={username}
            type="email"
            onChange={e => setUsername(e.target.value)}
            className="input-pixel" 
            />
          </PixelContainer>
        </div>
        <div>
          <label>Password</label>
        </div>
        <div>
          <PixelContainer>
            <input 
            value={password} 
            onChange={e => setPassword(e.target.value)}
            type="password" 
            required
            className="input-pixel" 
            />
          </PixelContainer>
        </div>
        <PixelContainer>
          <button type="submit" className="input-pixel Login-button"> Login </button>
        </PixelContainer>
      </form>
    </>
  );
}

export default Login;
