import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import LargeCard from "./components/LargeCard";
import Doctor from "./Doctor";
import Main from "./Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="doctor" element={<Doctor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
