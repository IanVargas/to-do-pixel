
import banner from '../../stylesheets/images/boost.png'
import '../../stylesheets/banners.css'




function Boost(){


    return(
        <>
        <div className="banner-container has-floating-animation">
        <div>
        <img className="banner-image is-floating-animated" src={banner} alt="Logo" />
        </div> 
        <div>   
        <h1 className="banner-info-title"> Boost Your Productivity!! </h1>
        <p className="banner-info-description">With this app you will be able to boost your productivity 200%</p>
        </div>
        </div>
        </>
    )
}



export default Boost;