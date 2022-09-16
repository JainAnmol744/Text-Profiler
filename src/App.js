import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';
import { useState } from 'react';
import Alert from './Components/Alert';
// import About from './Components/About';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState(false);
  // const [alert, setalert]=useState(null);

  

  return (
    <>
    
<Navbar title= "TextUtils 2"/>
<Alert alert ="This is a alert"/>


  <div className = "container" my-3>
      <TextArea heading= "Enter the text"/>
{/*<About /> */}
  
  </div>
    </>
  );
}

export default App;
