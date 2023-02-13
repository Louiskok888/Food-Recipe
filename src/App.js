import React, { useEffect, useState } from 'react'; 
import Home from './Home';
import { Link, BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Favorite from './Favorite';
import About from './About'; 
import imgLogo from'./image/recipe7.png'



function App() {

  return (
    <BrowserRouter>
    <nav className="navbar navbar-expand-lg navbar-dark navbar-survival101">
    
  <div className="container">
    <div className="logo">
      <img src={imgLogo} />
      <div className='logo_name d-flex justify-content-center'>
       <h1 >Recipes</h1>
      </div>
    </div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/Favorite" className="nav-link" href="#">Favorite</Link>
        </li>
        <li className="nav-item">
          <Link to="/About" className="nav-link" href="#">About<i className="ion-ios-arrow-down"></i></Link>
        </li>
      </ul>
    </div>
  </div>
  </nav>
  <div className="home d-flex justify-content-start" >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Favorite" element={< Favorite />} />
      <Route path="/About" element={<About />} />
    </Routes>
  </div>  
</BrowserRouter>

)
}

  export default App;