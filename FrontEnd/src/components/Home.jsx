import Homeimage from "../stylesheets/images/tittle.png";
import responsiveImage from "../stylesheets/images/title-responsive.png";
import "../stylesheets/home.css";
import Typewriter from "typewriter-effect";
import { useState, useEffect } from "react";

const ImageSize = (widthSize) => {
  if (widthSize["widthSize"] > 600) {
    return <img className="image-top" src={Homeimage} />;
  } else {
    return <img className="image-top" src={responsiveImage} />;
  }
};

function Home() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className="Home-container">
        <ImageSize widthSize={width} />

        <div className="text-top">
          <Typewriter
            options={{ cursor: "", loop: true, autoStart: true }}
            onInit={(typewriter) => {
              typewriter
                .typeString("<h1> Welcome to your new Adventure!! </h1>")
                .start()
                .pauseFor(200);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
