
// import Demo from './Demo'
import About from './components/About';
import Navbar from './components/Navbar';
import TextFrom from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  const [alert, setAlert] = useState(null);
  const [Mode, setMode] = useState('light');
  const showAlert = (message, type) => {
    setAlert({
      msg1: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About Us" mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3" >
          <Switch>
            <Route path="/about">
              <About mode={Mode}/>
            </Route>
            <Route path="/">
              <TextFrom showAlert={showAlert} heading="Try Textutils - Word Counter | Convert text-UpperCase-LowerCase" mode={Mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>

  );
}

export default App;

