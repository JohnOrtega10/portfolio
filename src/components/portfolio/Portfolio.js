import React, { useLayoutEffect, useRef } from "react";
import gsap, { Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectsList } from "../../utils/projectsList";
import "./portfolio.styles.css";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const listRef = useRef([]);
  listRef.current = [];

  useLayoutEffect(() => {
    listRef.current.forEach((el, i) => {
      const tlPortfolio = gsap.timeline({
        scrollTrigger: {
          id: `portfolio-${i + 1}`,
          trigger: el,
          start: "top center",
        },
      });

      tlPortfolio
        .from(el, {
          opacity: 0,
          x: 100,
          duration: 1.5,
          ease: Power2.easeOut,
        })
        .to(
          el.querySelector(".portfolio__img-animation"),
          {
            duration: 1.5,
            x: "-101%",
            ease: Power2.easeOut,
          },
          "-= .8"
        )
        .from(
          el.querySelector(".portfolio__text-anim"),
          {
            duration: 1.5,
            opacity: 0,
            y: "40%",
            ease: Power2.easeOut,
          },
          "-= .3"
        )
        .from(
          el.querySelectorAll(".line--portfolio"),
          {
            duration: 1.5,
            x: "-100%",
            opacity: 0,
            ease: Power2.easeOut,
          },
          "-= .3"
        );
    });
  }, []);

  const addToRef = (el) => {
    if (el && !listRef.current.includes(el)) {
      listRef.current.push(el);
    }
  };

  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <h2 className="portfolio__title title ">Conoce mis</h2>
        <div className="portfolio__title-container">
          <h2 className="portfolio__title title">proyectos</h2>
          <div className="portfolio__description">
            <p className="text text--portfolio">
              Aquí hay algunos de mis proyectos más recientes. ¿Quieres ver más?
              puedes acceder a mi cuenta de{" "}
              <a
                className="link-style"
                href="https://github.com/JohnOrtega10"
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
              .
            </p>
          </div>
        </div>

        <div className="portfolio__projects">
          {projectsList.map((project) => (
            <a
              key={project.id}
              ref={addToRef}
              className="portfolio__project"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="portfolio__img-container">
                <div className="portfolio__img-animation"></div>
                <img src={project.image} alt="" className="portfolio__img" />
              </div>
              <div className="portfolio__information">
                <div className="portfolio__text-anim">
                  <span className="portfolio__tecnologies">
                    {project.tecnologie}
                  </span>
                  <p className="portfolio__subtitle">{project.name}</p>
                </div>
              </div>
              <div className="line__container">
                <span className="line line--portfolio"></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
