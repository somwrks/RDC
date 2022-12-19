import React from "react";
import { Link } from "react-router-dom";
export default function Tests() {
  return (
    <div className="px-5 py-5 flex flex-wrap flex-col container">
      <h1 className="text-6xl font-bold text-blue-700">
        Types of Tests done here
      </h1>
      <div id="test-container" className="container mt-5 p-3 bg-gradient-to-b from-blue-700 to-green-200 rounded-t-3xl flex flex-wrap flex-row">
        <div className="max-w-sm m-2 bg-white hover:scale-105 rounded-lg shadow-md  bg-gradient-to-br from-blue-400 to-green-400">
          <Link to="/book">
            <img
              className="rounded-t-lg"
              src="https://www.nhlbi.nih.gov/sites/default/files/inline-images/BloodTests_1125876918_12_21_2021.jpg"
              alt=""
            />
          </Link>
          <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Full Blood Test
              </h5>
            <p className=" font-normal text-gray-700 dark:text-gray-400">
              Full Body checkup 
            </p>
          </div>
        </div>
        <div className="max-w-sm m-2 bg-white hover:scale-105  rounded-lg shadow-md  bg-gradient-to-br from-blue-400 to-green-400">
          <Link to="/book">
            <img
              className="rounded-t-lg"
              src="https://www.cdc.gov/nceh/radiation/images/radiology-doctor-xray.png?_=98342"
              alt=""
            />
          </Link>
          <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                X-Ray Checkup
              </h5>
            <p className=" font-normal text-gray-700 dark:text-gray-400">
              Full Body X-ray available
            </p>
          </div>
        </div>
        <div className="max-w-sm m-2 bg-white hover:scale-105  rounded-lg shadow-md  bg-gradient-to-br from-blue-400 to-green-400">
          <Link to="/book">
            <img
              className="rounded-t-lg"
              src="https://www.ahu.edu/sites/default/files/styles/fc_800x533/public/media/q2-resource-guide-image-.jpg?h=34bbd072&itok=PMdbNprt"
              alt=""
            />
          </Link>
          <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Ultrasound
              </h5>
            <p className=" font-normal text-gray-700 dark:text-gray-400">
            Full Body Ultrasound 

            </p>
          </div>
        </div>
        <div className="max-w-sm m-2 bg-white hover:scale-105  rounded-lg shadow-md  bg-gradient-to-br from-blue-400 to-green-400">
          <Link to="/book">
            <img
              className="rounded-t-lg"
              src="https://www.nhlbi.nih.gov/sites/default/files/inline-images/BloodTests_1125876918_12_21_2021.jpg"
              alt=""
            />
          </Link>
          <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Full Blood Test
              </h5>
            <p className=" font-normal text-gray-700 dark:text-gray-400">
              Full Body checkup 
            </p>
          </div>
        </div>
        <div className="max-w-sm m-2 bg-white hover:scale-105  rounded-lg shadow-md  bg-gradient-to-br from-blue-400 to-green-400">
          <Link to="/book">
            <img
              className="rounded-t-lg"
              src="https://www.ahu.edu/sites/default/files/styles/fc_800x533/public/media/q2-resource-guide-image-.jpg?h=34bbd072&itok=PMdbNprt"
              alt=""
            />
          </Link>
          <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Full Blood Test
              </h5>
            <p className=" font-normal text-gray-700 dark:text-gray-400">
              Full Body checkup 
            </p>
          </div>
        </div>
        <div className="max-w-sm m-2 bg-white hover:scale-105  rounded-lg shadow-md  bg-gradient-to-br from-blue-400 to-green-400">
          <Link to="/book">
            <img
              className="rounded-t-lg"
              src="https://www.nhlbi.nih.gov/sites/default/files/inline-images/BloodTests_1125876918_12_21_2021.jpg"
              alt=""
            />
          </Link>
          <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Full Blood Test
              </h5>
            <p className=" font-normal text-gray-700 dark:text-gray-400">
              Full Body checkup 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}