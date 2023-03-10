import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from "./pages/home/Home"
import Faq from "./pages/faq/Faq"
import Contact from './pages/contact/Contact';
// Components
import Navbar from "./components/Navbar"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/faq" element={<Faq />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
