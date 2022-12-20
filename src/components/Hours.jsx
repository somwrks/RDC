// import React from "react";

// const Hours = () => {
//   return (
//     <div className="px-10 py-10  mx-auto flex justify-center">
//       <div className="space-y-10">
//         <p className="text-3xl  font-semibold pb-5">Our Hours of Operation</p>
//         <div className="border-b flex justify-between">
//           <p className="text-lg">
//             {" "}
//             <span className="bg-blue-700 text-xs px-2 mr-3 rounded-full"></span>
//             Monday
//           </p>
//           <p className="text-lg">08:00 AM - 17:00 PM</p>
//         </div>
//         <div className="border-b flex justify-between">
//           <p className="text-lg">
//             {" "}
//             <span className="bg-blue-700 text-xs px-2 mr-3 rounded-full"></span>
//             Tuesday
//           </p>
//           <p className="text-lg">08:00 AM - 17:00 PM</p>
//         </div>
//         <div className="border-b flex justify-between">
//           <p className="text-lg">
//             {" "}
//             <span className="bg-blue-700 text-xs px-2 mr-3 rounded-full"></span>
//             Wednesday
//           </p>
//           <p className="text-lg">08:00 AM - 17:00 PM</p>
//         </div>
//         <div className="border-b flex justify-between">
//           <p className="text-lg">
//             {" "}
//             <span className="bg-blue-700 text-xs px-2 mr-3 rounded-full"></span>
//             Thursday
//           </p>
//           <p className="text-lg">08:00 AM - 17:00 PM</p>
//         </div>
//         <div className="border-b flex justify-between">
//           <p className="text-lg">
//             {" "}
//             <span className="bg-blue-700 text-xs px-2 mr-3 rounded-full"></span>
//             Friday
//           </p>
//           <p className="text-lg">08:00 AM - 17:00 PM</p>
//         </div>
//         <div className="border-b flex justify-between">
//           <p className="text-lg">
//             {" "}
//             <span className="bg-blue-700 text-xs px-2 mr-3 rounded-full"></span>
//             Saturday
//           </p>
//           <p className="text-lg">08:00 AM - 17:00 PM</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hours;

import React from "react";
import {FcCancel, FcOk} from "react-icons/fc";

const Hours = () => {
  return (
    <div className="px-5 py-5 flex flex-wrap flex-col container">
        <h1 className="text-6xl font-bold ">Office Hours</h1>
        <div className=" mt-5 flex flex-wrap flex-row container bg-gradient-to-t from-green-200 to-blue-800 rounded-t-3xl">

        <div className="  container max-w-3xl p-2 text-blue-100 font-light font-serif ">
        <div className=" justify-between rounded-2xl mt-3 p-1 flex bg-gradient-to-b from-green-400 to-blue-400 flex-row">
        <h1 className="text-2xl ">Monday</h1>
        <FcOk className="h-10 w-11  rounded-2xl mr-2 brightness" />
        </div>
        <div className="justify-between rounded-2xl p-1 mt-3 flex bg-gradient-to-b from-green-400 to-blue-400 flex-row">
        <h1 className="text-2xl  ">Tuesday</h1>
        <FcOk className="h-10 w-11 rounded-2xl mr-2 brightness" />
        </div>
        <div className="justify-between rounded-2xl p-1 mt-3 flex bg-gradient-to-b from-green-400 to-blue-400 flex-row">
        <h1 className="text-2xl  ">Wednesday</h1>
        <FcOk className="h-10 w-11 rounded-2xl mr-2 brightness" />
        </div>
        <div className="justify-between rounded-2xl p-1 mt-3 flex bg-gradient-to-b from-green-400 to-blue-400 flex-row">
        <h1 className="text-2xl  ">Thursday</h1>
        <FcOk className="h-10 w-11 rounded-2xl mr-2 brightness" />
        </div>
        <div className="justify-between rounded-2xl p-1 mt-3 flex bg-gradient-to-b from-green-400 to-blue-400 flex-row">
        <h1 className="text-2xl  ">Friday</h1>
        <FcOk className="h-10 w-11 rounded-2xl mr-2 brightness" />
        </div>
        <div className="justify-between rounded-2xl p-1 mt-3 flex bg-gradient-to-b from-green-400 to-blue-400 flex-row">
        <h1 className="text-2xl  ">Saturday</h1>
        <FcOk className="h-10 w-11 rounded-2xl mr-2 brightness" />
        </div>
        <div className="justify-between rounded-2xl p-1 mt-3 flex bg-gradient-to-b from-blue-100 to-red-400 flex-row">
        <h1 className="text-2xl  ">Sunday</h1>
        <FcCancel className="h-10 w-11 rounded-2xl mr-2 brightness" />
        </div>
        </div>
        
        <div className="flex mt-5  p-3 text-blue-100 font-light font-serif ">
        <div className="text-5xl font-semibold ">
          <h2>From 8:30 am </h2>
          <h2>to 6 pm </h2>
          <h5 className="mt-1 text-xl font-normal"> Indian Standard Time</h5>
          <div className="text-xl mt-5 font-normal">
            <p>
           <font className="font-bold"> Ultrasound : </font>10:30am to 4:00pm
            </p>
            <p>
           <font className="font-bold"> Other Examinations : </font>8:30am to 6:00pm
            </p>
          </div>
          <div className="text-xl mt-5 font-normal">
            <p>
              Hospital and Staff are available
            </p>
            <p>during this period</p>
          </div>
          <p  className="text-xl mt-5 font-normal">
            Doctor's Stay might 
            differ at times.
            </p>
        </div>
        </div>
    </div>
    </div>
  );
};

export default Hours;