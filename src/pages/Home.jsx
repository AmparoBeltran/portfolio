import { useMemo } from "react";

import MainSection from "../components/MainSection";
import SlidePortfolioSection from "../components/SlidePortfolioSection";
import { HomeStyled } from "../components/styles/Home.styled";

function Home({ projects }) {
  const devProjects = useMemo(
    () => projects.filter((project) => project.type === "development"),
    [projects]
  );
  const designProjects = useMemo(
    () => projects.filter((project) => project.type === "design"),
    [projects]
  );

  return (
    <>
      <MainSection />
      <HomeStyled>
        <SlidePortfolioSection type="Development" projects={devProjects} />
        <SlidePortfolioSection type="Design" projects={designProjects} />
      </HomeStyled>
    </>
  );
}

export default Home;
