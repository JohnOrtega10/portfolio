import React from "react";
import { useLayoutEffect, useRef } from "react";
import gsap, { Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./footer.styles.css";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const refFooter = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tlFooter = gsap.timeline({
        scrollTrigger: {
          trigger: refFooter.current,
          start: "center bottom",
          id: "footer"
        },
      });

      tlFooter
        .from(".btn--footer", {
          duration: 1,
          opacity: 0,
          y: "100%",
          ease: Power2.easeOut,
        })
        .from(
          ".line--footer",
          {
            duration: 1,
            opacity: 0,
            x: "-100%",
            ease: Power2.easeOut,
          },
          "-=1"
        )
        .from([".footer__list", ".footer__credits"], {
          duration: 1,
          opacity: 0,
          y: "10%",
          ease: Power2.easeOut,
        });
    }, refFooter);
    return () => ctx.revert();
  }, []);

  return (
    <footer className="footer" ref={refFooter}>
      <div className="container">
        <div className="footer__menu">
          <a className="btn btn--footer" href="#home">
            <p className="btn__text">Volver al inicio</p>
            <i className="btn__icon uil uil-arrow-up"></i>
          </a>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="#aboutme" className="footer__link">
                Sobre mí
              </a>
            </li>
            <li className="footer__item">
              <a href="#portfolio" className="footer__link">
                Portafolio
              </a>
            </li>
            <li className="footer__item">
              <a href="#contact" className="footer__link">
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <div className="line-container">
          <div className="line line--footer"></div>
        </div>
        <p className="footer__credits">John Edison Ortega Parra | 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
