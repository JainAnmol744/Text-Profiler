import React, { useState } from 'react'


export default function Navbar(props) {
  

  const[mystyle, setMystyle]  = useState({
    color: 'black',
    backgroundColor: 'white'
  })

  const [btntext, setBtnText] = useState("Enable Dark Mode")
  
  const toggleStyle = ()=>{
    if(mystyle.color === 'black'){
       setMystyle({
        color: 'White',
        backgroundColor: 'black'
       })
       setBtnText("Enable Light Mode")
    }
      else{
        setMystyle({
          color: 'black',
          backgroundColor: 'white'
        })
        setBtnText("Enable Dark Mode")
      }
    }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
  <a className="navbar-brand" href="#">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form className="form-inline my-2  mx-2 my-lg-0" >
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-primary" type="submit">Search</button>
    </form>
    <div className="form-check form-switch mx-2 text-light">
          <input className="form-check-input" onClick = {toggleStyle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{btntext}</label>
      </div>
  </div>
</nav>
  )
}
