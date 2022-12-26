import React from "react";
import { Link } from "react-router-dom";
export default function Tests(props) {
  const loadcontent = props.load;
  return (
    <div className="px-5 py-5 flex flex-wrap flex-col container">
      <h1 className="text-6xl font-bold">Services</h1>
      <div
        id="test-container"
        className="container mt-5 p-3  rounded-t-3xl flex flex-wrap flex-row"
      >
        <div className="max-w-sm m-2 bg-white hover:scale-105 rounded-lg shadow-md  bg-gradient-to-br from-green-100 to-blue-900">
          <Link onClick={loadcontent} to="/about">
            <img
              className="rounded-t-lg"
              src="https://t4.ftcdn.net/jpg/01/25/67/91/360_F_125679112_ECIW7IyeEpivJr3ESdjUX6roFizds3ww.jpg"
              alt=""
            />
          </Link>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Radiology
            </h5>
          </div>
        </div>
        <div
          className="max-w-sm m-2 bg-white hover:scale-105  rounded-lg shadow-md  bg-gradient-to-br from-green-100 to-blue-900"
        >
          <Link onClick={loadcontent} to="/about">
            <img
              className="rounded-t-lg"
              src="https://t4.ftcdn.net/jpg/02/89/11/17/360_F_289111791_j0ZsFCafoM4n47Pj6Nf1fVzC5OKXYtr7.jpg"
              alt=""
            />
          </Link>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Pathology
            </h5>
          </div>
        </div>
        <div className="max-w-sm m-2 bg-white hover:scale-105  rounded-lg shadow-md  bg-gradient-to-br from-green-100 to-blue-900">
          <Link onClick={loadcontent} to="/about">
            <img
              className="rounded-t-lg"
              src="https://freedesignfile.com/upload/2018/05/People-who-do-ECG-Stock-Photo.jpg"
              alt=""
            />
          </Link>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Electrocardiogram
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
