import { Category } from "@/types";

const ProjectNavItem = ({
  value,
  filterCategory,
  active,
}: {
  value: Category | "all";
  filterCategory: (category: Category | "all") => void;
  active: string;
}) => {
  let className = "capitalize cursor-pointer hover:text-green-300";
  if (active === value) className += " text-green-300";
  return (
    <li onClick={() => filterCategory(value)} className={className}>
      {value}
    </li>
  );
};

export default ProjectNavItem;
