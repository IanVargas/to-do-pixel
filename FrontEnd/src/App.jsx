import "./stylesheets/App.css";
import Home from "./components/Home";
import ContactUs from "./components/Contact";
import About from "./components/About";
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
