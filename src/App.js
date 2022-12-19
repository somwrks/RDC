import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./About";
import Main from "./Main";
import Booking from "./Book";
import Footer from "./components/Footer";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/book" element={<Booking />} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;