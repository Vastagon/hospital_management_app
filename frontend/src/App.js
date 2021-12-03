import './App.css';
import './index.css';
import './css/bootstrap.min.css'
// import './css/fontawesome-all.min.css'
import './css/styles.css'
import { Link, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

import LandingScreen from './Screens/LandingScreen';

function App() {
  return (
    <div>
        <main>
            <Navbar />
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
