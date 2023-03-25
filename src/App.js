import About from './pages/About';
import Home from './pages/Home';
import VansList from './pages/VansList';
import Layout from './Components.js/Layout';
import VanDetail from './pages/VanDetail';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./server";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<VansList />} />
          <Route path="/vans/:id" element={<VanDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
