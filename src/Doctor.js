import React from "react";
import Header from "./components/Header";
import Booking from "./components/Booking";

function Doctor() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Booking apiKey={apiKey} projectId={projectId} dataset={dataset} />
    </div>
  );
}

export default Doctor;
