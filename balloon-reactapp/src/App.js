import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Events from './components/Events';
import Balloon from './components/Balloon';
import Flower from './components/Flower';
import GrabAndGo from './components/GrabAndGo';

function App() {
  return (
    <Router>
    <div className="App">
     <NavbarComp/>
        <Routes>
            <Route path = "/" element = {<Home/>} />
            <Route path = "/events" element = {<Events/>} />
            <Route path = "/balloon" element = {<Balloon/>} />
            <Route path = "/flower" element = {<Flower/>} />
            <Route path = "/grabAndGo" element = {<GrabAndGo/>}/>
        </Routes>
    </div>
     <Footer/>
 
    </Router>
  );
}

export default App;
