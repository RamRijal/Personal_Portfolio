import ProjectsDisplay from "@/components/ProjectsDisplay";
import Experience from "../components/Experience";
import Homepage from "../components/Homepage";
import Skills from "../components/Skills";
import Contact from "./contact/page";
import Profile from "./profile/page";
import Projects from "./projects/page";
export default function Home() {
  return (
    <>
      <Homepage />
      <Skills />
      <Experience />
      <ProjectsDisplay />
      {/* <Contact /> */}
    </>
  );
}
