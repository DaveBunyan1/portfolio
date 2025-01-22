import { ProjectType } from "../../types/ProjectTypes";

type ProjectArticleProps = {
  project: ProjectType;
};

const ProjectArticle = ({ project }: ProjectArticleProps) => {
  return (
    <article className={project.reverse ? "reverse" : ""}>
      <div className="text">
        <h3>{project.projectTitle}</h3>
        <p className="blackbox">{project.projectDescription}</p>
        <h4>Technologies used include:</h4>
        <ul>
          {project.projectTechnologies.map((technology, index) => {
            return <li key={index}>{technology}</li>;
          })}
        </ul>
      </div>
      <img src={project.projectImage} alt="projectImage"></img>
    </article>
  );
};

export default ProjectArticle;
