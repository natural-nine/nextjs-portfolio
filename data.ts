import { IconType } from "react-icons";
import { FaDesktop, FaCircle } from "react-icons/fa";
import { IServiceTypes, ISkillTpyes } from "./types";

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
