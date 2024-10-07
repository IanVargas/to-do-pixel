import axios from "axios";
import {createCookie} from './coockieManagement.jsx'

const url = 'http://localhost:5000/login'

async function checkLoginUser(username,password){
    const checkLogin = await axios.post(url,{
        email : username,
        password : password
    })
    console.log(checkLogin.data.token)
    checkLogin.data.token? createCookie(checkLogin.data.token) : false
    return checkLogin
}



export default checkLoginUser;