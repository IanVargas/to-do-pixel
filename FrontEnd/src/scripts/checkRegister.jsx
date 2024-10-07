import axios from "axios";
import { createCookie } from "./coockieManagement";

const url = 'http://localhost:5000/register'

async function registerUserOnSystem(username , email, password){
    const registerNewUser = await axios.post(url,{
        username : username,
        password : password,
        email : email,
        xp_user : 0
    });
    registerNewUser ? createCookie(registerNewUser.data.token) : console.log("error!!")
    return registerNewUser
}


export default registerUserOnSystem;