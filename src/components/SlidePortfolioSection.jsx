import { useEffect, useRef, useState } from "react";
import Technologies from "./Technologies";
import { SlidePortfolioSectionStyled } from "./styles/SlidePortfolioSection.styled";
import { Link } from "react-router-dom";
import { ExplodingBtn } from "./styles/ExplodingBtn.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function truncate(text) {
  if (text.length > 160) {
    return text.slice(0, 160).trim() + "...";
  }
  return text;
}

export default function SlidePortfolioSection({ projects, type }) {
  const [controlledSwiper, setControlledSwiper] = useState(null);

  return (
    <SlidePortfolioSectionStyled>
      <h1 className="projects-type">{type}</h1>
      {projects.length > 0 && (
        <div className="container">
          <Swiper
            modules={[Controller, Pagination]}
            controller={{ control: controlledSwiper }}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="swiper"
            onSlideChange={(swiper) => {
              setControlledSwiper((controller) => ({
                ...controller,
                realIndex: swiper.realIndex,
              }));
            }}
            onSwiper={setControlledSwiper}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.avatar}>
                <Link to={`/projects/${project.type}/${project.id}`}>
                  <img src={project.avatar} alt={project.title} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="description">
            <div className="title">
              <h1>{projects[controlledSwiper?.realIndex ?? 0].title}</h1>
              <hr />
              <h3>{projects[controlledSwiper?.realIndex ?? 0].subtitle}</h3>
            </div>
            <p>
              {truncate(projects[controlledSwiper?.realIndex ?? 0].description)}
            </p>
            <div className="project-buttons">
              <a
                href={projects[controlledSwiper?.realIndex ?? 0].url}
                target="blank"
              >
                <ExplodingBtn reversed={true} width={110} height={40}>
                  Visit site
                </ExplodingBtn>
              </a>
              <Link
                to={`/projects/${
                  projects[controlledSwiper?.realIndex ?? 0].type
                }/${projects[controlledSwiper?.realIndex ?? 0].id}`}
              >
                <ExplodingBtn reversed={true} width={110} height={40}>
                  More Info
                </ExplodingBtn>
              </Link>
            </div>
            <Technologies
              icons={projects[controlledSwiper?.realIndex ?? 0].technologies}
            />
          </div>
        </div>
      )}
    </SlidePortfolioSectionStyled>
  );
}
