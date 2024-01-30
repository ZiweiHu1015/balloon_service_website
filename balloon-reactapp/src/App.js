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
import Products from './components/Products';
import Login from './components/Login';
import Analytics from './utils/Analytics';


function App() {
  return (
    <Router>
    <Analytics trackingId="G-K3K9Z240CV" /> {/* Use the Analytics component here */}
    <div className="App flex flex-col min-h-screen">
      <NavbarComp/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/event" element={<Event/>} />
          <Route path="/flower" element={<Flower/>} />
          <Route path="/grabAndGo" element={<GrabAndGo/>}/>
          <Route path="/contactUs" element={<ContactUs/>} />
          <Route path="/products/:id" element={<Products/>} />
          <Route path="/Login" element={<Login/>} />
      </Routes>
    </div>
    <Footer/>
  </Router>
  );
}

export default App;
