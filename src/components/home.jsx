
import homeimage from '../stylesheets/images/tittle.png'
import '../stylesheets/home.css'
import Typewriter from 'typewriter-effect';

function Home(){



    return(
        <>
        <div className='home-container'>
       
            <img className='image-top' src={homeimage} />
      
        <div className='text-top'>
            <Typewriter 
            options={{cursor:'',loop:true,autoStart:true}} 
                onInit={(typewriter) => {
                typewriter.typeString('<h1> Welcome to your new Adventure!! </h1>')
                   .start()
                   .pauseFor(200)
              }
            }
            />
        </div>
        </div>
        </>
    );
}



export default Home;