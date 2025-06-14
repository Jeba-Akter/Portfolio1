import React from "react";
import { Link } from "react-router-dom";

const Navber = () => {
  return (
    <div className="  ">
      <div className="navbar shadow-sm w-full md:w-10/12 mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-2xl text-black"
            >
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              {/* <Link to="/experince">Experinces</Link> */}
              <Link to="/projects">projects</Link>
              <Link to="/contacts">Contacts</Link>
            </ul>
          </div>
          <div className=" hidden lg:flex ">
            <ul className=" menu-horizontal px-1 gap-5  text-1xl text-black font-bold">
              <Link className=" hover:text-green-600" to="/">
                Home
              </Link>
              <Link className=" hover:text-green-600" to="/about">
                About
              </Link>
              {/* <Link className=" hover:text-green-600" to="/experince">
                Experince
              </Link> */}
              <Link className=" hover:text-green-600" to="/projects">
                projects
              </Link>
              <Link className=" hover:text-green-600" to="/contacts">
                Contacts
              </Link>
            </ul>
          </div>
        </div>
        <div className="navbar-end">
          <a className="btn capitalize bg-green-600 text-white border-none w-20 py-2 px-2 hover:bg-green-400 shadow-xl">hire</a>
        </div>
      </div>
    </div>
  );
};

export default Navber;
