import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NavbarSearch from './components/NavbarSearch';
import About from './components/About';
import Services from './components/Services';

function App() {
  return (
    <>
    <NavbarSearch/>
    <Navbar/>
    <Home/>
    <About/>
    <Services/>
    
    </>
  );
}

export default App;
