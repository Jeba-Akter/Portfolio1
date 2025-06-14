import React from "react";
import { FiDownload } from "react-icons/fi";
import { IoArrowForwardOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { IoMdMail } from "react-icons/io";

const HomeBanner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center w-10/12 m-auto ">
      <div className="  sm:justify-end">
        <h2 className=" text-4xl  text-slate-800 pt-5  font-semibold">Hi, I am </h2>
        <h1 className=" text-5xl font-bold py-2 capitalize">
          jeba akter <br /> 
        </h1>
        <h2 className=" font-bold text-gray-600">frontend developer</h2>
        <div className="flex gap-5 pt-5">
          <div className=" flex bg-green-500   rounded-xl items-center w-28 py-2 px-2">
            <h1 className=" text-2xl text-bold  text-white hover:tes">
              <FiDownload />
            </h1>
            <h2 className=" text-xl text-white">resume</h2>
          </div>
          <div className="flex items-center gap-2 border-2 border-green-400 py-2 px-5">
            <h1 className=" capitalize md:text-xl"> contact me</h1>
            <h2 className=" text-2xl text-black"><IoArrowForwardOutline /> </h2>
          </div>
        </div>
        <div className="mt-5 flex gap-5">
          <h1 className=" text-3xl text-green-600 p-2 border-2 border-green-600 rounded-full "> <FaGithub /></h1>
          <h1 className="  text-3xl text-green-600 p-2 border-2 border-green-600 rounded-full "><IoLogoLinkedin /> </h1>
          <h1 className="  text-3xl text-green-600 p-2 border-2 border-green-600 rounded-full "><IoMdMail /> </h1>
        </div>
      </div>
      <div
        className="w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] rounded-full  bg-cover md:mt-16 mt-5 border-4 border-green-600  "
        style={{
          backgroundImage:
            "url('https://i.ibb.co/XrrxkVGB/amazing-cheerful-business-woman-standing-with-arms-crossed.jpg')",
        }}
      ></div>


    </div>
  );
};

export default HomeBanner;
