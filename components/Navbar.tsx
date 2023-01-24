import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import NavItems from "./NavItems";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("About");

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold border-b-4 md:text-2xl">{activeItem}</span>
      <div className="flex space-x-5 text-lg">
        <NavItems
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          route="/"
          name="About"
        />
        <NavItems
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          route="projects"
          name="Projects"
        />
        <NavItems
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          route="resume"
          name="Resume"
        />
      </div>
    </div>
  );
};

export default Navbar;
