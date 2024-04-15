import Contact from "./home/contact/page";
import Main from "./home/page";
import Experience from "./home/profile/experience/page";
import Profile from "./home/profile/page";
import Skills from "./home/profile/skills/page";
import Projects from "./home/projects/page";

export default function Home() {
  return (
    <div>
      <Main />
      <Profile/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  );
}
