import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface INavTypes {
  activeItem: string;
  name: string;
  setActiveItem: Dispatch<SetStateAction<string>>;
  route: string;
}

const NavItems = ({ activeItem, setActiveItem, route, name }: INavTypes) => {
  return (
    <>
      {activeItem !== name && (
        <Link href={route}>
          <span 
          className="hover:text-green-200"
            onClick={() => {
              setActiveItem(name);
            }}
          >
            {name}
          </span>
        </Link>
      )}
    </>
  );
};

export default NavItems;
