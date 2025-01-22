import "./Projects.css";
import penguin from "../../img/penguins.jpg";
import ProjectArticle from "./ProjectArticle";
import { ProjectType } from "../../types/ProjectTypes";

const Projects = () => {
  const project1: ProjectType = {
    projectTitle: "Project title",
    projectDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur ea, commodi, fugit magnam voluptate id molestias dolores" +
      "quis cupiditate provident laboriosam? Quae impedit maiores dolore delectus enim consectetur! Nemo quos cumque repellat unde suscipit" +
      "reiciendis! Soluta architecto dignissimos deleniti numquam, praesentium eos doloremque odit laborum corporis perferendis labore hic vero" +
      "vel facilis veritatis doloribus quia nobis. Tenetur temporibus minima repellendus incidunt ipsum sapiente aliquid dolore, dolorem quam, dignissimos" +
      "vitae perspiciatis? Itaque et explicabo saepe velit perspiciatis delectus, mollitia, dolores commodi cumque nesciunt quasi ad beatae sit aspernatur sapiente!",
    projectTechnologies: ["React", "TypeScript"],
    projectImage: penguin,
    reverse: false,
  };

  const project2: ProjectType = {
    projectTitle: "Project title",
    projectDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur ea, commodi, fugit magnam voluptate id molestias dolores" +
      "quis cupiditate provident laboriosam? Quae impedit maiores dolore delectus enim consectetur! Nemo quos cumque repellat unde suscipit" +
      "reiciendis! Soluta architecto dignissimos deleniti numquam, praesentium eos doloremque odit laborum corporis perferendis labore hic vero" +
      "vel facilis veritatis doloribus quia nobis. Tenetur temporibus minima repellendus incidunt ipsum sapiente aliquid dolore, dolorem quam, dignissimos" +
      "vitae perspiciatis? Itaque et explicabo saepe velit perspiciatis delectus, mollitia, dolores commodi cumque nesciunt quasi ad beatae sit aspernatur sapiente!",
    projectTechnologies: ["React", "TypeScript"],
    projectImage: penguin,
    reverse: true,
  };

  const project3: ProjectType = {
    projectTitle: "Project title",
    projectDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur ea, commodi, fugit magnam voluptate id molestias dolores" +
      "quis cupiditate provident laboriosam? Quae impedit maiores dolore delectus enim consectetur! Nemo quos cumque repellat unde suscipit" +
      "reiciendis! Soluta architecto dignissimos deleniti numquam, praesentium eos doloremque odit laborum corporis perferendis labore hic vero" +
      "vel facilis veritatis doloribus quia nobis. Tenetur temporibus minima repellendus incidunt ipsum sapiente aliquid dolore, dolorem quam, dignissimos" +
      "vitae perspiciatis? Itaque et explicabo saepe velit perspiciatis delectus, mollitia, dolores commodi cumque nesciunt quasi ad beatae sit aspernatur sapiente!",
    projectTechnologies: ["React", "TypeScript"],
    projectImage: penguin,
    reverse: false,
  };

  const projects = [project1, project2, project3];

  return (
    <div className="section-blue">
      <section id="projects">
        <h2>Projects that I have done</h2>
        {projects.map((project, index) => {
          return <ProjectArticle project={project} key={index} />;
        })}
      </section>
    </div>
  );
};

export default Projects;
