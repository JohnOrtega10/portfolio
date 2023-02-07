import React, { useState, useEffect } from "react";
import classNames from "classnames";
import "./cursor.styles.css";

const Cursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHidden, setIsHidden] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [projectHovered, setProjectHovered] = useState(false);

  useEffect(() => {
    let nodes = [];
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseLeave = () => {
      setIsHidden(true);
    };

    const onMouseEnter = () => {
      setIsHidden(false);
    };

    const onMouseOver = () => {
      setLinkHovered(true);
    };

    const onMouseOut = () => {
      setLinkHovered(false);
    };

    const onMouseOverProject = () => {
      setProjectHovered(true);
    };

    const onMouseOutProject = () => {
      setProjectHovered(false);
    };

    const onMouseDown = () => {
      setIsClicked(true);
    };

    const onMouseUp = () => {
      setIsClicked(false);
    };

    nodes = document.querySelectorAll(
      "a, button, input, textarea, .portfolio__project, .cursor-anim"
    );

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    nodes &&
      nodes.forEach((el) => {
        if (el.className === "portfolio__project") {
          el.addEventListener("mouseover", onMouseOverProject);
          el.addEventListener("mouseout", onMouseOutProject);
          return;
        }

        el.addEventListener("mouseover", onMouseOver);
        el.addEventListener("mouseout", onMouseOut);
      });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);

      nodes &&
        nodes.forEach((el) => {
          if (el.className === "portfolio__project") {
            el.removeEventListener("mouseover", onMouseOverProject);
            el.removeEventListener("mouseout", onMouseOutProject);
            return;
          }

          el.removeEventListener("mouseover", onMouseOver);
          el.removeEventListener("mouseout", onMouseOut);
        });
    };
  }, []);

  const arrayClasses = [
    { [`cursor__inner`]: true },
    { [`is-hidden`]: isHidden },
    { [`is-hovered`]: linkHovered },
    { [`is-clicked`]: isClicked },
    { [`is-hoveredProject`]: projectHovered },
  ];

  let classes = classNames(arrayClasses);

  return (
    <div
      className={`cursor ${projectHovered ? "cursorProject" : null}`}
      style={{
        "--cursor-x": `${position.x}px`,
        "--cursor-y": `${position.y}px`,
      }}
    >
      <div className={classes}></div>
    </div>
  );
};

export default Cursor;
