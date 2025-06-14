import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles


const TechStack = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [allSkills, setallskills] = useState([]);
  const [frontenddata, setfrontenddata] = useState([]);
  const [backenddata, setbackenddata] = useState([]);
  const [toolsdata, settoolsdata] = useState([]);
  // {}, []
  useEffect(() => {
    fetch("/allSkills.json")
      .then((res) => res.json())
      .then((data) => {
        setallskills(data);
        //filter frontenddata
        const frontendSkills = data.filter(
          (skill) => skill.category === "Frontend"
        );
        setfrontenddata(frontendSkills);
        // filter backend data
        const backendskills = data.filter(
          (skill) => skill.category === "Backend"
        );
        setbackenddata(backendskills);
        const toolsskills = data.filter((skill) => skill.category === "Tools");
        settoolsdata(toolsskills);
      });
  }, []);

  return (
    // <div className="w-11/12 m-auto">
    //   <Tabs>
    //     <div className="text-2xl capitalize font-bold mt-10 hover:underline">
    //       <TabList>
    //         <Tab>All</Tab>
    //         <Tab>Frontend</Tab>
    //         <Tab>Backend</Tab>
    //         <Tab>tools</Tab>
    //       </TabList>
    //     </div>

    //     {/* All Skills */}
    //     <TabPanel>
    //       <div className="w-11/12 m-auto  my-10 bg-slate-20">
    //         <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5  gap-10">
    //           {allSkills.map((skill, idx) => (
    //             <div key={idx} className="card bg-base-100 w-52 shadow-2xl  px-10 py-10">
    //               <figure>
    //                 <img
    //                   src={skill.image}
    //                   alt={skill.name}
    //                   className="h-24 w-full"
    //                 />
    //               </figure>
    //               <div className="card-body">
    //                 <h2 className="card-title">{skill.name}</h2>
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </TabPanel>

    //     {/* Frontend Skills */}
    //     <TabPanel>
    //       <div className="w-11/12 m-auto my-20 ">
    //         <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
    //           {frontenddata.map((skill, idx) => (
    //             <div key={idx} className="card bg-base-100 w-52 shadow-2xl px-10">
    //               <figure>
    //                 <img
    //                   src={skill.image}
    //                   alt={skill.name}
    //                   className="h-24 w-full"
    //                 />
    //               </figure>
    //               <div className="card-body">
    //                 <h2 className="card-title">{skill.name}</h2>
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </TabPanel>

    //     {/* Backend Skills */}
    //     <TabPanel>
    //    <div className=" w-11/12 m-auto my-20">
    //    <div className=" grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
    //       {backenddata.map((skill,idx) => (
    //         <div key={idx} className="card bg-base-100 w-52 shadow-2xl px-10">
    //         <figure>
    //           <img
    //             src={skill.image}
    //             alt= {skill.name}
    //             className="h-24 w-full"
    //              />
    //         </figure>
    //         <div className="card-body">
    //           <h2 className="card-title">{skill.name}</h2>

    //         </div>
    //       </div>

    //       ) ) }
    //      </div>
    //    </div>
    //     </TabPanel>
    //     {/* this is a tools  */}
    //     <TabPanel>
    //     <div className=" w-11/12 m-auto my-20">
    //    <div className=" grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
    //       {toolsdata.map((skill,idx) => (
    //         <div key={idx} className="card bg-base-100 w-52 shadow-2xl lg:px-10">
    //         <figure>
    //           <img
    //             src={skill.image}
    //             alt= {skill.name}
    //             className="h-24 w-full"
    //              />
    //         </figure>
    //         <div className="card-body">
    //           <h2 className="card-title">{skill.name}</h2>

    //         </div>
    //       </div>

    //       ) ) }
    //      </div>
    //    </div>
    //     </TabPanel>
    //   </Tabs>
    // </div>
    <div className="w-10/12 m-auto">
      <Tabs>
        <div className="text-2xl capitalize font-bold mt-10 hover:underline">
          <TabList>
            <Tab>All</Tab>
            <Tab>Frontend</Tab>
            <Tab>Backend</Tab>
            <Tab>Tools</Tab>
          </TabList>
        </div>

        {/* Shared Card Style */}
        {[
          { data: allSkills },
          { data: frontenddata },
          { data: backenddata },
          { data: toolsdata },
        ].map((tab, index) => (
          <TabPanel key={index}>
            <div className="w-full m-auto my-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {tab.data.map((skill, idx) => (
                  <div
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    key={idx}
                    className="card bg-white shadow-lg hover:shadow-2xl
                    transition-shadow duration-300 rounded-xl p-5 text-center" >
                    <figure className="flex justify-center">
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="h-20 w-20 object-contain"
                      />
                    </figure>
                    <div className="card-body p-0 mt-4">
                      <h2 className="text-lg font-semibold text-gray-800">
                        {skill.name}
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default TechStack;
