import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

{
  /* <div data-aos="fade-down"></div> */
}

const AboutBanner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div
        className="justify-around gap-10 w-10/12 py-5 mx-auto grid sm:grid-cols-1 md:grid-cols-2"
        data-aos="fade-up"
      >
        <div className=" w-full shadow-2xl rounded-2xl bg-green-300  ">
          <img
            src="https://i.ibb.co/kgtR19GJ/amazing-cheerful-business-woman-standing-with-arms-crossed-removebg-preview.png"
            alt=""
            className=" mx-auto   "
          />
        </div>
        <div className=" mt-10" data-aos="fade-up">
          <h1 className=" text-2xl font-bold  uppercase flex gap-2 py-2 ">
            {" "}
            About <h2 className=" text-green-600">me</h2>
          </h1>
          <h1 className=" text-4xl font-bold text-green-600 capitalize py-5">
            i'm jeba akter
          </h1>
          <h2 className=" text-xl font-semibold text-gray-700 capitalize">
            I'm a frontend developer passionate about creating modern,
            responsive websites. Skilled in HTML, CSS, JavaScript, and React.js.
            I use Tailwind CSS and Bootstrap to design clean, user-friendly
            interfaces. I enjoy turning creative ideas into interactive web
            applications. I work with Firebase for backend features like
            authentication and hosting. Always curious to learn new tools and
            improve my development skills. I focus on writing clean, reusable
            code and delivering smooth user experiences. Let’s build something
            amazing together!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
