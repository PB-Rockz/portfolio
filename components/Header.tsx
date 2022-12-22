import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky p-5 top-0 items-start justify-between flex max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://twitter.com/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://instagram.com/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://facebook.com/"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <Link href={"#contact"}>
        <motion.div
          className="flex flex-row items-center text-gray-300 cursor-pointer"
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            get in touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}

export default Header;
