import React, { useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineFacebook } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { LuMessageSquare } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

const ContactBanner = () => {
  useEffect(() => {
    AOS.init();
  }, []); 
  return (
   
   <div className=" w-10/12 mx-auto my-10">
      <div>
        <h1 className=" text-5xl font-bold text-center">Get in Touch</h1>
        <h2 className=" text-center text-lg text-gray-900 w-7/12 mx-auto py-5">
          Have a question or want to work together? Reach out through the form
          below or connect with us on social media.
        </h2>
      </div>
      <div className=" flex flex-col md:flex-row gap-10">
        <div
          className=" shadow-2xl rounded-xl w-full md:w-5/12 "
          data-aos="fade-down-left"
        >
          <h1 className=" text-2xl font-samibold text-black py-5 px-10">
            Connect with Social Media
          </h1>
          <div className=" my-5 mx-10">
            <a
              href=" https://www.linkedin.com/in/jeba-khatun-3698a2352"
              target="_blank"
              className=" flex px-5 py-5 rounded-xl my-5 bg-gray-100 hover:bg-gray-200 items-center justify-between "
            >
              <div className=" flex items-center gap-5">
                <h1 className=" text-4xl text-sky-600">
                  {" "}
                  <FaLinkedin />{" "}
                </h1>
                <div>
                  <h1 className=" capitalize text-xl font-semibold">
                    linkedin
                  </h1>
                  <h2 className=" text-gray-500 ">@jeba-khatun</h2>
                </div>
              </div>
              <h1>
                {" "}
                <FaArrowRight />{" "}
              </h1>
            </a>
            <a
              href=" https://www.facebook.com/profile.php?id=61565407780225"
              target="_blank"
              className=" flex px-5 py-5 rounded-xl my-5 bg-gray-100 hover:bg-gray-200 items-center justify-between "
            >
              <div className=" flex items-center gap-5">
                <h1 className=" text-4xl text-sky-600 ">
                  {" "}
                  <MdOutlineFacebook />{" "}
                </h1>
                <div>
                  <h1 className=" capitalize text-xl font-semibold">
                    facebook
                  </h1>
                  <h2 className=" text-gray-500">@jeba-khatun</h2>
                </div>
              </div>
              <h1>
                {" "}
                <FaArrowRight />{" "}
              </h1>
            </a>{" "}
            <a
              href=" https://www.linkedin.com/in/jeba-khatun-3698a2352"
              target="_blank"
              className=" flex px-5 py-5 rounded-xl bg-gray-100 hover:bg-gray-200 items-center justify-between "
            >
              <div className=" flex items-center gap-5">
                <h1 className=" text-4xl text-green-600 ">
                  {" "}
                  <BsWhatsapp />{" "}
                </h1>
                <div>
                  <h1 className=" capitalize font-semibold text-xl">
                    WhatsApp
                  </h1>
                  <h2 className=" text-gray-500">@jeba-khatun</h2>
                </div>
              </div>
              <h1>
                {" "}
                <FaArrowRight />{" "}
              </h1>
            </a>
            <a
              href=" https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
              target="_blank"
              className=" flex px-5 py-5 my-5 rounded-xl bg-gray-100 hover:bg-gray-200 items-center justify-between "
            >
              <div className=" flex items-center gap-5">
                <h1 className=" text-4xl text-orange-600 ">
                  {" "}
                  <MdOutlineMailOutline />{" "}
                </h1>
                <div>
                  <h1 className=" capitalize text-xl font-semibold">email</h1>
                  <h2 className=" text-gray-500">infojeba@gmail.com</h2>
                </div>
              </div>
              <h1 className="  ">
                {" "}
                <FaArrowRight />{" "}
              </h1>
            </a>
          </div>
        </div>
        <div className="w-full md:w-7/12 shadow-2xl rounded-xl p-10" data-aos="fade-down-left">
          <div className="flex gap-2 my-5">
            <h1 className=" text-2xl flex pt-2">
              <LuMessageSquare />
            </h1>
            <h2 className=" text-2xl font-samibold text-black">
              {" "}
              send message
            </h2>
          </div>
          <div className="grid grid-cols-2  gap-5">
            <fieldset className="fieldset ">
              <legend className="fieldset-legend capitalize text-gray-500 text-xl text-start"> name</legend>
              <input type="text" className="input py-5 pr-20 text-lg" placeholder="Namber" />
            </fieldset>
             <fieldset className="fieldset">
              <legend className="fieldset-legend capitalize text-gray-500 text-xl"> email</legend>
              <input type="text" className="input text-lg" placeholder="Email" />
            </fieldset>
             <fieldset className="fieldset grid col-span-2 ">
              <legend className="fieldset-legend capitalize text-gray-500 text-xl"> Message</legend>
              <input type="text" className="input pt-5 pb-44 text-lg" placeholder="how can we help you" />
            </fieldset>
          </div>
        </div>
      </div>
    </div>



  );
};

export default ContactBanner;
