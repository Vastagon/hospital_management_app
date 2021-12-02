import logo from './logo.svg';
import './App.css';
import './index.css';
import './css/bootstrap.min.css'
// import './css/fontawesome-all.min.css'
import './css/styles.css'
import { Link, Route, Routes } from 'react-router-dom';

import LandingScreen from './Screens/LandingScreen';

function App() {
  return (
    <div>
 <nav id="navbarExample" class="navbar navbar-expand-lg fixed-top navbar-light" aria-label="Main navigation">
        <div class="container">

            <a class="navbar-brand logo-image" href="index.html"><img src={logo} alt="alternative"/></a> 

            <a class="navbar-brand logo-text" href="index.html">Nubis</a>

            <button class="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                <ul class="navbar-nav ms-auto navbar-nav-scroll">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#header">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#services">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#details">Details</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#features">Features</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Drop</a>
                        <ul class="dropdown-menu" aria-labelledby="dropdown01">
                            <li><a class="dropdown-item" href="article.html">Article Details</a></li>
                            <li><div class="dropdown-divider"></div></li>
                            <li><a class="dropdown-item" href="terms.html">Terms Conditions</a></li>
                            <li><div class="dropdown-divider"></div></li>
                            <li><a class="dropdown-item" href="privacy.html">Privacy Policy</a></li>
                        </ul>
                    </li>
                </ul>
                <span class="nav-item">
                    <a class="btn-solid-sm" href="#contact">Get quote</a>
                </span>
            </div>
        </div> 
    </nav> 
    <main>
    
  <Routes>

<Route path="/" element={<LandingScreen />} exact></Route>



</Routes>
    
    </main>
    <div class="copyright bg-gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <ul class="list-unstyled li-space-lg p-small">
                        <li><a href="article.html">Article Details</a></li>
                        <li><a href="terms.html">Terms & Conditions</a></li>
                        <li><a href="privacy.html">Privacy Policy</a></li>
                    </ul>
                </div>
                <div class="col-lg-6">
                    <p class="p-small statement">Copyright © <a href="#">Your name</a></p>
                </div> 
            </div> 
        </div> 
    </div> 
    
  

    </div>
  );
}

export default App;
