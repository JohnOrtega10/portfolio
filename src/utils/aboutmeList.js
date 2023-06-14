import images from "../assets/images/index";

const degreesList = [
  {
    id: 1,
    school: "Universidad ECCI",
    date: "2020 - 2022",
    degree: "Tecnólogo en Desarrollo Informatíco",
    img: null,
    active: false,
  },
  {
    id: 2,
    school: "Academlo",
    date: "2021 - 2022",
    degree: "Bootcamp Desarrollo Web Full-Stack",
    img: images.academloDegree,
  },
];

const tegnologiesList = [
  {
    id: 1,
    type: "Frontend",
    tegnologies:
      "HTML, CSS, Javascript, Typescript, ReactJS, Redux, Bootstrap, Tailwind",
  },
  {
    id: 2,
    type: "Backend",
    tegnologies: "NodeJS, Express, Sequelize, PostgreSQL",
  },
];

export { degreesList, tegnologiesList };
