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
import Event from './components/Events';
import ContactUs from './components/contactUs';
import Flower from './components/Flower';
import GrabAndGo from './components/GrabAndGo';
import Products from './components/Products'

function App() {
  return (
    <Router>
    <div className="App">
     <NavbarComp/>
        <Routes>
            <Route path = "/" element = {<Home/>} />
            <Route path = "/event" element = {<Event/>} />
            <Route path = "/flower" element = {<Flower/>} />
            <Route path = "/grabAndGo" element = {<GrabAndGo/>}/>
            <Route path = "/contactUs" element = {<ContactUs/>} />
            <Route path = "/products/:id" element = {<Products/>} />

        </Routes>
    </div>
     <Footer/>
 
    </Router>
  );
}

export default App;
