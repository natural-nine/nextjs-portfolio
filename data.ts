import { IconType } from "react-icons";
import { FaDesktop, FaCircle } from "react-icons/fa";
import { IProjectsTypes, IServiceTypes, ISkillTpyes } from "./types";

export const services: IServiceTypes[] = [
  {
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
    Icon: FaDesktop,
  },
  {
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
    Icon: FaDesktop,
  },
  {
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
    Icon: FaDesktop,
  },
  {
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
    Icon: FaDesktop,
  },
];

export const languages: ISkillTpyes[] = [
  { name: "Javascript", level: "85%", Icon: FaCircle },
  { name: "Typescript", level: "85%", Icon: FaCircle },
  { name: "React.Js", level: "85%", Icon: FaCircle },
  { name: "Next.Js", level: "70%", Icon: FaCircle },
  { name: "Python", level: "40%", Icon: FaCircle },
];

export const tools: ISkillTpyes[] = [
  { name: "React-Query", level: "85%", Icon: FaCircle },
  { name: "Redux", level: "70%", Icon: FaCircle },
  { name: "Recoil", level: "40%", Icon: FaCircle },
  { name: "Styled-Components", level: "85%", Icon: FaCircle },
  { name: "Tailwind Css", level: "50%", Icon: FaCircle },
];

export const projects: IProjectsTypes[] = [
  {
    name: "멘도롱제주",
    description: "블라브라라라라라라랄라블라블 바르응 바라아앋 브브브아아아아",
    imgPath: "/images/Frame-280.webp",
    deployedUrl: "🚫 https://mendorong-jeju.co.kr/ 🚫",
    githubUrl: "https://github.com/natural-nine/final_project",
    category: ["react"],
    keyTechs: [
      "React",
      "React-Query",
      "Styled-Components",
      "React-Hook-Form",
      "Recoil",
      "Material UI",
      "Socket.Io",
    ],
  },
  {
    name: "원티드 프리온보딩 Todo-List",
    description: "블라브라라라라라라랄라블라블 바르응 바라아앋 브브브아아아아",
    imgPath: "/images/todo.webp",
    deployedUrl:
      "https://natural-nine.github.io/wanted-pre-onboarding-frontend",
    githubUrl: "https://github.com/natural-nine/final_project",
    category: ["react"],
    keyTechs: ["Typescript", "React", "Styled-Components"],
  },
  {
    name: "Github-Searcher",
    description: "블라브라라라라라라랄라블라블 바르응 바라아앋 브브브아아아아",
    imgPath: "/images/searcher.webp",
    deployedUrl: "",
    githubUrl: "https://github.com/natural-nine/github-api-practise",
    category: ["react"],
    keyTechs: [
      "Typescript",
      "React",
      "React-Query",
      "Styled-Components",
      "Recoil",
    ],
  },
  {
    name: "My-Portfolio",
    description: "블라브라라라라라라랄라블라블 바르응 바라아앋 브브브아아아아",
    imgPath: "/images/portfolio.webp",
    deployedUrl: "",
    githubUrl: "https://github.com/natural-nine/nextjs-portfolio",
    category: ["next"],
    keyTechs: ["Typescript", "Next.js", "Tailwind css"],
  },
  {
    name: "My-Portfolio",
    description: "블라브라라라라라라랄라블라블 바르응 바라아앋 브브브아아아아",
    imgPath: "/images/portfolio.webp",
    deployedUrl: "",
    githubUrl: "https://github.com/natural-nine/nextjs-portfolio",
    category: ["next"],
    keyTechs: ["Typescript", "Next.js", "Tailwind css"],
  },
  {
    name: "My-Portfolio",
    description: "블라브라라라라라라랄라블라블 바르응 바라아앋 브브브아아아아",
    imgPath: "/images/portfolio.webp",
    deployedUrl: "",
    githubUrl: "https://github.com/natural-nine/nextjs-portfolio",
    category: ["next"],
    keyTechs: ["Typescript", "Next.js", "Tailwind css"],
  },
  {
    name: "My-Portfolio",
    description: "블라브라라라라라라랄라블라블 바르응 바라아앋 브브브아아아아",
    imgPath: "/images/portfolio.webp",
    deployedUrl: "",
    githubUrl: "https://github.com/natural-nine/nextjs-portfolio",
    category: ["next"],
    keyTechs: ["Typescript", "Next.js", "Tailwind css"],
  },
];
