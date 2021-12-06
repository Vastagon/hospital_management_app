import './App.css';
import './index.css';
import './css/bootstrap.min.css'
// import './css/fontawesome-all.min.css'
import './css/styles.css'
import { Link, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'

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
        <Footer />
    </div>
  );
}

export default App;
