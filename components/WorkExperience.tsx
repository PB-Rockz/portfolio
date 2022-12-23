import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
type Props = {};

function WorkExperience({}: Props) {
  return (
    <motion.div
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center "
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
    >
      <h3 className="absolute top-20 md:top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="absolute top-20 flex w-full space-x-5 overflow-x-scroll px-10 pt-10 pb-5 snap-x snap-mandatory md:mb-5 scrollbar-track-gray-400/20 scrollbar-thumb-[#0adff7]/80 scrollbar-thin">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
}

export default WorkExperience;
