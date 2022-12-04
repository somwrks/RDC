import React from "react";

const Header = () => {
  const active =
    "text-black font-medium text-black border-b-2 border-b-[#073fe5] text-uppercase";
  const passive = "text-black   ";
  return (
    <div className="flex justify-between p-10">
      {/* Logo */}
      <div>
        <p className="text-sky-900 font-bold ">RDC - Hospital</p>
      </div>
      {/* Right  */}
      <div className="flex gap-10">
        <p className={active}>Home</p>
        <p className={passive}>Doctor</p>
        <p className={passive}>Services</p>
        <div className="bg-[#0e21fe] shadow-lg shadow-blue-700/60 px-5 rounded-full text-white py-2">
          <p>Book Now</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
