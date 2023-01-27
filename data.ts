import { FaDesktop, FaCircle, FaHandshake } from "react-icons/fa";
import { IProjectsTypes, IServiceTypes, ISkillTpyes } from "./types";

export const services: IServiceTypes[] = [
  {
    id: 1,
    title: "프론트엔드 개발",
    about: "HTML, CSS, React.js 를 활용하여 SPA 만들 수 있습니다.",
    Icon: FaDesktop,
  },
  {
    id: 2,
    title: "협업",
    about:
      "여러 코스에서 프론트엔드, 백엔드 등 다수의 협업 경험을 가지고 있습니다.",
    Icon: FaHandshake,
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
    id: 1,
    name: "멘도롱제주",
    description:
      "제주도 숙소 추천 커뮤니티 입니다. 숙소의 전반적인 부분을 맡았으며 디자이너, 백엔드, 프론트엔드 총 6명이 협업하여 작업했습니다. 현재 웹사이트는 닫혀 있습니다.",
    imgPath: "/images/Frame-280.webp",
    deployedUrl: "",
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
      "Kakao Map API",
    ],
  },
  {
    id: 2,
    name: "Github-Searcher",
    description:
      "github API 를 이용하여 레포지토리 검색, 유저 검색을 할 수 있습니다. 레포지토리는 무한스크롤, 유저는 페이지네이션으로 구현했으며 react-query 와 typescript 학습하기 위해 만들었습니다. (현재 토큰이 없기 때문에 횟수에 제한이 있습니다.)",
    imgPath: "/images/searcher.webp",
    deployedUrl: "https://github-api-practise.vercel.app/",
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
    id: 3,
    name: "Todo-List",
    description:
      "간단한 투두리스트입니다. 라이브러리 없이 회원가입 및 로그인 에러핸들링 기능을 하고 todo CRUD 기능을 구현했습니다.",
    imgPath: "/images/todo.webp",
    deployedUrl:
      "https://natural-nine.github.io/wanted-pre-onboarding-frontend",
    githubUrl: "https://github.com/natural-nine/wanted-pre-onboarding-frontend",
    category: ["react"],
    keyTechs: ["Typescript", "React", "Styled-Components"],
  },
  {
    id: 4,
    name: "Github Issues",
    description:
      "특정 issue 목록에 대한 결과를 무한스크롤을 하여 보여주고 issue 상세 페이지를 보여줍니다. ",
    imgPath: "/images/issues.webp",
    deployedUrl: "",
    githubUrl: "https://github.com/natural-nine/pre-onboarding-7th-1-2",
    category: ["react"],
    keyTechs: ["Typescript", "React.js", "Context-Api"],
  },
  {
    id: 5,
    name: "My-Portfolio",
    description:
      "next.js로 만든 개인 포트폴리오 웹사이트 입니다. typescript 와 tailwind css 를 사용하여 구현했습니다.",
    imgPath: "/images/my.webp",
    deployedUrl: "",
    githubUrl: "https://github.com/natural-nine/nextjs-portfolio",
    category: ["next"],
    keyTechs: ["Typescript", "Next.js", "Tailwind css"],
  },
  {
    id: 6,
    name: "Countries-List",
    description:
      "restcountries API 를 이용하여 next.js 로 구현했습니다. getStaticProps 과 getStaticPaths 학습하기 위해 만들었습니다. ",
    imgPath: "/images/countries.webp",
    deployedUrl: "",
    githubUrl: "https://github.com/natural-nine/nextjs-practise",
    category: ["next"],
    keyTechs: ["Typescript", "Next.js", "Styled-components"],
  },
  {
    id: 7,
    name: "개인 블로그",
    description: "현재 개발 중...",
    imgPath: "/images/not.webp",
    deployedUrl: "",
    githubUrl: "https://github.com/natural-nine/nextjs-personal-blog",
    category: ["next"],
    keyTechs: ["Typescript", "Next.js"],
  },
  
];
