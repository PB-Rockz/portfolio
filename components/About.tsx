import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
type Props = {};

function About({}: Props) {
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
      className=" flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{
          once: true,
        }}
        src={"/about.jpeg"}
        alt={"about"}
        className="-mb-20 mt-12 md:mb-0 flex-shrink-0 h-56 w-56 object-cover rounded-full md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px]"
      />
      <div className="space-y-10 px-0 md:px-10 ">
        <h4 className="text-4xl font-semibold">
          Here is <span className="underline decoration-[#0adff7]">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          consequuntur itaque quod facilis sunt corporis perferendis in eaque,
          natus nostrum totam, modi blanditiis laudantium eligendi. Rem
          obcaecati temporibus accusamus accusantium.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
