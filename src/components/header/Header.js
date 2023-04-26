import React, { useLayoutEffect, useRef } from "react";
import gsap, { Expo } from "gsap";
import "./header.styles.css";

const Header = () => {
  const menu = useRef();
  const menuText = useRef();

  const menuAnimation = gsap.timeline({ paused: true, reversed: true });
  const elm = gsap.utils.selector(menu);

  useLayoutEffect(() => {
    menuAnimation
      .from(menuText.current, {
        duration: 1,
        y: "-100%",
        ease: Expo.easeInOut,
      })
      .from(
        menu.current,
        {
          duration: 1,
          y: "-100%",
          ease: Expo.easeInOut,
          transformOrigin: "right top",
        },
        0
      )
      .from(
        elm(".menu__link"),
        {
          duration: 1.5,
          y: "200",
          stagger: 0.2,
          ease: Expo.easeInOut,
        },
        "-=0.5"
      )
      .from(
        elm(".personal-information"),
        {
          duration: 1,
          opacity: 0,
          ease: Expo.easeInOut,
        },
        "-=0.5"
      );
  }, [elm, menuAnimation]);

  const toggleMenu = () => {
    menuAnimation.reversed()
      ? menuAnimation.restart()
      : menuAnimation.reverse();
  };

  return (
    <div className="menu">
      <a className="menu__header menu__header--logo" href="#home">
        je
      </a>
      <div className="menu__header menu__header--btn" onClick={toggleMenu}>
        <div className="menu__btn" ref={menuText}>
          <div className="menu__tag cursor-anim">CERRAR</div>
          <div className="menu__tag menu__tag--open cursor-anim">MENU</div>
        </div>
      </div>
      <div className="menu__content" ref={menu}>
        <div className="menu__container container">
          <ul className="menu__list">
            <li className="menu__item">
              <a href="#home" className="menu__link" onClick={toggleMenu}>
                <div className="menu__number">01.</div>
                <div className="menu__text">Inicio</div>
              </a>
            </li>
            <li className="menu__item">
              <a href="#aboutme" className="menu__link" onClick={toggleMenu}>
                <div className="menu__number">02.</div>
                <div className="menu__text">Sobre mí</div>
              </a>
            </li>
            <li className="menu__item">
              <a href="#portfolio" className="menu__link" onClick={toggleMenu}>
                <div className="menu__number">03.</div>
                <div className="menu__text">Portafolio</div>
              </a>
            </li>
            <li className="menu__item">
              <a href="#contact" className="menu__link" onClick={toggleMenu}>
                <div className="menu__number">04.</div>
                <div className="menu__text">Contacto</div>
              </a>
            </li>
          </ul>
          <div className="personal-information">
            <ul className="personal-information__list">
              <li className="personal-information__item">
                <p className="personal-information__title">Ubicación</p>
                <p className="personal-information__description text">
                  Bogotá, Colombia
                </p>
              </li>
              <li className="personal-information__item">
                <p className="personal-information__title">Celular</p>
                <p className="personal-information__description text">
                  +57 3124873311
                </p>
              </li>
              <li className="personal-information__item">
                <p className="personal-information__title">
                  Correo electrónico
                </p>
                <a
                  href="mailto:johnortega.dev@gmail.com"
                  className="personal-information__description text"
                >
                  johnortega.dev@gmail.com
                </a>
              </li>
              <li className="personal-information__item">
                <p className="personal-information__title">Redes</p>
                <p className="personal-information__description text">
                  <a
                    href="https://www.linkedin.com/in/john-ortega-81aa01231/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Linkedin
                  </a>
                  ,{" "}
                  <a
                    href="https://github.com/JohnOrtega10"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
