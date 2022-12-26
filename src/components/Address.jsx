import React from "react";

export default function Address() {
  return (
    <div className="px-5 py-5 flex flex-wrap flex-col container">
      <h1 className="text-6xl font-bold ">Address</h1>
      <div
        id="test-container"
        className="container mt-5 p-3 bg-gradient-to-b from-blue-900 to-green-200 rounded-t-3xl"
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d887.3498887346307!2d81.21479548814928!3d27.175176191999295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4739dd99bfd25821!2zMjfCsDEwJzMwLjYiTiA4McKwMTInNTUuMiJF!5e0!3m2!1sen!2sin!4v1672054582033!5m2!1sen!2sin"
            ></iframe>
          </div>
          <div className="container px-5 py-24 mx-auto flex">
            <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Raj Diagnostic Centre
              </h2>
              <p className="leading-relaxed mb-5 text-gray-900">
                In front of old government hospital, BypassRoad, Tehsil
                Fatehpur, District - Barabanki, Uttar Pradesh.
              </p>
              <span>PIN- 225305 </span>
              <span>Call - <a className="text-blue-300 hover:text-blue-900 " href="tel:05240297002" title="Phone Number">
              05240297002
              </a></span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
