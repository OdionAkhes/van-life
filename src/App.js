import About from './About';
import Home from './Home';
import './App.css';
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/" className='site-logo'>#VanLife</Link>
        <nav>
          <Link to="/about">About</Link>

        </nav>
      </header>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
