import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import Link from "next/link";
type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
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
      <h3 className="uppercase absolute text-2xl top-24 md:top-14 text-gray-500 tracking-[20px]">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#0adff7]/80 scrollbar-thin">
        {projects?.map((project, i) => (
          <div
            key={project?._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-3 md:space-y-5 items-center justify-center px-16 pt-16 md:p-44 h-screen"
          >
            <motion.div
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
            >
              <Image
                width={500}
                height={300}
                src={urlFor(project.image).url()}
                alt=""
                className="h-52 w-72 md:h-[300px] md:w-[500px] mt-4"
              />
            </motion.div>
            <div className="space-y-5 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl md:text-4xl font-semibold text-center">
                <span className="underline decoration-[#0adff7]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
              </h4>
              <div className="flex items-center space-x-4 justify-center">
                {project?.technologies.map((tech) => (
                  <Image
                    key={tech._id}
                    height={40}
                    width={40}
                    src={urlFor(tech?.image).url()}
                    className="h-10"
                    alt="tech used"
                  />
                ))}
              </div>
              <p className="text-base md:text-lg text-center md:text-left overflow-y-scroll h-24 scrollbar-track-gray-400/20 scrollbar-thumb-[#0adff7]/80 scrollbar-thin">
                {project?.summary}
              </p>
              <a target={"_blank"} href={project.linkToBuild}>
                <button className=" flex items-center text-[#0adff7]/50 rounded-full border border-[#0adff7] px-4 py-2 mx-auto hover:bg-[#0adff7]/80 hover:text-black">
                  Link to Build
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#0ADFF7]/10 left-0 h-[400px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
