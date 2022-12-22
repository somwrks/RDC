import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  const loadcontent = props.load;
  
  return (
    <div className="flex justify-between p-10">
      {/* Logo */}
      <div>
        <p className="text-sky-900 font-bold ">
          <Link to="/" onClick={loadcontent}>RDC - Hospital</Link>
        </p>
      </div>
      {/* Right  */}
      <div className="flex gap-10">
        <p id="home" className="active">
      <Link to="/" onClick={loadcontent} >Home</Link>  
        </p>
        <p id="about" >
          <Link to="/about" onClick={loadcontent}>About</Link>
        </p>
        <p id="contact" >
       <Link to="/contact" onClick={loadcontent}>Contact Us</Link> </p>
        <div className="bg-[#0e21fe] shadow-lg shadow-blue-700/60 px-5 rounded-full text-white py-2">
          <p id="book"><Link onClick={loadcontent} to="/book">Book Now</Link> </p>
        </div>
      </div>
    </div>
  );
};

export default Header;