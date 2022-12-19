import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const active =
    "text-black font-medium text-black border-b-2 border-b-[#073fe5] text-uppercase";
  const passive = "text-black";
  return (
    <div className="flex justify-between p-10">
      {/* Logo */}
      <div>
        <p className="text-sky-900 font-bold ">
          <Link to="/">RDC - Hospital</Link>
        </p>
      </div>
      {/* Right  */}
      <div className="flex gap-10">
        <p id="home" className={active}>
      <Link to="/" >Home</Link>  
        </p>
        <p id="about" className={passive}>
          <Link to="/about">About</Link>
        </p>
        <p id="contact" className={passive}>
       <Link to="/contact">Contact Us</Link> </p>
        <div className="bg-[#0e21fe] shadow-lg shadow-blue-700/60 px-5 rounded-full text-white py-2">
          <p id="book"><Link to="/book">Book Now</Link> </p>
        </div>
      </div>
    </div>
  );
};

export default Header;