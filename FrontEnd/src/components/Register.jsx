import { useCallback, useEffect, useState } from "react";
import "../stylesheets/login.css";
import { useNavigate } from 'react-router-dom';
import PixelContainer from "./PixelContainer";
import registerUserOnSystem from "../scripts/checkRegister";



function Register(){
    const [email, setEmail] = useState(' ');
    const [emailConfirmation, setEmailConfirmation] = useState(' ');
    const [emailMatch,setEmailMatch] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(false);
    const [username, setUsername] = useState('');
    const redirect = useNavigate();


    async function registerUser(e){
        e.preventDefault();
        const registerNewUser = await registerUserOnSystem(username,email,password)
        registerNewUser? redirect('/main') : null   
    }

    useEffect(() => {
        setPasswordsMatch(password === passwordConfirmation && passwordConfirmation!="");
        setEmailMatch(email === emailConfirmation && email!=" ");
    }, [password, passwordConfirmation,email,emailConfirmation]);

    return(
        <>
            <form onSubmit={registerUser}>
                <div>
                    <label>Username:</label>
                    <PixelContainer>
                        <input
                            value={username}
                            type="text"
                            id="username"
                            placeholder="username"
                            onChange={e => setUsername(e.target.value)}
                        />
                    </PixelContainer>
                </div>
                <div>
                    <label>Email:</label>
                    <PixelContainer>
                        <input
                            value={email}
                            type="email"
                            id="registeremail"
                            placeholder="Insert your email"
                            onChange={e => setEmail(e.target.value)}
                        />
                    </PixelContainer>
                    <label>Email Confirmation:</label>
                    <PixelContainer>
                        <input
                            value={emailConfirmation}
                            type="email"
                            id="registeremailconfirmation"
                            placeholder="Confirm your Email"
                            onChange={e => setEmailConfirmation(e.target.value)}
                        />
                    </PixelContainer>
                </div>
                <div>
                    <label>Password:</label>
                    <PixelContainer>
                        <input 
                            value={password}
                            type='password'
                            onChange={e => setPassword(e.target.value)}
                            id="passwordregister"
                            placeholder="Password"
                        />
                    </PixelContainer>
                    <label>Password Confirmation:</label>
                    <PixelContainer>
                        <input 
                            value={passwordConfirmation}
                            type='password'
                            onChange={e => setPasswordConfirmation(e.target.value)}
                            id="passwordregistervalidation"
                            placeholder="Confirm Password"
                        />
                    </PixelContainer>
                </div>
                <PixelContainer>
                    <button disabled={!(emailMatch && passwordsMatch) }> Register </button>
                </PixelContainer>
            </form>
        </>
    );

}


export default Register;