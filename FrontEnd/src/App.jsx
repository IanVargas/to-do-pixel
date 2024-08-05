import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./stylesheets/App.css";
//import Header from "./components/Header";
import Home from "./components/Home";
import ContactUs from "./components/Contact";
import About from "./components/About";
//import MobileHeader from "./components/MobileHeader";
import Headers from "./components/Headers";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Headers />
      <Home />
      <About />
      <ContactUs />
    </>
  );
}

export default App;
