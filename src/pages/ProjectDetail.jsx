import { ExplodingBtn } from "../components/styles/ExplodingBtn.styled";
import { ProjectDetailStyled } from "../components/styles/ProjectDetail.styled";

import { Link, useLoaderData } from "react-router-dom";
import { useMemo } from "react";
import Technologies from "../components/Technologies";

export default function ProjectDetail({ projects }) {
  const { projectId, type } = useLoaderData();

  const [filteredProject, index] = useMemo(
    () =>
      projects
        .filter((project) => project.type === type)
        .reduce(
          (result, project, index) =>
            project.id === projectId ? [project, index] : result,
          []
        ),
    [projects, projectId, type]
  );

  const filteredProjects = useMemo(
    () => projects.filter((project) => project.type === type),
    [projects, type]
  );

  return (
    <ProjectDetailStyled>
      {filteredProject && (
        <div className="container">
          <div className="box">
            <img
              src={filteredProject.portfolioImage}
              alt={filteredProject.title}
            />

            <div className="description">
              <div className="title">
                <h1>{filteredProject.title}</h1>
                <hr />
                <h3>{filteredProject.subtitle}</h3>
              </div>
              <p>{filteredProject.description}</p>
              <div className="project-buttons">
                <a href={filteredProject.url} target="blank">
                  <ExplodingBtn reversed={true} width={110} height={40}>
                    Visit site
                  </ExplodingBtn>
                </a>
              </div>
              <Technologies icons={filteredProject.technologies} />
            </div>
          </div>
          <div className="projects">
            <Link
              to={`/projects/${filteredProjects.at(index - 1).type}/${
                filteredProjects.at(index - 1).id
              }`}
            >
              <div className="prevProject">
                <div className="arrow arrow-left"></div>
                <img
                  src={filteredProjects.at(index - 1).avatar}
                  alt={filteredProjects.at(index - 1).title}
                />
              </div>
            </Link>
            <Link
              to={`/projects/${
                filteredProjects.at(
                  index === filteredProjects.length - 1 ? 0 : index + 1
                ).type
              }/${
                filteredProjects.at(
                  index === filteredProjects.length - 1 ? 0 : index + 1
                ).id
              }`}
            >
              <div className="nextProject">
                <img
                  src={
                    filteredProjects.at(
                      index === filteredProjects.length - 1 ? 0 : index + 1
                    ).avatar
                  }
                  alt={
                    filteredProjects.at(
                      index === filteredProjects.length - 1 ? 0 : index + 1
                    ).title
                  }
                />
                <div className="arrow"></div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </ProjectDetailStyled>
  );
}
