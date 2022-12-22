import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] h-screen text-white snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#0adff7]/80">
      <Head>
        <title>Portfolio</title>
      </Head>

      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/* about */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* experience */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      {/* skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      {/* projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      {/* contact me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
      <Link href={"#hero"}>
        <footer className="sticky bottom-5 cursor-pointer w-full">
          <div className="flex items-center justify-end p-10">
            <ArrowUpIcon className="h-8 w-8 border" />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
