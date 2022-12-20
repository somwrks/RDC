import React from "react";

const Hours = () => {
  return (
    <div className="px-10 py-10 max-w-2xl mx-auto">
      <p className="text-2xl font-semibold pb-5">Our Hours of Operation</p>
      <div className="space-y-10 px-5">
        <div className="border-b flex justify-between">
          <p className="text-lg">
            {" "}
            <span className="bg-blue-700 text-xs px-2 mr-3 rounded-full"></span>
            Monday
          </p>
          <p className="text-lg">08:00 AM - 17:00 PM</p>
        </div>
        <div className="border-b flex justify-between">
          <p className="text-lg">
            {" "}
            <span className="bg-blue-700 text-xs px-2 mr-3 rounded-full"></span>
            Tuesday
          </p>
          <p className="text-lg">08:00 AM - 17:00 PM</p>
        </div>
        <div className="border-b flex justify-between">
          <p className="text-lg">
            {" "}
            <span className="bg-blue-700 text-xs px-2 mr-3 rounded-full"></span>
            Wednesday
          </p>
          <p className="text-lg">08:00 AM - 17:00 PM</p>
        </div>
        <div className="border-b flex justify-between">
          <p className="text-lg">
            {" "}
            <span className="bg-blue-700 text-xs px-2 mr-3 rounded-full"></span>
            Thursday
          </p>
          <p className="text-lg">08:00 AM - 17:00 PM</p>
        </div>
        <div className="border-b flex justify-between">
          <p className="text-lg">
            {" "}
            <span className="bg-blue-700 text-xs px-2 mr-3 rounded-full"></span>
            Friday
          </p>
          <p className="text-lg">08:00 AM - 17:00 PM</p>
        </div>
        <div className="border-b flex justify-between">
          <p className="text-lg">
            {" "}
            <span className="bg-blue-700 text-xs px-2 mr-3 rounded-full"></span>
            Saturday
          </p>
          <p className="text-lg">08:00 AM - 17:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default Hours;
