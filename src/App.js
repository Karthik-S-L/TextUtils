import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setmode]=useState('light')
  const [alert,setalert]=useState(null)

  const showalert=(message,type)=>{
    setalert(
      {
        msg:message,
        type:type
      }
    )
    setTimeout(()=>{
      setalert(null);
    },2500);
}

  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='black';
      showalert("Dark mode has been enabled","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showalert("Light mode has been enabled","success");
    }
  }
  
  
  return (
    <>
    <Router>
    <Navbar title="Textutils" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    {/* <div className="container" togglemode={togglemode} ></div> */}
    <div className="container" >
    <Switch>
          <Route exact path="/About">
            <About />
          </Route>
          {/* react might open file starting with same name so use keyword exact */}
          <Route exact path="/">
            <TextForm heading="Enter text to analyze" mode={mode} showalert={showalert}  />
          </Route>
    </Switch>
    {/* <About/> */}
    </div>
    </Router>
    
     
    
  

    </>
  );
}

export default App;

