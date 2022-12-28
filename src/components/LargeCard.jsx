import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FcVoicePresentation, FcInspection,FcApproval,FcDataProtection } from "react-icons/fc";
const LargeCard = (props) => {
  const loadcontent = props.load;
  return (
    <div className="px-5 py-5">
      <h1 className="text-[#225dba] px-5 ">Raj Diagnostic Center</h1>
      <div className="flex head-1 justify-between py-5" >
        <div className="text-6xl font-semibold ">
          <p>
            WE <span className="font-bold">CARE</span>
          </p>
          <p>ABOUT YOUR</p>
          <p><span className="font-bold">HEALTH</span> & <span className="font-bold">WELLNESS</span></p>
          <div className="text-base mt-5 font-normal">
            <p>
              A New and Efficient way of helping people 
            </p>
            <p>and saving lives.</p>
          </div>
          <div className="bg-[#0e21fe] w-fit px-5 py-3 shadow-lg shadow-blue-700/60 text-base text-white font-normal rounded-full mt-5">
            <p className="flex items-center justify-center gap-3">
              Get in Touch
              <span className="bg-white/20 p-1 rounded-full">
              <Link onClick={loadcontent} to="/contact">
                <AiOutlineArrowRight />
              </Link>
              </span>
            </p>
          </div>
        </div>
        <div className="relative ">
          <div className=" bg-gradient-to-tr py-5 rounded-r-lg  from-blue-700 to-blue-300 rounded-tl-full ">
            <img
              className="w-96 scale-125 object-contain banner" alt="Hospital"
              src="https://img.freepik.com/free-vector/health-professional-team_52683-36023.jpg?w=2000"
            />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r mt-14 to-blue-300 rounded-t-3xl from-blue-700 via-[#3453ff] flex p-6 justify-between flex-wrap flex-row">
        <div className="flex justify-center p-3 items-center">
          <FcVoicePresentation className="h-20 w-20 bg-white rounded-2xl mr-2 brightness-110" />
          <div className="flex flex-col">
            <p className="text-white font-semibold">24/7</p>
            <p className="text-sm text-white/70">Online Support available </p>
            <p className="text-sm text-white/70">at almost any time</p>
          </div>
        </div>

        <div className="p-3 flex justify-center items-center">
          <FcInspection className="h-20 w-20 bg-white rounded-2xl mr-2 brightness-110" />
          <div className="flex flex-col">
            <p className="text-white font-semibold">Online Booking</p>
            <p className="text-sm text-white/70">Book your appointment from </p>
            <p className="text-sm text-white/70">anywhere with just one click</p>
          </div>
        </div>
        <div className="p-3 flex justify-center items-center">
          <FcApproval className="h-20 w-20 bg-white rounded-2xl mr-2 brightness-110" />
          <div className="flex flex-col">
            <p className="text-white font-semibold">Fast Report</p>
            <p className="text-sm text-white/70">Check your health</p>
            <p className="text-sm text-white/70">within few minutes</p>
          </div>
        </div>
        <div className="p-3 flex justify-center items-center">
          <FcDataProtection className="h-20 w-20 bg-white rounded-2xl mr-2 brightness-110" />
          <div className="flex flex-col">
            <p className="text-white font-semibold">Trusted and Secure</p>
            <p className="text-sm text-white/70">Our team makes sure a Highly</p>
            <p className="text-sm text-white/70"> Tested and Secured Environment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeCard;