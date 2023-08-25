import { useMemo } from "react";
import { ProjectsGalleryStyled } from "../components/styles/ProjectsGallery.styled";

import { Link, useLoaderData } from "react-router-dom";

export default function ProjectsGallery({ projects }) {
  const { type } = useLoaderData();

  const filteredProjects = useMemo(
    () => projects.filter((project) => project.type === type),
    [projects, type]
  );

  return (
    <ProjectsGalleryStyled>
      <h1>{type} projects</h1>
      {filteredProjects && (
        <div className="container">
          {filteredProjects.map((project) => (
            <div className="box" key={project.id}>
              <Link to={`/projects/${project.type}/${project.id}`}>
                <div className="imgBx">
                  <img src={project.galleryImage} alt={project.title} />
                </div>
                <div className="content">
                  <div>
                    <h1>{project.title}</h1>
                    <hr />
                    <h3>{project.subtitle}</h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </ProjectsGalleryStyled>
  );
}
