import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="uppercase absolute text-2xl top-20 text-gray-500 tracking-[20px]">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#0adff7]/80 scrollbar-thin">
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
              initial={{
                y: -300,
                opacity: 1,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              src="/project.png"
              alt=""
              className="h-[300px] w-[500px]"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#0adff7]/50">
                  Case Study {i + 1} of {projects.length}
                </span>{" "}
                :FB clone
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis corrupti deserunt soluta minus praesentium vel,
                maxime pariatur odio! Unde saepe illo eaque eligendi minus nobis
                placeat voluptas corrupti est quia!
              </p>
            </div>
          </div>
        ))}
        {/* project */}
        {/* project */}
        {/* project */}
      </div>
      <div className="w-full absolute top-[30%] bg-[#0ADFF7]/10 left-0 h-[400px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
