import Contact from "../../components/Contanct/Contact";
import Intro from "../../components/Intro/Intro";
import Projects from "../../components/Projects/Projects";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Intro />
      <div className="gradient"></div>
      <Projects />
      <div className="gradient"></div>
      <Contact />
      <div className="gradient"></div>
    </>
  );
};

export default Home;
