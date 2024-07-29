
import banner from '../../stylesheets/images/characters.png'
import '../../stylesheets/banners.css'


function CreateCharacter(){


    return(
        <>
        <div className="banner-container has-floating-animation">
        <div>
        <img className="banner-image is-floating-animated" src={banner} alt="Logo" />
        </div> 
        <div>   
        <h1 className="banner-info-title"> Create your own character!!</h1>
        <p className="banner-info-description">Be able to create and personalize your own character!</p>
        </div>
        </div>
        </>
    )
}

export default CreateCharacter;
