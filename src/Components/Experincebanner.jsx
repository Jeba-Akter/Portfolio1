import React, { useEffect } from "react";
import { BsDuffle } from "react-icons/bs";
import { RiLuggageDepositLine } from "react-icons/ri";
import { FaRegFileAlt } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

const Experincebanner = () => {
    useEffect(() => {
        AOS.init();
    },[]);
  return (
    <div className=" ">
      <div className=" py-10 ">
        <h1 className=" text-3xl font-bold text-center ">
          Professional Experience
        </h1>
        <h1 className=" text-center text-xl">
          A detailed overview of my professional journey and expertise
        </h1>
      </div>
      <div className=" w-10/12 mx-auto shadow-2xl  border-2 my-10"  data-aos="fade-up" >
        <div className=" lg:flex  m-auto items-center justify-between bg-slate-900 text-white p-5 capitalize">
          <div>
            <h1 className=" text-2xl font-bold   ">SM technology</h1>
            <h2>full stack developer</h2>
          </div>
          <div className=" text-green-600 font-bold">2024-2025</div>
        </div>
        <div className=" lg:flex justify-between   border-b border-gray-300 px-5  pb-5">
          <div className=" flex items-center gap-5 pt-10">
            <h2 className=" text-2xl">
              {" "}
              <BsDuffle />{" "}
            </h2>
            <div>
              <h1 className=" text-xl ">duration</h1>
              <h3>August 17, 2024 - April 2, 2025</h3>
            </div>
          </div>
          <div className=" flex items-center gap-5 pt-10 capitalize">
            <h2 className=" text-2xl">
              {" "}
              <RiLuggageDepositLine />{" "}
            </h2>
            <div>
              <h1 className=" text-xl ">position</h1>
              <h3>full stack developer</h3>
            </div>
          </div>
        </div>
        <div>
          <div className=" px-5">
            <div className=" flex items-center gap-5 pt-5 capitalize">
              <h2 className=" text-2xl">
                {" "}
                <FaRegFileAlt />{" "}
              </h2>
              <div className=" flex gap-2">
                <h1 className=" text-xl ">responsibility & </h1>
                <h3 className=" text-xl"> achievements</h3>
              </div>
            </div>
            <div className=" pt-5  border-b border-gray-400">
            <li className=" ">
                Worked as a Full Stack Developer with a strong focus on frontend
                development, primarily using HTML, CSS, JavaScript, TypeScript,
                React, and Next. js to build responsive and user-friendly
                interfaces.
              </li>
              <li className=" py-5">
                Led a frontend team of 12 developers, overseeing task
                distribution, project planning, and code quality to ensure
                smooth delivery of features and UI components.
              </li>
              <li>
                Joined a capsule team to provide cross-functional support,
                helping other teams achieve their technical goals effectively
              </li>
              <li className=" py-5">
                I provided technical assistance in configuring the VPS and
                assisted in deploying and maintaining web applications on the
                VPS, ensuring reliable and secure hosting.
              </li>
            </div>
            <div className=" pb-10  capitalize">
                <h1 className=" text-xl p-5 "> technology used</h1>
                <div className=" grid grid-cols-2 lg:grid-cols-8 gap-2">
                    <h1 className=" pl-8 py-2 bg-gray-200 rounded-full">html</h1>  
                    <h1 className=" px-2 py-2 bg-gray-200 shadow-2xl rounded-full" >css</h1>
                    <h1 className=" px-2 py-2 bg-gray-200 shadow-2xl rounded-full" >javascript</h1>
                    <h1 className=" px-2 py-2 bg-gray-200 shadow-2xl rounded-full" >typescript</h1>
                    <h1 className=" px-5 py-2 bg-gray-200 shadow-2xl rounded-full" >react</h1>
                    <h1 className=" px-5 py-2 bg-gray-200 shadow-2xl rounded-full" >next.js</h1>
                    <h1 className=" px-5 py-2 bg-gray-200 shadow-2xl rounded-full" >node.js</h1>
                    <h1 className=" px-5 py-2 bg-gray-200 shadow-2xl rounded-full" >express.js</h1>
                    <h1 className=" px-5 py-2 bg-gray-200 shadow-2xl rounded-full" >mongodb</h1>
                    <h1 className=" px-5 py-2 bg-gray-200 shadow-2xl rounded-full" >git</h1>
                    <h1 className=" px-5 py-2 bg-gray-200 shadow-2xl rounded-full" >github</h1>
                    <h1 className=" px-5 py-2 bg-gray-200 shadow-2xl rounded-full" >postman</h1>
                    <h1 className=" px-5 py-2 bg-gray-200 shadow-2xl rounded-full" >vpshosting</h1>
                    <h1 className=" px-5 py-2 bg-gray-200 shadow-2xl rounded-full" >CI/CD</h1>
                    <div className="flex  gap-1 py-2 bg-gray-200 shadow-2xl rounded-full" >
                    <h1 >API  </h1>
                    <h2>intragation</h2>

                    </div>
                </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Experincebanner;
