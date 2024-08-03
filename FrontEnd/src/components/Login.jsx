import "../stylesheets/login.css";
import PixelContainer from "./PixelContainer";
function Login() {
  return (
    <>
      <form className="login-container">
        <div>
          <label>Username</label>
        </div>
        <div>
          <PixelContainer>
            <input className="input-pixel" />
          </PixelContainer>
        </div>
        <div>
          <label>Password</label>
        </div>
        <div>
          <PixelContainer>
            <input type="password" className="input-pixel" />
          </PixelContainer>
        </div>
        <PixelContainer>
          <button className="input-pixel login-button"> Login </button>
        </PixelContainer>
      </form>
    </>
  );
}

export default Login;
