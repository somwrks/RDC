import React from "react";
import bloodtest from "../img/bloodtest.jpeg"
import xray from "../img/pathology.jpeg"
import pathology from "../img/xray.jpeg"
import ecg from "../img/ecg.jpg"
import ot from "../img/ot.jpg"
const Faculty = () => {
  const category =["Radiology","Pathology","Electrocardiogram","Others"]
  const radio = ["Ultrasound","Digital Xray"]
  const patho = ["Blood test","Stool Examination","Urine Examination"]
  const other = [ "Biopsy", "Culture & Senstivity", "Hormone analysis","pap smear by higher centre"]
  const img = [bloodtest,xray,pathology,ecg,ot ]
  return (
    <div className="px-5 py-5">
    <div className="px-5 py-5 flex flex-wrap flex-col container">
      <h1 className="text-6xl font-bold ">Services</h1>
      <div className="container p-3 mt-5 rounded-t-3xl flex flex-wrap flex-col">
      <div className="mt-5 p-5  " style={{backgroundImage: "url("+bloodtest+")"}}>
      <h2 className="text-4xl font-semibold text-center">Radiology</h2>
      <h3 className="text-2xl mt-3 font-normal">Ultrasound</h3>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Faculty;