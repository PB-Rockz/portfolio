import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import { client } from "../sanity";
import { Experience, PageInfo, Project, SkillDef, Social } from "../typings";
import ScrollButton from "../components/ScrollButton";
type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: SkillDef[];
  projects: Project[];
  socials: Social[];
};
const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  return (
    <div className=" bg-[rgb(36,36,36)] h-screen text-white snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#0adff7]/80">
      <Head>
        <title>Portfolio</title>
      </Head>

      <Header socials={socials} />
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      <ScrollButton />

      {/* about */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      {/* experience */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>
      {/* skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      {/* projects */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      {/* contact me */}
      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const skills = await client.fetch(`*[_type == "skill"]`);
  const socials = await client.fetch(`*[_type == "social"]`);
  const pageInfo = await client.fetch(`*[_type=='pageInfo'][0]`);
  const experiences = await client.fetch(
    `*[_type=='experience']{...,technologies[]->}`
  );
  const projects = await client.fetch(
    `*[_type=='projects']{...,technologies[]->}`
  );
  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    // Next.js will attempt to regen the page:
    // => When a request comes in
    // => Every 10 seconds
    revalidate: 10,
  };
};
