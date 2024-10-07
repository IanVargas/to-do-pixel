import Typewriter from "typewriter-effect";


function LoadingPage(){

    return(
        <>
        <Typewriter
            options={{ cursor: "", loop: true, autoStart: true }}
            onInit={(typewriter) => {
              typewriter
                .typeString("<h1> Loading... </h1>")
                .start()
                .pauseFor(100);
            }}
          />
        </>
    )
}

export default LoadingPage;