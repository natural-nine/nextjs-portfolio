import { IconType } from "react-icons";

export interface IServiceTypes {
  title: string;
  about: string;
  Icon: IconType;
}

export interface IServices {
  service: IServiceTypes;
}

export interface ISkillTpyes {
  name: string;
  level: string;
  Icon: IconType;
}

export interface ISkills {
  data: ISkillTpyes;
}

export interface IProjectsTypes {
  name: string;
  description: string;
  imgPath: string;
  deployedUrl: string;
  githubUrl: string;
  category: Category[];
  keyTechs: string[];
}

export interface IProjects {
  data: IProjectsTypes;
}

export type Category = "react" | "next";
