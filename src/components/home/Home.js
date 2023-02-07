import React, { useRef, useLayoutEffect } from "react";
import { gsap, Power2 } from "gsap";
import Header from "../header/Header";
import "./home.styles.css";

const Home = () => {
  const home = useRef();

  const timeLineHome = gsap.timeline();
  const el = gsap.utils.selector(home);

  useLayoutEffect(() => {
    timeLineHome
      .from(el(".home__name"), {
        delay: 0.5,
        duration: 1,
        yPercent: 100,
        opacity: 0,
        skewY: 10,
        ease: Power2.easeOut,
        stagger: {
          amount: 1,
        },
      })
      .from(el(".btn--home"), {
        opacity: 0,
        duration: 1,
        ease: Power2.easeOut,
      });
  }, [el, timeLineHome]);

  return (
    <section className="home" id="home" ref={home}>
      <Header />
      <div className="home__content">
        <div className="home__titles">
          <div className="home__title">
            <h1 className="home__name">John Edison</h1>
          </div>
          <div className="home__title">
            <h1 className="home__name">Web Developer</h1>
          </div>
        </div>
        <a className="btn btn--home" href="#contact">
          <p className="btn__text">Contáctame</p>
          <i className="uil uil-arrow-down btn__icon"></i>
        </a>
      </div>
    </section>
  );
};

export default Home;
