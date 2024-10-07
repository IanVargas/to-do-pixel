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
                    <input
                        value={username}
                        type="text"
                        id="username"
                        placeholder="username"
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        value={email}
                        type="email"
                        id="registeremail"
                        placeholder="Insert your email"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label>Email Confirmation:</label>
                    <input
                        value={emailConfirmation}
                        type="email"
                        id="registeremailconfirmation"
                        placeholder="Confirm your Email"
                        onChange={e => setEmailConfirmation(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        value={password}
                        type='password'
                        onChange={e => setPassword(e.target.value)}
                        id="passwordregister"
                        placeholder="Password"
                    />
                    <label>Password Confirmation:</label>
                    <input 
                        value={passwordConfirmation}
                        type='password'
                        onChange={e => setPasswordConfirmation(e.target.value)}
                        id="passwordregistervalidation"
                        placeholder="Confirm Password"
                    />
                </div>
                <button disabled={!(emailMatch && passwordsMatch) }> Register </button>
            </form>
        </>
    );

}


export default Register;