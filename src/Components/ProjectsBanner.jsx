import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

export default function ProjectsBanner() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const projectsData = [
    {
      id: 1,
      image:
        "https://www.refrens.com/grow/wp-content/uploads/2023/01/Featured-Images-71.png",
      category: "frontend",
      title: "Portfolio Website",
      description:
        "A responsive portfolio website built with React and Tailwind CSS.",
      tech: ["React", "Tailwind CSS"],
    },
    {
      id: 2,
      image:
        "https://marketplace.canva.com/EAGRRGPTAxM/1/0/1600w/canva-white-and-orange-modern-online-shop-business-project-presentation-MyWGyIYmNyE.jpg",
      category: "fullstack",
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce application with payment gateway integration.",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 3,
      image:
        "https://ecomposer.io/cdn/shop/articles/image1_103885f5-e61c-4640-8576-024d8f45b1eb.png?v=1689814372",
      category: "frontend",
      title: "Landing Page",
      description: "A high-converting marketing landing page.",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 4,
      image:
        "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/naxpa0453a6bhd69ci1c.png",
      category: "fullstack",
      title: "Blog Platform",
      description: "A modern blog platform for developers.",
      tech: ["Next.js", "MongoDB"],
    },
  ];

  const filteredProjects = (category) => {
    if (category === "all") {
      return projectsData;
    }
    return projectsData.filter((project) => project.category === category);
  };

  const categories = ["all", "frontend", "fullstack"];

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={value} onChange={handleChange} centered>
        {categories.map((cat, index) => (
          <Tab key={index} label={cat} />
        ))}
      </Tabs>

      <div className=" grid md:grid-cols-2 gap-10 w-full  md:w-10/12 m-auto shadow-2xl my-20 bg-slate-10 p-4 rounded-2 ">
        {filteredProjects(categories[value]).map((project) => (
          <div
            key={project.id}
            className=" shadow-2xl rounded-2xl "
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="">
              <img
                src={project.image}
                alt={project.name}
                className=" rounded-t-2xl "
              />
            </div>
            <div className=" pl-5 py-5 gap-5">
              <h2 className=" text-xl font-bold">{project.title}</h2>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p >
                <strong>Tech:</strong> {project.tech.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
}
