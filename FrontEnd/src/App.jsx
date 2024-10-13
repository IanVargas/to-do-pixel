import "./stylesheets/App.css";
import Home from "./components/Home";
import About from "./components/About";
import Headers from "./components/Headers";
import { getCoockie } from "./scripts/coockieManagement";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

function App() {
  // const [count, setCount] = useState(0)

  const redirect = useNavigate() 
  const coockie = getCoockie()

  useEffect(()=>{
    if(coockie){
      redirect('/main')
    }
  },[coockie]);
  
  return(
    <>
      <Headers />
      <Home />
      <About />
    </>
  );
  
}

export default App;
