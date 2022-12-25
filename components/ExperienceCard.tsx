import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = { experience: Experience };

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-xl items-center space-y-7 flex-shrink-0 w-[500px] md:w-[800px] lg:w-[950px] snap-center bg-[#292929] px-5 py-3  hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-hidden">
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
          src={urlFor(experience?.companyImage).url()}
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
          {experience.technologies.map((technology) => (
            <Image
              key={technology._id}
              src={urlFor(technology.image).url()}
              height={40}
              width={40}
              alt={"TechStack"}
              className="rounded-full object-contain"
            />
          ))}
          {/* tech used */}
          {/* tech used */}
          {/* tech used */}
        </div>
        <p className="uppercase text-gray-300 py-3">
          <>
            {new Date(experience.dateStarted).toDateString()} -{"  "}
            {experience.isCurrentlyWorkingHere
              ? "Present"
              : new Date(experience.dateEnded).toDateString}
          </>
        </p>
        <ul className="list-disc space-y-1 ml-5 text-base ">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
