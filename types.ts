import { IconType } from "react-icons";

export interface IServiceTypes {
  title: string;
  about: string;
  Icon: IconType;
}

export interface IServices {
  service: IServiceTypes;
}
