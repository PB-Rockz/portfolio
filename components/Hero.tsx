import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

function Hero({}: Props) {
  const [light, setLight] = useState(false);
  const [text, count] = useTypewriter({
    words: [
      "Hi, The name's Praful",
      "Guy-who-loves-coding.tsx",
      "<ButLovesTechMore/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  const changeImage = () => {
    setLight(true);
    console.log(light);
  };
  const revertImage = () => {
    setLight(false);
    console.log(light);
  };
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      {light && (
        <Image
          src="/helmet-light.png"
          className="rounded-full h-40 w-40 relative mx-auto object-cover"
          height={200}
          width={200}
          alt="ProfilePic"
          onMouseEnter={changeImage}
          onMouseLeave={revertImage}
        />
      )}
      {!light && (
        <Image
          src="/helmet-dark.png"
          className="rounded-full h-40 w-40 relative mx-auto object-cover"
          height={200}
          width={200}
          alt="ProfilePic"
          onMouseEnter={changeImage}
          onMouseLeave={revertImage}
        />
      )}

      <div
        className="z-20"
        onMouseEnter={changeImage}
        onMouseLeave={revertImage}
        onClick={changeImage}
      >
        <h2 className="text-sm text-gray-500 uppercase tracking-[15px]">
          tech enthusiast
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#0adff7" />
        </h1>
        <div className="pt-5">
          <Link href={"#about"}>
            <button className="heroButton">About</button>
          </Link>
          <Link href={"#experience"}>
            <button className="heroButton">Experience</button>
          </Link>
          <Link href={"#skills"}>
            <button className="heroButton">Skills</button>
          </Link>
          <Link href={"#projects"}>
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
