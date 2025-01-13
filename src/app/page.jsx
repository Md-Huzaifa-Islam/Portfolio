import { App } from "@/client/Background";
import AboutMe from "@/Components/AboutMe";
import Banner from "@/Components/Banner";
import ContactContainer from "@/Components/ContactContainer";
import EducationContainer from "@/Components/EducationContainer";
import ProjectsContainer from "@/Components/ProjectsContainer";
import SkillContainer from "@/Components/SkillContainer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section id="home" className="">
        <Banner />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="skills">
        <SkillContainer />
      </section>
      <section id="education">
        <EducationContainer />
      </section>
      <section id="projects">
        <ProjectsContainer />
      </section>
      <section id="contact">
        <ContactContainer />
      </section>
    </>
  );
}
