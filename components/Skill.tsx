import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
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
          src={"/ts-logo.svg"}
          height={"96"}
          width={"96"}
          className="h-[80px] w-[80px] md:h-24 md:w-24 rounded-full border border-gray-500  filter group-hover:grayscale transition duration-300 ease-in-out object-fill"
          alt="skill"
        />
      </motion.div>
      <div className=" absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:h-24 md:w-24 rounded-full">
        <div className="flex items-center justify-center h-full ">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
