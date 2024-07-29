
import '../stylesheets/pixelbuttons.css'
function Login()
{
    return( 
        <>
         <form >
            <div>
            <label>Username</label>
            <div className="button-container">
      <div className="corner corner-top-left"></div>
      <div className="corner corner-top-right"></div>
      <div className="corner corner-bottom-left"></div>
      <div className="corner corner-bottom-right"></div>
      <div className="border border-top"></div>
      <div className="border border-bottom"></div>
      <div className="border border-left"></div>
      <div className="border border-right"></div>
      <input className='input-pixel' />
    </div>
            </div>
            <div>
            <label>Password</label>
            <input type="text" placeholder="Please Input your Password"/>
            
            </div>
         </form>
        </>
        
    )
}

export  default Login;