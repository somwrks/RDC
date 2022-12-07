import React from "react";

const Booking = () => {
  return (
    <div className="flex justify-center mt-5 ">
      <div>
        <div>
          <p className="text-4xl text-black/70">
            Search Doctor, Book Appointment
          </p>
        </div>
        <div className="mt-5 gap-10 max-w-7xl mx-auto flex items-center border-b py-5 border-b-black/50">
          {/* fiuirst */}
          <div className="">
            <p className="py-2 font-semibold">Name</p>
            <input
              placeholder="Patient Name"
              className="outline-none  border border-black/60 px-5 py-2"
            />
          </div>
          <div className="">
            <p className="py-2 font-semibold">Email</p>
            <input
              placeholder="Patient Email"
              className="outline-none  border border-black/60 px-5 py-2"
            />
          </div>
          <div className="bg-orange-500 px-5 py-1 text-white mt-8 ">
            <p className="py-2 ">SUBMIT</p>
          </div>
        </div>
        <div className="flex justify-between py-5 ">
          <div>
            <div>
              <p>Search</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
