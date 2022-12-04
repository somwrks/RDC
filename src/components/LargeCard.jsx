import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FcBusinessman } from "react-icons/fc";
const LargeCard = () => {
  return (
    <div className="px-10 py-5">
      <h1 className="text-[#225dba] px-5 ">Welcome Aboard</h1>
      <div className="flex justify-between py-5">
        <div className="text-6xl font-semibold ">
          <p>
            For <span className="">private</span>
          </p>
          <p>clinics and </p>
          <p>medical centers </p>
          <div className="text-base mt-5 font-normal">
            <p>
              "Health is wealth - invest in yourself by eating healthy,
              exercising regularly
            </p>
            <p>and getting enough rest."</p>
          </div>
          <div className="bg-[#0e21fe] w-fit px-5 py-3 shadow-lg shadow-blue-700/60 text-base text-white font-normal rounded-full mt-5">
            <p className="flex items-center justify-center gap-3">
              Get in Touch{" "}
              <span className="bg-white/20 p-1 rounded-full">
                <AiOutlineArrowRight />
              </span>
            </p>
          </div>
        </div>
        <div className="">
          <p>a image will be placed</p>
          {/* <img
            className="w-96 scale-125 object-contain"
            src="https://cdn.sanity.io/images/mrfd4see/production/85a728494b58ce87f547a44aa0c9149aea437570-500x333.png?w=2000&fit=max&auto=format"
          /> */}
        </div>
      </div>
      <div className="bg-gradient-to-r mt-14 to-blue-300 rounded-t-3xl from-blue-700 via-[#3453ff] flex px-14 py-10 justify-between">
        <div className="flex justify-center items-center">
          <FcBusinessman className="h-20 w-20 bg-white rounded-2xl mr-2 brightness-110" />
          <div className="flex flex-col">
            <p className="text-white font-semibold">Free Support</p>
            <p className="text-sm text-white/70">An easy to use online</p>
            <p className="text-sm text-white/70">booking service</p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <FcBusinessman className="h-20 w-20 bg-white rounded-2xl mr-2 brightness-110" />
          <div className="flex flex-col">
            <p className="text-white font-semibold">Free Support</p>
            <p className="text-sm text-white/70">An easy to use online</p>
            <p className="text-sm text-white/70">booking service</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <FcBusinessman className="h-20 w-20 bg-white rounded-2xl mr-2 brightness-110" />
          <div className="flex flex-col">
            <p className="text-white font-semibold">Free Support</p>
            <p className="text-sm text-white/70">An easy to use online</p>
            <p className="text-sm text-white/70">booking service</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeCard;
