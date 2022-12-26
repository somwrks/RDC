import React from "react";
import { FcCancel, FcOk } from "react-icons/fc";

const Hours = () => {
  const Days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return (
    <div className="px-5 py-5 flex flex-wrap flex-col container">
      <h1 className="text-6xl font-bold ">Clinic Hours</h1>
      <div className=" mt-5 flex flex-wrap flex-row container  ">
        <div className="container max-w-3xl p-2 text-blue-100 font-light font-serif ">
          {Days.map((i, value) => {
            return (
              <div
                className={`justify-between border rounded-2xl mt-3 p-1 flex bg-gradient-to-b ${
                  Days[value] === "Sunday"
                    ? "from-blue-100 to-red-400"
                    : "from-blue-900 to-green-200"
                } flex-row`}
              >
                <h1 className="text-2xl ">{Days[value]}</h1>
                {Days[value] === "Sunday" ? (
                  <FcCancel className="h-10 w-11  rounded-2xl mr-2 brightness" />
                ) : (
                  <FcOk className="h-10 w-11  rounded-2xl mr-2 brightness" />
                )}
              </div>
            );
          })}
        </div>

        <div className="flex mt-5  p-3 text-blue-100 bg-gradient-to-t from-green-100 to-blue-900 rounded-t-3xl font-light font-serif ">
          <div className="text-5xl font-semibold ">
            <h2>From 8:30 am </h2>
            <h2>to 6 pm </h2>
            <h5 className="mt-1 text-xl font-normal"> Indian Standard Time</h5>
            <div className="text-xl mt-5 font-normal">
              <p>
                <font className="font-bold"> Ultrasound : </font>10:30am to
                4:00pm
              </p>
              <p>
                <font className="font-bold"> Other Examinations : </font>8:30am
                to 6:00pm
              </p>
            </div>
            <div className="text-xl mt-5 font-normal">
              <p>Hospital and Staff are available</p>
              <p>during this period</p>
            </div>
            <p className="text-xl mt-5 font-normal">
              Doctor's Stay might differ at times.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Hours;