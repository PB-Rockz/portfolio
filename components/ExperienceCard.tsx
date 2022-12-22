import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-xl items-center space-y-7 flex-shrink-0 w-[500px] md:w-[800px] lg:w-[950px] snap-center bg-[#292929] px-5 py-3 mt-5 hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Image
          src={"/about.jpeg"}
          height={200}
          width={200}
          alt={"ExpCard"}
          className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover "
        />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO of IDK Limited</h4>
        <p className="font-bold mt-1 text-2xl">IDK Limited</p>
        <div className="flex space-x-2 my-2">
          <Image
            src={"/about.jpeg"}
            height={40}
            width={40}
            alt={"TechStack"}
            className="rounded-full object-contain"
          />
          <Image
            src={"/about.jpeg"}
            height={40}
            width={40}
            alt={"TechStack"}
            className="rounded-full object-contain"
          />
          <Image
            src={"/about.jpeg"}
            height={40}
            width={40}
            alt={"TechStack"}
            className="rounded-full object-contain"
          />
          {/* tech used */}
          {/* tech used */}
          {/* tech used */}
        </div>
        <p className="uppercase text-gray-300 py-3">
          Strated work- ... Ended work- ...
        </p>
        <ul className="list-disc space-y-1 ml-5 text-lg ">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
