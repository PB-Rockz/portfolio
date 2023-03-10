import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SkillDef } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  skill: SkillDef;
};

function Skill({ skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer max-w-full">
      <motion.div
        initial={{
          x: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
      >
        <Image
          src={urlFor(skill.image).url()}
          height={"96"}
          width={"96"}
          className="h-[70px] w-[70px] md:h-24 md:w-24 rounded-full border border-gray-500  filter group-hover:grayscale transition duration-300 ease-in-out object-contain p-1 "
          alt="skill"
        />
      </motion.div>
      <div className=" absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-[70px] w-[70px] md:h-24 md:w-24 rounded-full">
        <div className="flex items-center justify-center h-full ">
          <p className="text-3xl font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
