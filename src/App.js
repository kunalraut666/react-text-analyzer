import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Navbar from "./components/Navebar";
import About from "./components/About";
import {ToastContainer} from 'react-toastify'
import Footer from "./components/Footer";

function App() {
 
  const [mode, setMode] = useState('light');
  const [bodyColor , setbodyColor] = useState('rgb(248 249 250)');
  document.body.style.backgroundColor = bodyColor;
  const toggleMode = () => {
    if (mode === 'light' || mode === 'green' || mode === 'blue' || mode === 'red'){
      setMode( 'dark' );
      setbodyColor("rgb(32 37 41)");
      document.body.style.backgroundColor = bodyColor;
    } else {
      setMode( 'light' );
      setbodyColor("rgb(248 249 250)");
      document.body.style.backgroundColor = bodyColor;
    }
  };

  const handleGreenTheme = () => {
    setMode('green');
    setbodyColor('green');
    document.body.style.backgroundColor = bodyColor;
  }

  const handleBlueTheme = () => {
    setMode('blue');
    setbodyColor('blue');
    document.body.style.backgroundColor = bodyColor;
  }

  const handleRedTheme = () => {
    setMode('red');
    setbodyColor('red');
    document.body.style.backgroundColor = bodyColor;
  }
    

  return (
    <>
    <ToastContainer />
      <BrowserRouter>
        <Navbar
          title={"WordWorks"}
          about="About"
          mode={mode}
          toggleMode={toggleMode}
          greenMode={handleGreenTheme}
          blueMode={handleBlueTheme}
          redMode = {handleRedTheme}
        />
          
          <Routes>
            <Route
              path="/"
              element={<Home title={"Enter Your Text"} mode={mode} />}
            />
            <Route path="/about" element={<About mode={mode}/>} />
          </Routes>
          
      </BrowserRouter>
      <Footer 
        mode={mode}
      />
    </>
  );
}

export default App;
