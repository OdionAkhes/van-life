import About from './pages/About';
import Home from './pages/Home';
import VansList from './pages/VansList';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import "./server";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/" className='site-logo'>#VanLife</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>

        </nav>
      </header>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<VansList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
