import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./About";
import Main from "./Main";
import Booking from "./Book";
import Footer from "./components/Footer";
import Contact from "./Contact";
import Header from "./components/Header";
import ProgressBar from "@badrap/bar-of-progress";


function App() {
  const loadcontent=()=>{
    const progress = new ProgressBar();
    progress.start();
    setTimeout(() => {
      progress.finish();
    }, 300);
    
    
  };
  return (
    <>

    <div className="max-w-7xl  mx-auto">
    <BrowserRouter>
      <Header load={loadcontent}/>
      <Routes>
        <Route path="/" element={<Main load={loadcontent}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/book" element={<Booking />} />
      </Routes>
    </BrowserRouter>
</div>
      <Footer/>
    </>
  );
}

export default App;