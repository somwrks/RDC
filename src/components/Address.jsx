import React from "react";

export default function Address() {
  return (
    <div className="px-5 py-5 flex flex-wrap flex-col container">
      <h1 className="text-6xl font-bold text-blue-700">Address</h1>
      <div
        id="test-container"
        className="container mt-5 p-3 bg-gradient-to-b from-green-400 to-blue-400 rounded-t-3xl"
      >
        <section className="text-gray-600 body-font relative">
          <div className="absolute inset-0 bg-gray-300">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="map"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            ></iframe>
          </div>
          <div className="container px-5 py-24 mx-auto flex">
            <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Raj Diagnostic Centre
              </h2>
              <p className="leading-relaxed mb-5 text-gray-600">
              Down the Street, India
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}