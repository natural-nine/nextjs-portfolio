import { Dispatch, SetStateAction } from "react";
import { IconType } from "react-icons";

export interface IServiceTypes {
  id: number;
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
  Icon: IconType | string;
}

export interface ISkills {
  data: ISkillTpyes;
}

export interface IProjectsTypes {
  id: number;
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
  showDetail: number | null;
  setShowDetail: Dispatch<SetStateAction<number | null>>;
}

export type Category = "react" | "next";
