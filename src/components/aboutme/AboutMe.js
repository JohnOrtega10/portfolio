import React from "react";
import { useRef, useLayoutEffect } from "react";
import gsap, { Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { degreesList, tegnologiesList } from "../../utils/aboutmeList";
import "./aboutme.styles.css";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const refAboutmeContent = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let animationText = gsap.timeline({
        scrollTrigger: {
          trigger: ".aboutme__items--text",
          start: "-210 center",
        },
      });

      animationText
        .from(".aboutme__items--text", {
          opacity: 0,
          y: 200,
          duration: 1.2,
          ease: Power2.easeOut,
        })
        .from(
          ".btn--aboutme",
          {
            opacity: 0,
            x: -100,
            duration: 1,
            ease: Power2.easeOut,
          },
          "-=.8"
        );

      let animationEducationItems = gsap.timeline({
        scrollTrigger: {
          trigger: ".aboutme__items--education",
          start: "-210 center",
        },
      });

      animationEducationItems
        .from(".aboutme__items--education", {
          opacity: 0,
          y: 200,
          duration: 1.2,
          ease: Power2.easeOut,
        })
        .from(
          [".line--education", ".aboutme__icon"],
          {
            opacity: 0,
            x: "-100%",
            duration: 1,
            ease: Power2.easeOut,
          },
          "-=.8"
        );

      let animationTecnologiesItems = gsap.timeline({
        scrollTrigger: {
          trigger: ".aboutme__items--tecnologies",
          start: "-210 center",
        },
      });

      animationTecnologiesItems
        .from(".aboutme__items--tecnologies", {
          opacity: 0,
          y: 200,
          duration: 1.2,
          ease: Power2.easeOut,
        })
        .from(
          ".line--tecnologies",
          {
            opacity: 0,
            x: "-100%",
            duration: 1,
            ease: Power2.easeOut,
          },
          "-= .8"
        );
    }, refAboutmeContent);

    return () => ctx.revert();
  }, []);

  const toogleAccordion = (el) => {
    const figure = el.currentTarget.nextElementSibling;
    const arrow = el.currentTarget.childNodes[1];

    if (figure.style.height === "0px") {
      figure.style.height = figure.scrollHeight + "px";
      arrow.style.transform = "rotate(45deg)";
      arrow.style.transition = ".5s";
      return;
    }

    figure.style.height = "0px";
    arrow.style.transform = "rotate(-45deg)";
  };

  return (
    <section className="aboutme section" id="aboutme">
      {/* <div className="scroll-effect">
        <h2 className="title scroll-effect__text">Full-stack</h2>
        <h2 className="title scroll-effect__text">Full-stack</h2>
        <h2 className="title scroll-effect__text">Full-stack</h2>
        <h2 className="title scroll-effect__text">Full-stack</h2>
      </div> */}
      <div className="aboutme__container container" ref={refAboutmeContent}>
        <div
          className="aboutme__items aboutme__items--text"
          style={{ marginTop: "0" }}
        >
          <h2 className="subtitle">Hola, soy John</h2>
          <p className="text text--anim">
            Un desarrollador web full-stack. Actualmente estudiante de
            ingeniería de sistemas. En mi tiempo libre disfruto de los
            videojuegos, el dibujo y la creación de nuevos proyectos. Me motiva
            aprender constantemente y resolver problemas de forma creativa. Mis
            tecnologias preferidas son ReactJS y NodeJS.
          </p>
          <a
            className="btn btn--aboutme"
            href="https://drive.google.com/file/d/1tMRyUm2h039gdFGn6fEH8_9cArcD1Tg3/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="btn__text">Descargar CV</p>
            <i className="btn__icon uil uil-arrow-down"></i>
          </a>
        </div>
        <div className="aboutme__items aboutme__items--education">
          <h2 className="subtitle">Educación</h2>
          <p className="aboutme__text text">Mis estudios más recientes.</p>
          {degreesList.map((degree) => (
            <div key={degree.id}>
              <div className="line-container">
                <div className="line line--education"></div>
              </div>
              <div
                className="aboutme__item cursor-anim"
                onClick={toogleAccordion}
              >
                <div>
                  <div className="aboutme__item-information">
                    <span className="aboutme__date">{degree.date}</span>
                    <p className="text " style={{ textTransform: "uppercase" }}>
                      {degree.school}
                    </p>
                  </div>
                  <p className="text">{degree.degree}</p>
                </div>
                <div
                  className="aboutme__icon"
                  style={{ transform: "rotate(-45deg)" }}
                >
                  <i className="aboutme__arrow uil uil-arrow-right"></i>
                </div>
              </div>
              <figure className="figure" style={{ height: "0" }}>
                <img src={degree.img} alt="" className="img img--aboutme" />
              </figure>
            </div>
          ))}
          <div className="line-container">
            <div className="line line--education"></div>
          </div>
        </div>
        <div className="aboutme__items aboutme__items--tecnologies">
          <h2 className="subtitle">Habilidades</h2>
          <p className="text aboutme__text">
            Tecnologías que he utilizado para desarrollar mis proyectos.
          </p>
          {tegnologiesList.map((tecnologie) => (
            <div key={tecnologie.id}>
              <div className="line-container">
                <span className="line line--tecnologies"></span>
              </div>
              <div className="aboutme__item aboutme__item-tecnologies">
                <p className="text" style={{ textTransform: "uppercase" }}>
                  {tecnologie.type}
                </p>
                <p className="text">{tecnologie.tegnologies}</p>
              </div>
            </div>
          ))}
          <div className="line-container">
            <span className="line line--tecnologies"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
