import '../stylesheets/header.css';
//import {HashLink as Link}  from 'react-Linkr-hash-Link'
import { Link } from "react-router-dom";
import  { useState, useEffect } from "react";

const HeaderSize = ((widthSize) => {
    if(widthSize['widthSize'] > 600){
        return( 
         <div className='menu-box'>
         <div>    
         <Link  to='/' className='menu-item'> Home </Link>
         <Link  to='#About' className='menu-item'  > About </Link>
         <Link to='#Contact-us' className='menu-item' > Contact-us </Link>
         </div>
         <div>
         <Link to='/Login' className='button menu-item' > Login </Link>
         
         </div>
         </div> 
        ) 
     }else{
         return( 
             <div className='menu-box'>
             <Link  to='/' className='menu-item'> Home </Link>
             <Link  to='#About' className='menu-item'  > About </Link>
             <Link to='#Contact-us' className='menu-item' > Contact-us </Link>
             <Link to='/Login' className='button menu-item' > Login </Link>
             </div>
            ) 
     }
})
   

function Header()
{
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize",handleResize);
        return () => window.removeEventListener("resize",handleResize)
},[]);

    return( 
        <>
            < HeaderSize widthSize={width} />
        </>
        
    )
}

export  default Header;